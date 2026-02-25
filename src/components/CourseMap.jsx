import { useState } from 'react';
import { useCourse } from '../CourseContext';
import { courseStructure } from '../data/courseData';
import { Lock, Star, ChevronRight, CheckCircle, BarChart2 } from 'lucide-react';
import LevelPage from './LevelPage';
import './CourseMap.css';

export default function CourseMap({ onStartLesson }) {
    const { progress } = useCourse();
    const [selectedLevelId, setSelectedLevelId] = useState(null);

    const isUnlocked = (levelId) => {
        const levelOrder = ['A1', 'A2', 'B1', 'B2', 'C1'];
        const currentLevelIndex = levelOrder.indexOf(progress.level);
        const targetLevelIndex = levelOrder.indexOf(levelId);
        return targetLevelIndex <= currentLevelIndex;
    };

    const getLevelStats = (levelId) => {
        const levelData = courseStructure[levelId];
        const modules = levelData.modules || [];

        const isModuleCompleted = (lId, mId) => {
            const levelOrder = ['A1', 'A2', 'B1', 'B2', 'C1'];
            const currentLevelIndex = levelOrder.indexOf(progress.level);
            const targetLevelIndex = levelOrder.indexOf(lId);

            if (targetLevelIndex < currentLevelIndex) return true;
            if (targetLevelIndex === currentLevelIndex) return mId < progress.module;
            return false;
        };

        const completedCount = modules.filter(m => isModuleCompleted(levelId, m.id)).length;
        const total = modules.length;
        const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;

        return { completedCount, total, percent };
    };

    if (selectedLevelId) {
        return (
            <LevelPage
                levelId={selectedLevelId}
                onBack={() => setSelectedLevelId(null)}
                onStartLesson={onStartLesson}
            />
        );
    }

    return (
        <div className="course-map-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="xp-bar glass-panel" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Star className="xp-icon" fill="gold" color="gold" size={28} />
                    <span className="xp-text" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{progress.xp} XP</span>
                    <div className="progress-badge" style={{ background: 'var(--primary-accent)', padding: '0.2rem 0.8rem', borderRadius: '20px', fontSize: '0.9rem' }}>{progress.level}</div>
                </div>
            </div>

            <h1 style={{ marginBottom: '0.5rem', textAlign: 'center', fontSize: '2.5rem', color: '#fff' }}>Course Dashboard</h1>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>Select a level to view your progress and exercises.</p>

            <div className="levels-dashboard" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                {Object.entries(courseStructure).map(([levelId, levelData]) => {
                    const levelUnlocked = isUnlocked(levelId);
                    const stats = getLevelStats(levelId);
                    const isFullyCompleted = stats.percent === 100;
                    const isCurrent = progress.level === levelId;

                    return (
                        <div
                            key={levelId}
                            className={`level-card glass-panel ${!levelUnlocked ? 'locked' : ''}`}
                            onClick={() => levelUnlocked && setSelectedLevelId(levelId)}
                            style={{
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                cursor: levelUnlocked ? 'pointer' : 'not-allowed',
                                transition: 'all 0.3s ease',
                                border: isCurrent ? '1px solid var(--primary-accent)' : '1px solid var(--border-color)',
                                boxShadow: isCurrent ? 'var(--shadow-glow-sm)' : 'none',
                                opacity: !levelUnlocked ? 0.6 : 1,
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <h2 style={{ fontSize: '1.5rem', margin: 0, color: levelUnlocked ? '#fff' : 'var(--text-muted)' }}>
                                    {levelData.title.split('-')[0].trim()}
                                </h2>
                                <div style={{
                                    background: isFullyCompleted ? 'rgba(52, 211, 153, 0.1)' : 'rgba(255,255,255,0.05)',
                                    padding: '0.2rem 0.6rem',
                                    borderRadius: '10px',
                                    fontWeight: 'bold',
                                    color: isFullyCompleted ? 'var(--secondary-accent)' : 'var(--text-primary)'
                                }}>
                                    {levelId}
                                </div>
                            </div>

                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.9rem', flex: 1 }}>
                                {levelData.description}
                            </p>

                            <div className="level-card-footer" style={{ marginTop: 'auto' }}>
                                {!levelUnlocked ? (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                                        <Lock size={18} />
                                        <span>Locked (Reach {levelId})</span>
                                    </div>
                                ) : (
                                    <>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                                            <span style={{ color: 'var(--text-secondary)' }}><BarChart2 size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} /> Progess</span>
                                            <span style={{ fontWeight: 'bold' }}>{stats.percent}%</span>
                                        </div>
                                        <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                                            <div style={{
                                                height: '100%',
                                                background: isFullyCompleted ? 'var(--secondary-accent)' : 'var(--primary-accent)',
                                                width: `${stats.percent}%`
                                            }}></div>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Hover effect overlay */}
                            {levelUnlocked && (
                                <div className="card-hover-overlay" style={{
                                    position: 'absolute', right: '1.5rem', bottom: '1.5rem',
                                    opacity: 0, transform: 'translateX(-10px)', transition: 'all 0.3s ease'
                                }}>
                                    <ChevronRight size={24} color={isCurrent ? 'var(--primary-accent)' : 'var(--text-primary)'} />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
