import { useState } from 'react';
import { AuthProvider, useAuth } from './components/AuthContext';
import { CourseProvider } from './CourseContext';
import CourseMap from './components/CourseMap';
import LessonInterface from './components/LessonInterface';
import VocabSection from './components/VocabSection';
import VocabFlashcards from './components/VocabFlashcards';
import AiTutor from './components/AiTutor';
import AuthScreen from './components/AuthScreen';
import ProfileDropdown from './components/ProfileDropdown';
import './App.css';

function AppContent() {
  const { user, loading } = useAuth();
  const [activeLesson, setActiveLesson] = useState(null);
  const [currentView, setCurrentView] = useState('course');
  const [showTutor, setShowTutor] = useState(false);

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--primary-accent)', fontSize: '2rem' }}>Svenska<span style={{ color: '#fff' }}>Smart</span> 🇸🇪</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AuthScreen />;
  }

  const handleStartLesson = (levelId, moduleId) => {
    setActiveLesson({ levelId, moduleId });
  };

  const handleExitLesson = () => {
    setActiveLesson(null);
  };

  return (
    <CourseProvider>
      <div className="app-container">
        <header>
          <div className="logo cursor-pointer" onClick={() => { handleExitLesson(); setCurrentView('course'); }}>
            Svenska<span style={{ color: '#ffffff' }}>Smart</span> 🇸🇪
          </div>
          <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button className={`btn ${currentView === 'course' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => { handleExitLesson(); setCurrentView('course'); }}>Course</button>
            <button className={`btn ${currentView === 'vocab' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => { handleExitLesson(); setCurrentView('vocab'); }}>Vocab List</button>
            <button className={`btn ${currentView === 'flashcards' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => { handleExitLesson(); setCurrentView('flashcards'); }}>Flashcards</button>
            <ProfileDropdown />
          </nav>
        </header>

        <main>
          {currentView === 'flashcards' ? (
            <VocabFlashcards />
          ) : currentView === 'vocab' ? (
            <VocabSection />
          ) : activeLesson ? (
            <LessonInterface
              levelId={activeLesson.levelId}
              moduleId={activeLesson.moduleId}
              onBack={handleExitLesson}
            />
          ) : (
            <div className="animate-fade-in">
              <section className="hero-section glass-panel" style={{ marginBottom: '2rem', padding: '2rem' }}>
                <div className="hero-content">
                  <h1 className="hero-title" style={{ fontSize: '2.5rem' }}>Your Path to Fluency</h1>
                  <p className="hero-subtitle" style={{ marginBottom: 0 }}>
                    Follow the scientifically structured curriculum from Nybörjare (Beginner) to advanced communication.
                  </p>
                </div>
              </section>

              <CourseMap onStartLesson={handleStartLesson} />
            </div>
          )}
        </main>

        <button className="ai-tutor-fab" title="Chat with AI Svenska Tutor" onClick={() => setShowTutor(!showTutor)}>
          🤖
        </button>

        <AiTutor isOpen={showTutor} onClose={() => setShowTutor(false)} />
      </div>
    </CourseProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
