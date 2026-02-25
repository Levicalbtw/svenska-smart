import { useState, useEffect, useMemo } from 'react';
import { useCourse } from '../CourseContext';
import { courseStructure } from '../data/courseData';
import { CheckCircle2, XCircle, ArrowRight, Trophy, RotateCcw } from 'lucide-react';
import './LessonInterface.css';

// Build a global pool of all English translations for diverse wrong answers
function buildTranslationPool() {
    const pool = new Set();
    for (const level of Object.values(courseStructure)) {
        for (const mod of level.modules) {
            for (const item of (mod.items || [])) {
                if (item.english) pool.add(item.english);
                if (item.chunk) pool.add(item.chunk);
                // Also grab English from dialogue lines
                if (item.lines) {
                    for (const line of item.lines) {
                        if (line.english) pool.add(line.english);
                    }
                }
            }
        }
    }
    return Array.from(pool);
}

function pickWrongAnswers(correctAnswer, pool, count = 3) {
    const candidates = pool.filter(t => t !== correctAnswer);
    // Shuffle and pick
    const shuffled = [...candidates].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Common Swedish words used as distractors in grammar builders
const DISTRACTOR_POOL = [
    'inte', 'mycket', 'här', 'där', 'alla', 'ingen', 'hon', 'han',
    'den', 'det', 'vi', 'de', 'mitt', 'din', 'sin', 'kan', 'ska',
    'vill', 'har', 'var', 'när', 'hur', 'vad', 'som', 'för', 'med',
    'till', 'av', 'på', 'om', 'men', 'och', 'så', 'nu', 'att',
    'sedan', 'bara', 'redan', 'aldrig', 'alltid', 'ofta', 'snabbt',
    'hemma', 'ute', 'bra', 'stor', 'liten', 'ny', 'gammal'
];

function pickDistractors(correctParts, count = 2) {
    const correctSet = new Set(correctParts.map(p => p.replace(/[.,!?]/g, '').toLowerCase()));
    const candidates = DISTRACTOR_POOL.filter(w => !correctSet.has(w.toLowerCase()));
    const shuffled = [...candidates].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

export default function LessonInterface({ levelId, moduleId, onBack }) {
    const { updateProgress, addXp } = useCourse();
    const moduleData = courseStructure[levelId].modules.find(m => m.id === moduleId);

    // Build the translation pool once
    const translationPool = useMemo(() => buildTranslationPool(), []);

    // The active item list — starts as module items, gets replaced with wrong items during revision
    const [itemQueue, setItemQueue] = useState(moduleData?.items || []);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [completed, setCompleted] = useState(false);
    const [shuffledOptions, setShuffledOptions] = useState([]);
    const [userSentence, setUserSentence] = useState([]);
    const [availableParts, setAvailableParts] = useState([]);

    // Revision tracking
    const [wrongItems, setWrongItems] = useState([]);
    const [isRevisionRound, setIsRevisionRound] = useState(false);
    const [showRevisionScreen, setShowRevisionScreen] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);

    const currentItem = itemQueue?.[currentIndex];

    // Helper to determine if a screen is purely informational and shouldn't require answering
    const isInfoScreen = currentItem?.type === 'theory' || currentItem?.type === 'dialogue';

    useEffect(() => {
        if (currentItem?.type === 'cognate' || currentItem?.type === 'basic' || currentItem?.type === 'chunking') {
            const correctAnswer = currentItem.english || currentItem.chunk;
            const wrongOptions = pickWrongAnswers(correctAnswer, translationPool, 3);

            const options = [correctAnswer, ...wrongOptions];
            setShuffledOptions(options.sort(() => Math.random() - 0.5));
        } else if (currentItem?.type === 'grammar_builder') {
            setUserSentence([]);
            const distractors = pickDistractors(currentItem.parts, 2);
            const allParts = [...currentItem.parts, ...distractors];
            setAvailableParts(allParts.sort(() => Math.random() - 0.5));
        }
    }, [currentIndex, currentItem, translationPool]);

    if (!moduleData || !moduleData.items || moduleData.items.length === 0) {
        return (
            <div className="lesson-container glass-panel">
                <h2>Content coming soon!</h2>
                <button className="btn btn-secondary" onClick={onBack}>Go Back</button>
            </div>
        );
    }

    const handleSelect = (option) => {
        if (isCorrect !== null) return; // Prevent changing answer
        setSelectedAnswer(option);

        // Check if correct
        const correct = currentItem.english === option || currentItem.chunk === option || currentItem.sentence === option;
        setIsCorrect(correct);

        if (correct) {
            addXp(10);
            setCorrectCount(prev => prev + 1);
        } else {
            // Track this wrong item for revision
            setWrongItems(prev => [...prev, currentItem]);
        }
    };

    const handleNext = () => {
        if (currentIndex < itemQueue.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setIsCorrect(null);
        } else {
            // Finished current pass — check if there are wrong items
            if (wrongItems.length > 0) {
                // Show revision interstitial
                setShowRevisionScreen(true);
            } else {
                // All correct — complete the module!
                setCompleted(true);
                // Advance Logic
                const nextModId = moduleId + 1;
                const nextModExists = courseStructure[levelId].modules.find(m => m.id === nextModId);

                if (nextModExists) {
                    updateProgress({ level: levelId, module: nextModId });
                } else {
                    const levels = ['A1', 'A2', 'B1', 'B2', 'C1'];
                    const currentLevelIndex = levels.indexOf(levelId);
                    if (currentLevelIndex < levels.length - 1) {
                        const nextLevel = levels[currentLevelIndex + 1];
                        updateProgress({ level: nextLevel, module: 1 });
                    }
                }
            }
        }
    };

    const handleStartRevision = () => {
        // Start a revision round with only the wrong items
        setItemQueue([...wrongItems]);
        setWrongItems([]);
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setIsRevisionRound(true);
        setShowRevisionScreen(false);
    };

    // Revision interstitial screen
    if (showRevisionScreen) {
        return (
            <div className="lesson-container glass-panel revision-interstitial animate-fade-in">
                <RotateCcw size={56} color="#f0a500" className="revision-icon" />
                <h2>Almost there!</h2>
                <p className="revision-subtitle">
                    You got <strong>{wrongItems.length}</strong> {wrongItems.length === 1 ? 'question' : 'questions'} wrong. 
                    Let's review {wrongItems.length === 1 ? 'it' : 'them'} before completing the module.
                </p>
                <div className="revision-items-preview">
                    {wrongItems.map((item, i) => (
                        <div key={i} className="revision-preview-chip">
                            {item.swedish || item.chunk || item.english}
                        </div>
                    ))}
                </div>
                <button className="btn btn-primary" onClick={handleStartRevision}>
                    Start Revision <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                </button>
            </div>
        );
    }

    if (completed) {
        return (
            <div className="lesson-container glass-panel success-view animate-fade-in">
                <Trophy size={64} color="gold" className="success-icon" />
                <h2>Lesson Complete!</h2>
                <p>You earned {correctCount * 10} XP</p>
                <button className="btn btn-primary" onClick={onBack}>Return to Path</button>
            </div>
        );
    }

    const renderContent = () => {
        if (currentItem.type === 'theory') {
            return (
                <div className="theory-view animate-fade-in" style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
                    <span className="type-badge">Concept</span>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary-accent)' }}>{currentItem.title}</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-primary)' }}>{currentItem.content}</p>
                </div>
            );
        }

        if (currentItem.type === 'dialogue') {
            return (
                <div className="dialogue-view animate-fade-in" style={{ width: '100%', maxWidth: '700px', textAlign: 'left' }}>
                    <span className="type-badge">Conversation</span>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>{currentItem.title}</h2>
                    <div className="dialogue-container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {currentItem.lines.map((line, idx) => (
                            <div key={idx} className="dialogue-bubble" style={{
                                background: idx % 2 === 0 ? 'rgba(254, 204, 2, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                                padding: '1rem 1.5rem',
                                borderRadius: 'var(--radius-md)',
                                borderLeft: idx % 2 === 0 ? '4px solid var(--primary-accent)' : '4px solid var(--text-secondary)'
                            }}>
                                <strong style={{ color: idx % 2 === 0 ? 'var(--primary-accent)' : '#fff', display: 'block', marginBottom: '0.25rem' }}>{line.speaker}</strong>
                                <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{line.swedish}</p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>"{line.english}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        if (currentItem.type === 'cognate' || currentItem.type === 'basic' || currentItem.type === 'chunking') {
            return (
                <div className="mcq-view animate-fade-in">
                    <span className="type-badge">{isRevisionRound ? '🔄 Revision' : currentItem.type}</span>
                    <h2 className="target-text">{currentItem.swedish || currentItem.chunk}</h2>
                    {currentItem.note && <p className="hint-text">{currentItem.note}</p>}

                    <div className="options-grid">
                        {shuffledOptions.map((opt, i) => (
                            <button
                                key={i}
                                className={`option-btn ${selectedAnswer === opt ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
                                onClick={() => handleSelect(opt)}
                                disabled={isCorrect !== null}
                            >
                                {opt}
                                {selectedAnswer === opt && isCorrect && <CheckCircle2 className="status-icon" color="#2ea043" />}
                                {selectedAnswer === opt && isCorrect === false && <XCircle className="status-icon" color="#da3633" />}
                            </button>
                        ))}
                    </div>
                </div>
            );
        }

        if (currentItem.type === 'grammar_builder') {

            const handleWordClick = (word, index) => {
                if (isCorrect !== null) return;

                const newUserSentence = [...userSentence, word];
                setUserSentence(newUserSentence);

                const newParts = [...availableParts];
                newParts.splice(index, 1);
                setAvailableParts(newParts);
            };

            const handleRemoveWord = (word, index) => {
                if (isCorrect !== null) return;

                const newUserSentence = [...userSentence];
                newUserSentence.splice(index, 1);
                setUserSentence(newUserSentence);

                setAvailableParts(prev => [...prev, word]);
            };

            const handleSubmitSentence = () => {
                const result = userSentence.join(' ') === currentItem.parts.join(' ');
                setIsCorrect(result);
                if (result) {
                    addXp(15);
                    setCorrectCount(prev => prev + 1);
                } else {
                    setWrongItems(prev => [...prev, currentItem]);
                }
            };

            const allWordsPlaced = userSentence.length >= currentItem.parts.length;

            return (
                <div className="syntax-view animate-fade-in">
                    <span className="type-badge">{isRevisionRound ? '🔄 Revision' : 'V2 Syntax Builder'}</span>
                    <p className="scenario-text">Translate: <strong>{currentItem.english}</strong></p>
                    {currentItem.note && <p className="hint-text">Hint: {currentItem.note}</p>}

                    <div className="drop-zone glass-panel" style={{ minHeight: '60px' }}>
                        {userSentence.length === 0 ? (
                            <span style={{ color: 'var(--text-muted)' }}>Tap words below to form sentence...</span>
                        ) : (
                            <div className="word-bank" style={{ justifyContent: 'flex-start' }}>
                                {userSentence.map((word, i) => (
                                    <button
                                        key={i}
                                        className="word-btn placed-word"
                                        onClick={() => handleRemoveWord(word, i)}
                                        disabled={isCorrect !== null}
                                        title="Click to remove"
                                    >
                                        {word} {isCorrect === null && <span style={{ marginLeft: '4px', opacity: 0.5, fontSize: '0.75rem' }}>✕</span>}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="word-bank">
                        {availableParts.map((word, i) => (
                            <button
                                key={i}
                                className="word-btn"
                                onClick={() => handleWordClick(word, i)}
                                disabled={isCorrect !== null}
                            >
                                {word}
                            </button>
                        ))}
                    </div>

                    {allWordsPlaced && isCorrect === null && (
                        <button
                            className="btn btn-primary animate-fade-in"
                            onClick={handleSubmitSentence}
                            style={{ marginTop: '1.5rem', padding: '0.8rem 2rem', fontSize: '1rem' }}
                        >
                            Submit Answer
                        </button>
                    )}

                    {isCorrect !== null && (
                        <div className={`feedback-banner ${isCorrect ? 'correct-banner' : 'incorrect-banner'}`}>
                            {isCorrect ? "Bra jobbat! (Good job!)" : `Oops! Correct order: ${currentItem.parts.join(' ')}`}
                        </div>
                    )}
                </div>
            );
        }

        // Default fallback
        return (
            <div>
                <h2>{currentItem.chunk || currentItem.text}</h2>
                <button className="btn btn-secondary" onClick={() => setIsCorrect(true)}>Reveal & Continue</button>
            </div>
        )
    };

    const totalItems = itemQueue.length;
    const progressPercent = (currentIndex / totalItems) * 100;

    return (
        <div className="lesson-container">
            <div className="lesson-header">
                <button className="back-btn" onClick={onBack}>Cancel</button>
                <div className="progress-bar-container">
                    <div
                        className={`progress-bar-fill ${isRevisionRound ? 'revision-progress' : ''}`}
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
                {isRevisionRound && <span className="revision-label">Revision</span>}
            </div>

            <div className="lesson-body glass-panel">
                {renderContent()}
            </div>

            <div className="lesson-footer">
                {(isCorrect !== null || isInfoScreen) && (
                    <button className="btn btn-primary next-btn animate-fade-in" onClick={handleNext}>
                        {isInfoScreen ? 'Got it, let\'s practice' : 'Continue'} <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                    </button>
                )}
            </div>
        </div>
    );
}
