import { useState } from 'react';
import { allVocab } from '../data/vocabData';
import './VocabSection.css';
import { Search } from 'lucide-react';

export default function VocabSection() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');

    const filteredVocab = allVocab.filter(word => {
        const matchesSearch = word.swedish.toLowerCase().includes(searchTerm.toLowerCase()) ||
            word.english.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = filterType === 'all' || word.type === filterType;
        return matchesSearch && matchesType;
    });

    const types = ['all', ...new Set(allVocab.map(w => w.type))];

    return (
        <div className="vocab-container animate-fade-in">
            <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Top 250 Swedish Words</h1>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Mastering these core words provides the foundation for 80% of everyday conversations.
            </p>

            <div className="vocab-controls glass-panel">
                <div className="search-bar">
                    <Search size={20} color="var(--text-secondary)" />
                    <input
                        type="text"
                        placeholder="Search in Swedish or English..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="filter-pills">
                    {types.map(type => (
                        <button
                            key={type}
                            className={`filter-pill ${filterType === type ? 'active' : ''}`}
                            onClick={() => setFilterType(type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            <div className="vocab-grid">
                {filteredVocab.map(word => (
                    <div key={word.rank} className="vocab-card glass-panel" title={word.note}>
                        <div className="vocab-rank">#{word.rank}</div>
                        <div className="vocab-swedish">{word.swedish}</div>
                        <div className="vocab-english">{word.english}</div>
                        <div className="vocab-type">{word.type}</div>
                    </div>
                ))}
            </div>

            {filteredVocab.length === 0 && (
                <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-secondary)' }}>
                    No words found matching your search.
                </div>
            )}
        </div>
    );
}
