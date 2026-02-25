import { useState, useEffect } from 'react';
import { allVocab } from '../data/vocabData';
import { useCourse } from '../CourseContext';
import { ArrowRight, RotateCw, RefreshCcw, Star } from 'lucide-react';
import './VocabFlashcards.css';

export default function VocabFlashcards() {
    const { addXp } = useCourse();
    const [deck, setDeck] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [stats, setStats] = useState({ known: 0, learning: 0, xpEarned: 0 });
    const [sessionComplete, setSessionComplete] = useState(false);

    // Initialize and shuffle deck on mount
    useEffect(() => {
        startNewSession();
    }, []);

    const startNewSession = () => {
        // Take a random subset of 20 words for a session to prevent fatigue
        const shuffled = [...allVocab].sort(() => Math.random() - 0.5).slice(0, 20);
        setDeck(shuffled);
        setCurrentIndex(0);
        setIsFlipped(false);
        setStats({ known: 0, learning: 0, xpEarned: 0 });
        setSessionComplete(false);
    };

    const handleFlip = () => {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
        }
    };

    const handleNext = (known) => {
        if (isAnimating) return;

        let nextDeckLength = deck.length;

        if (known) {
            addXp(5);
            setStats(prev => ({ ...prev, known: prev.known + 1, xpEarned: prev.xpEarned + 5 }));
        } else {
            setStats(prev => ({ ...prev, learning: prev.learning + 1 }));
            // Put the missed word back at the end of the deck
            setDeck(prevDeck => [...prevDeck, prevDeck[currentIndex]]);
            nextDeckLength++;
        }

        setIsFlipped(false);
        setIsAnimating(true);

        // Wait for the CSS flip animation (0.6s) to finish before changing the actual word
        setTimeout(() => {
            if (currentIndex < nextDeckLength - 1) {
                setCurrentIndex(prev => prev + 1);
            } else {
                setSessionComplete(true);
            }
            setIsAnimating(false);
        }, 600); // 600ms matches the CSS transition time
    };

    if (deck.length === 0) return <div>Loading deck...</div>;

    if (sessionComplete) {
        return (
            <div className="flashcard-container animate-fade-in" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', paddingTop: '4rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-accent)' }}>Session Complete!</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>You made {deck.length} reviews to finish the session.</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '1.3rem', color: 'var(--primary-accent)', fontWeight: 'bold' }}>
                    <Star size={22} fill="var(--primary-accent)" /> +{stats.xpEarned} XP earned
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
                    <div className="glass-panel" style={{ padding: '1.5rem', width: '150px', borderRadius: 'var(--radius-md)' }}>
                        <div style={{ fontSize: '2rem', color: '#2ea043', fontWeight: 'bold' }}>{stats.known}</div>
                        <div style={{ color: 'var(--text-secondary)' }}>Knew It</div>
                    </div>
                    <div className="glass-panel" style={{ padding: '1.5rem', width: '150px', borderRadius: 'var(--radius-md)' }}>
                        <div style={{ fontSize: '2rem', color: '#da3633', fontWeight: 'bold' }}>{stats.learning}</div>
                        <div style={{ color: 'var(--text-secondary)' }}>Still Learning</div>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={startNewSession}>
                    <RefreshCcw size={20} style={{ marginRight: '8px' }} /> Start Another Session
                </button>
            </div>
        );
    }

    const word = deck[currentIndex];

    return (
        <div className="flashcard-container animate-fade-in">
            <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Spaced Retrieval Practice</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>
                    Card {currentIndex + 1} of {deck.length}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--primary-accent)', fontWeight: 'bold', fontSize: '0.95rem' }}>
                    <Star size={16} fill="var(--primary-accent)" /> {stats.xpEarned} XP
                </span>
            </div>

            <div className="flashcard-wrapper" onClick={handleFlip}>
                <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>

                    {/* Front of card (Swedish) */}
                    <div className="flashcard-face flashcard-front glass-panel">
                        <span className="card-hint">Tap to flip <RotateCw size={16} style={{ marginLeft: '6px' }} /></span>
                        <div className="word-primary">{word.swedish}</div>
                        {word.type && <span className="word-type-badge">{word.type}</span>}
                    </div>

                    {/* Back of card (English) */}
                    <div className="flashcard-face flashcard-back glass-panel">
                        <span className="card-hint">Tap to flip back</span>
                        <div className="word-secondary">{word.english}</div>
                        {word.note && <div className="word-note">{word.note}</div>}
                    </div>

                </div>
            </div>

            {/* Controls only show when flipped */}
            <div className={`flashcard-controls ${isFlipped ? 'visible' : ''}`}>
                <h3 style={{ width: '100%', textAlign: 'center', marginBottom: '1rem', fontWeight: 'normal' }}>Did you remember it?</h3>
                <div className="action-buttons">
                    <button
                        className="btn action-btn btn-wrong"
                        onClick={(e) => { e.stopPropagation(); handleNext(false); }}
                    >
                        Still Learning
                    </button>
                    <button
                        className="btn action-btn btn-correct"
                        onClick={(e) => { e.stopPropagation(); handleNext(true); }}
                    >
                        Got It!
                    </button>
                </div>
            </div>
        </div>
    );
}
