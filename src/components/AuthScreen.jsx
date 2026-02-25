import { useState } from 'react';
import { useAuth } from './AuthContext';
import './AuthScreen.css';

export default function AuthScreen() {
    const { signIn, signUp } = useAuth();
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        setLoading(true);

        try {
            if (isSignUp) {
                await signUp(email, password);
                setMessage('Check your email to confirm your account!');
            } else {
                await signIn(email, password);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-screen">
            <div className="auth-card glass-panel">
                <h1 className="auth-logo">
                    Svenska<span style={{ color: '#ffffff' }}>Smart</span> 🇸🇪
                </h1>
                <p className="auth-subtitle">
                    {isSignUp ? 'Create your account to start learning Swedish' : 'Sign in to continue your Swedish journey'}
                </p>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="auth-field">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="At least 6 characters"
                            required
                            minLength={6}
                        />
                    </div>

                    {error && <div className="auth-error">{error}</div>}
                    {message && <div className="auth-success">{message}</div>}

                    <button type="submit" className="btn btn-primary auth-submit" disabled={loading}>
                        {loading ? 'Loading...' : isSignUp ? 'Create Account' : 'Sign In'}
                    </button>
                </form>

                <div className="auth-toggle">
                    {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                    <button className="auth-toggle-btn" onClick={() => { setIsSignUp(!isSignUp); setError(''); setMessage(''); }}>
                        {isSignUp ? 'Sign In' : 'Sign Up'}
                    </button>
                </div>
            </div>
        </div>
    );
}
