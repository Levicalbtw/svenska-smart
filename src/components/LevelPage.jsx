import { useCourse } from '../CourseContext';
import { courseStructure } from '../data/courseData';
import { PlayCircle, Lock, CheckCircle, ChevronLeft } from 'lucide-react';

export default function LevelPage({ levelId, onBack, onStartLesson }) {
    const { progress } = useCourse();
    const levelData = courseStructure[levelId];

    const isUnlocked = (lId, mId) => {
        const levelOrder = ['A1', 'A2', 'B1', 'B2', 'C1'];
        const currentLevelIndex = levelOrder.indexOf(progress.level);
        const targetLevelIndex = levelOrder.indexOf(lId);

        if (targetLevelIndex < currentLevelIndex) return true;
        if (targetLevelIndex > currentLevelIndex) return false;
        return mId <= progress.module;
    };

    const isCompleted = (lId, mId) => {
        const levelOrder = ['A1', 'A2', 'B1', 'B2', 'C1'];
        const currentLevelIndex = levelOrder.indexOf(progress.level);
        const targetLevelIndex = levelOrder.indexOf(lId);

        if (targetLevelIndex < currentLevelIndex) return true;
        if (targetLevelIndex === currentLevelIndex) return mId < progress.module;
        return false;
    };

    const modules = levelData.modules || [];
    const completedCount = modules.filter(m => isCompleted(levelId, m.id)).length;
    const progressPercent = modules.length > 0 ? Math.round((completedCount / modules.length) * 100) : 0;

    return (
        <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
            <button className="btn btn-secondary" onClick={onBack} style={{ marginBottom: '2rem' }}>
                <ChevronLeft size={20} style={{ marginRight: '0.5rem' }} /> Back to Dashboard
            </button>

            <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h1 style={{ color: 'var(--primary-accent)', marginBottom: '0.5rem' }}>{levelData.title || `Level ${levelId}`}</h1>
                        <p style={{ color: 'var(--text-secondary)' }}>{levelData.description}</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--secondary-accent)' }}>{progressPercent}%</div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{completedCount} / {modules.length} Modules</div>
                    </div>
                </div>

                <div style={{ marginTop: '2rem', height: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', background: 'var(--secondary-gradient)', width: `${progressPercent}%`, transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)' }}></div>
                </div>
            </div>

            <div className="modules-list" style={{ marginTop: '3rem' }}>
                <h2 style={{ marginBottom: '1.5rem', color: '#fff' }}>Interactive Exercises</h2>
                {modules.map((mod) => {
                    const unlocked = isUnlocked(levelId, mod.id);
                    const completed = isCompleted(levelId, mod.id);
                    const active = progress.level === levelId && progress.module === mod.id;

                    return (
                        <div
                            key={mod.id}
                            className={`module-item glass-panel ${unlocked ? 'unlocked' : 'locked'} ${active ? 'active-module' : ''}`}
                            style={{
                                padding: '1.5rem',
                                marginBottom: '1rem',
                                display: 'flex',
                                gap: '1.5rem',
                                transition: 'all 0.3s ease',
                                borderLeft: active ? '4px solid var(--primary-accent)' : '1px solid var(--border-color)',
                                opacity: unlocked ? 1 : 0.5,
                                background: active ? 'rgba(88, 166, 255, 0.05)' : undefined
                            }}
                        >
                            <div className="module-status" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem' }}>
                                {completed ? (
                                    <CheckCircle size={32} color="var(--secondary-accent)" />
                                ) : unlocked ? (
                                    <PlayCircle size={32} color={active ? "var(--primary-accent)" : "var(--text-primary)"} />
                                ) : (
                                    <Lock size={32} color="var(--text-muted)" />
                                )}
                            </div>

                            <div className="module-content" style={{ flex: 1 }}>
                                <h3 style={{ marginBottom: '0.5rem', color: '#fff', fontSize: '1.2rem' }}>{mod.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>{mod.description || "Unlock to see details."}</p>
                                <span className="module-type-badge" style={{
                                    background: 'rgba(88, 166, 255, 0.1)',
                                    color: 'var(--primary-accent)',
                                    padding: '0.3rem 0.8rem',
                                    borderRadius: '20px',
                                    fontSize: '0.75rem',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>
                                    {mod.type ? mod.type.replace('_', ' ') : 'Exercise'}
                                </span>
                            </div>

                            {unlocked && (
                                <button
                                    className={`btn ${active ? 'btn-primary' : (completed ? 'btn-secondary' : 'btn-secondary')}`}
                                    onClick={() => onStartLesson(levelId, mod.id)}
                                    style={{ alignSelf: 'center', minWidth: '120px' }}
                                >
                                    {completed ? 'Review' : (active ? 'Start' : 'Play')}
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
