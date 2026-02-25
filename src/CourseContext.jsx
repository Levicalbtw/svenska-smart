import { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { useAuth } from './components/AuthContext';

const CourseContext = createContext();

export const useCourse = () => useContext(CourseContext);

const DEFAULT_PROGRESS = { level: 'A1', module: 1, lesson: 1, xp: 0 };

export const CourseProvider = ({ children }) => {
    const { user } = useAuth();
    const [progress, setProgress] = useState(() => {
        const saved = localStorage.getItem('svenska-progress');
        return saved ? JSON.parse(saved) : DEFAULT_PROGRESS;
    });
    const [syncing, setSyncing] = useState(false);

    // Load progress from Supabase when user logs in
    useEffect(() => {
        if (!user) return;

        const loadProgress = async () => {
            const { data, error } = await supabase
                .from('progress')
                .select('*')
                .eq('user_id', user.id)
                .single();

            if (data && !error) {
                const loaded = {
                    level: data.level,
                    module: data.module,
                    lesson: data.lesson,
                    xp: data.xp
                };
                setProgress(loaded);
                localStorage.setItem('svenska-progress', JSON.stringify(loaded));
            } else if (error?.code === 'PGRST116') {
                // No row yet — insert default progress for this user
                await supabase.from('progress').insert({
                    user_id: user.id,
                    ...DEFAULT_PROGRESS
                });
            }
        };

        loadProgress();
    }, [user]);

    // Save progress to both localStorage and Supabase
    useEffect(() => {
        localStorage.setItem('svenska-progress', JSON.stringify(progress));

        if (!user || syncing) return;

        const saveToSupabase = async () => {
            setSyncing(true);
            await supabase
                .from('progress')
                .upsert({
                    user_id: user.id,
                    level: progress.level,
                    module: progress.module,
                    lesson: progress.lesson,
                    xp: progress.xp
                }, { onConflict: 'user_id' });
            setSyncing(false);
        };

        // Debounce saves to avoid hammering the database
        const timeout = setTimeout(saveToSupabase, 500);
        return () => clearTimeout(timeout);
    }, [progress, user]);

    const updateProgress = (updates) => {
        setProgress((prev) => ({ ...prev, ...updates }));
    };

    const addXp = (amount) => {
        setProgress((prev) => ({ ...prev, xp: prev.xp + amount }));
    };

    const resetProgress = () => {
        setProgress(DEFAULT_PROGRESS);
    };

    return (
        <CourseContext.Provider value={{ progress, updateProgress, addXp, resetProgress }}>
            {children}
        </CourseContext.Provider>
    );
};
