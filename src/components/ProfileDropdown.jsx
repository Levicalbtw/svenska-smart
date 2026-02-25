import { useState, useRef, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useCourse } from '../CourseContext';
import { courseStructure } from '../data/courseData';
import { RotateCcw, User, LogOut, Star, BookOpen, Trophy, TrendingUp, ChevronDown } from 'lucide-react';
import './ProfileDropdown.css';

export default function ProfileDropdown() {
    const { user, signOut } = useAuth();
    const { progress, resetProgress } = useCourse();
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    // Close on outside click
    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    // Calculate stats
    const currentLevel = courseStructure[progress.level];
    const totalModulesInLevel = currentLevel?.modules?.length || 0;
    const completedModules = Math.max(0, progress.module - 1);
    const levelProgress = totalModulesInLevel > 0 ? Math.round((completedModules / totalModulesInLevel) * 100) : 0;

    const allLevels = ['A1', 'A2', 'B1', 'B2', 'C1'];
    const currentLevelIndex = allLevels.indexOf(progress.level);
    const overallProgress = Math.round(((currentLevelIndex + (completedModules / Math.max(totalModulesInLevel, 1))) / allLevels.length) * 100);

    // Total modules across all levels
    const totalModulesAll = Object.values(courseStructure).reduce((sum, lvl) => sum + (lvl.modules?.length || 0), 0);
    let completedTotal = 0;
    for (let i = 0; i < currentLevelIndex; i++) {
        completedTotal += courseStructure[allLevels[i]]?.modules?.length || 0;
    }
    completedTotal += completedModules;

    const displayEmail = user?.email || 'Student';
    const initials = displayEmail.substring(0, 2).toUpperCase();

    // Days since account creation
    const createdAt = user?.created_at ? new Date(user.created_at) : new Date();
    const daysSinceJoined = Math.max(1, Math.floor((Date.now() - createdAt.getTime()) / (1000 * 60 * 60 * 24)));

    return (
        <div className="profile-dropdown-container" ref={ref}>
            <button className="profile-trigger" onClick={() => setOpen(!open)}>
                <div className="profile-avatar">{initials}</div>
                <ChevronDown size={14} className={`chevron ${open ? 'rotated' : ''}`} />
            </button>

            {open && (
                <div className="profile-menu glass-panel animate-fade-in">
                    {/* Header */}
                    <div className="profile-header">
                        <div className="profile-avatar-lg">{initials}</div>
                        <div className="profile-info">
                            <div className="profile-email">{displayEmail}</div>
                            <div className="profile-joined">Joined {daysSinceJoined} day{daysSinceJoined !== 1 ? 's' : ''} ago</div>
                        </div>
                    </div>

                    <div className="profile-divider" />

                    {/* Stats Grid */}
                    <div className="profile-stats">
                        <div className="stat-item">
                            <Star size={18} className="stat-icon xp" />
                            <div className="stat-value">{progress.xp}</div>
                            <div className="stat-label">Total XP</div>
                        </div>
                        <div className="stat-item">
                            <Trophy size={18} className="stat-icon level" />
                            <div className="stat-value">{progress.level}</div>
                            <div className="stat-label">Level</div>
                        </div>
                        <div className="stat-item">
                            <BookOpen size={18} className="stat-icon modules" />
                            <div className="stat-value">{completedTotal}/{totalModulesAll}</div>
                            <div className="stat-label">Modules</div>
                        </div>
                        <div className="stat-item">
                            <TrendingUp size={18} className="stat-icon overall" />
                            <div className="stat-value">{overallProgress}%</div>
                            <div className="stat-label">Overall</div>
                        </div>
                    </div>

                    <div className="profile-divider" />

                    {/* Current Level Progress */}
                    <div className="profile-level-section">
                        <div className="level-label">
                            <span>{currentLevel?.title || progress.level}</span>
                            <span className="level-pct">{levelProgress}%</span>
                        </div>
                        <div className="level-bar">
                            <div className="level-fill" style={{ width: `${levelProgress}%` }} />
                        </div>
                        <div className="level-detail">
                            Module {progress.module} of {totalModulesInLevel}
                        </div>
                    </div>

                    <div className="profile-divider" />

                    {/* Level Badges */}
                    <div className="level-badges">
                        {allLevels.map((lvl, i) => (
                            <div key={lvl} className={`badge ${i < currentLevelIndex ? 'completed' : i === currentLevelIndex ? 'current' : 'locked'}`}>
                                {lvl}
                            </div>
                        ))}
                    </div>

                    <div className="profile-divider" />

                    {/* Reset Progress */}
                    <button className="profile-reset" onClick={() => {
                        if (window.confirm("Are you sure you want to reset all your progress?")) {
                            resetProgress();
                            setOpen(false);
                        }
                    }}>
                        <RotateCcw size={16} />
                        Reset Progress
                    </button>

                    {/* Sign out */}
                    <button className="profile-signout" onClick={() => { signOut(); setOpen(false); }}>
                        <LogOut size={16} />
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
}
