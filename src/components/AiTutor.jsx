import { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { allVocab } from '../data/vocabData';
import './AiTutor.css';

// Simple pattern-matching AI tutor that responds to Swedish learning questions
function generateResponse(userMessage) {
    const msg = userMessage.toLowerCase().trim();

    // Translation requests
    if (msg.startsWith('translate') || msg.startsWith('what is') || msg.startsWith('what does') || msg.startsWith('how do you say')) {
        const wordRequests = [
            { patterns: ['hello', 'hi'], response: "**Hej!** — This is the most common greeting. You can also say **Hallå** (more casual) or **God dag** (formal, meaning 'Good day')." },
            { patterns: ['thank', 'thanks'], response: "**Tack!** — The most essential Swedish word! \n\n- *Tack så mycket* = Thank you very much\n- *Tack för maten* = Thanks for the food (said after every meal!)" },
            { patterns: ['goodbye', 'bye'], response: "**Hej då!** — The standard goodbye.\n\n- *Vi ses!* = See you!\n- *Ha det bra!* = Take care! (Have it good!)" },
            { patterns: ['sorry', 'excuse'], response: "**Förlåt** = Sorry (apology)\n**Ursäkta** = Excuse me (getting attention)\n\nExample: *Ursäkta, var finns toaletten?* (Excuse me, where is the bathroom?)" },
            { patterns: ['love'], response: "**Älska** = Love (verb)\n**Kärlek** = Love (noun)\n\n*Jag älskar dig* = I love you 💕" },
            { patterns: ['water'], response: "**Vatten** (ett vatten) = Water\n\n*Kan jag få ett glas vatten, tack?* = Can I have a glass of water, please?" },
            { patterns: ['food', 'eat'], response: "**Mat** = Food | **Äta** = To eat\n\n*Jag vill äta nu* = I want to eat now\n*Maten är god!* = The food is good!" },
            { patterns: ['yes'], response: "**Ja** = Yes\n\nYou can also say **Jadå** (oh yes, emphatic) or **Absolut** (absolutely)." },
            { patterns: ['no'], response: "**Nej** = No\n\nYou can also say **Nej tack** (No thanks) or **Inte alls** (Not at all)." },
        ];

        for (const wr of wordRequests) {
            if (wr.patterns.some(p => msg.includes(p))) {
                return wr.response;
            }
        }

        // Try to find the word in our vocab database
        const words = msg.replace(/translate|what is|what does|how do you say|mean|means|in swedish|to swedish|\?/gi, '').trim().split(' ');
        for (const word of words) {
            const found = allVocab.find(v => v.english.toLowerCase().includes(word) || v.swedish.toLowerCase() === word);
            if (found) {
                return `**${found.swedish}** = ${found.english} *(${found.type})*\n\nThis is word #${found.rank} in the top 250 most common Swedish words!`;
            }
        }

        return "I'm not sure about that specific translation. Try asking about common words like greetings, food, feelings, or time words! You can also check the **Vocab List** tab for the top 250 words.";
    }

    // Grammar questions
    if (msg.includes('v2') || msg.includes('word order') || msg.includes('verb second')) {
        return "**The V2 Rule** is the #1 rule in Swedish!\n\nIn any main clause, the **verb must be the 2nd element**:\n\n✅ *Jag dricker kaffe* (I drink coffee)\n✅ *Idag dricker jag kaffe* (Today I drink coffee)\n\nNotice how 'jag' and 'dricker' swap when you start with 'Idag'!";
    }

    if (msg.includes('biff') || msg.includes('subclause') || msg.includes('bisats')) {
        return "**The BIFF Rule** applies in subclauses!\n\nIn a subclause (after *att, om, eftersom, när*), the word **inte** jumps BEFORE the verb:\n\n✅ Main: *Han kommer inte* (He is not coming)\n✅ Sub: *Jag vet att han **inte kommer*** (I know that he is not coming)\n\nThis also applies to *alltid, aldrig, ofta*!";
    }

    if (msg.includes('en') && msg.includes('ett') || msg.includes('gender') || msg.includes('noun')) {
        return "**En & Ett** are Swedish articles (like 'a/an').\n\n- **En** words (common gender): *en bok* (a book), *en bil* (a car)\n- **Ett** words (neuter gender): *ett hus* (a house), *ett barn* (a child)\n\nYou must memorize which nouns are 'en' and which are 'ett'. There's no reliable rule — just practice! Adjectives also change: *en **stor** bil* vs *ett **stort** hus*.";
    }

    if (msg.includes('tycker') || msg.includes('tror') || (msg.includes('think') && msg.includes('opinion'))) {
        return "**Tycker** vs **Tror** — Both mean 'think' but are very different!\n\n- **Tycker** = opinion/feeling: *Jag tycker att filmen är bra* (I think the movie is good)\n- **Tror** = belief/guess: *Jag tror att det regnar imorgon* (I think it'll rain tomorrow)\n\nMixing them up is a classic mistake. If you can replace 'think' with 'believe', use *tror*!";
    }

    if (msg.includes('passive') || msg.includes('passiv')) {
        return "**The Swedish Passive** is beautifully simple — just add **-s**!\n\n- *bygga* → *byggs* (is being built)\n- *läsa* → *läses* (is being read)\n\nYou can also use **bli + past participle**: *Boken blev skriven* (The book was written). The '-s' passive is more common in formal/news writing.";
    }

    // Greetings
    if (msg.match(/^(hej|hello|hi|hey|tjena|hallå)/)) {
        return "**Hej hej!** 👋 I'm your Swedish tutor. Ask me anything!\n\nTry:\n- *\"How do you say 'thank you' in Swedish?\"*\n- *\"Explain the V2 rule\"*\n- *\"What's the difference between tycker and tror?\"*\n- *\"Give me a practice sentence\"*";
    }

    // Practice requests
    if (msg.includes('practice') || msg.includes('sentence') || msg.includes('example') || msg.includes('exercise')) {
        const sentences = [
            { sw: "Jag gillar att läsa böcker på kvällen.", en: "I like to read books in the evening.", tip: "Notice: 'att läsa' (to read) uses the infinitive after 'gillar'." },
            { sw: "Igår gick vi till en fin restaurang.", en: "Yesterday we went to a nice restaurant.", tip: "V2 rule: 'Igår' is Element 1, 'gick' is Element 2!" },
            { sw: "Hon kan inte komma eftersom hon jobbar.", en: "She cannot come because she works.", tip: "BIFF would apply if we added 'inte' in the subclause." },
            { sw: "Vi ska åka till Sverige nästa sommar.", en: "We are going to go to Sweden next summer.", tip: "'Ska' + infinitive ('åka') expresses future plans." },
            { sw: "Det finns många vackra sjöar i Sverige.", en: "There are many beautiful lakes in Sweden.", tip: "'Det finns' = 'there is/are' — extremely common!" },
            { sw: "Jag tycker om att promenera i skogen.", en: "I like to walk in the forest.", tip: "'Tycker om' = to like (different from 'tycker att' = to think/opinionate)." },
        ];
        const s = sentences[Math.floor(Math.random() * sentences.length)];
        return `**Practice Sentence:**\n\n🇸🇪 *${s.sw}*\n🇬🇧 ${s.en}\n\n💡 **Tip:** ${s.tip}`;
    }

    // Pronunciation
    if (msg.includes('pronounc') || msg.includes('sound') || msg.includes('say')) {
        return "**Swedish Pronunciation Tips:**\n\n- **å** sounds like 'o' in 'more'\n- **ä** sounds like 'e' in 'bed'\n- **ö** sounds like 'u' in 'burn'\n- **sj/sk** makes a 'sh' sound: *sjö* (lake) = 'shö'\n- **k** before e/i/y/ä/ö = 'ch' sound: *kök* (kitchen) = 'chök'\n- **r** is often rolled or 'flapped' (varies by region)\n\nThe **pitch accent** (rising/falling tone) makes Swedish sound musical! 🎵";
    }

    // Default / help
    return "I can help you with Swedish! Try asking me:\n\n📖 **Translations:** *\"How do you say 'friend' in Swedish?\"*\n📐 **Grammar:** *\"Explain the V2 rule\"* or *\"What is the BIFF rule?\"*\n🗣️ **Practice:** *\"Give me a practice sentence\"*\n🔤 **Pronunciation:** *\"How do I pronounce Swedish vowels?\"*\n🤔 **Differences:** *\"Tycker vs tror?\"* or *\"En vs ett?\"*";
}

export default function AiTutor({ isOpen, onClose }) {
    const [messages, setMessages] = useState([
        { role: 'assistant', text: "**Hej!** 👋 I'm your Swedish tutor!\n\nAsk me about translations, grammar rules, pronunciation, or say *\"Give me a practice sentence\"* to test yourself!" }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = input.trim();
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setInput('');
        setIsTyping(true);

        // Simulate typing delay
        setTimeout(() => {
            const response = generateResponse(userMsg);
            setMessages(prev => [...prev, { role: 'assistant', text: response }]);
            setIsTyping(false);
        }, 600 + Math.random() * 800);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    if (!isOpen) return null;

    // Simple markdown-lite renderer for bold and line breaks
    const renderText = (text) => {
        return text.split('\n').map((line, i) => (
            <span key={i}>
                {line.split(/(\*\*.*?\*\*|\*.*?\*)/).map((part, j) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={j}>{part.slice(2, -2)}</strong>;
                    }
                    if (part.startsWith('*') && part.endsWith('*')) {
                        return <em key={j}>{part.slice(1, -1)}</em>;
                    }
                    return part;
                })}
                {i < text.split('\n').length - 1 && <br />}
            </span>
        ));
    };

    return (
        <div className="ai-tutor-panel glass-panel animate-fade-in">
            <div className="ai-tutor-header">
                <h3>🤖 Svenska Tutor</h3>
                <button className="ai-close-btn" onClick={onClose}>
                    <X size={20} />
                </button>
            </div>

            <div className="ai-tutor-messages">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`ai-msg ${msg.role}`}>
                        <div className="ai-msg-bubble">
                            {renderText(msg.text)}
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="ai-msg assistant">
                        <div className="ai-msg-bubble typing">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="ai-tutor-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask me anything about Swedish..."
                />
                <button className="ai-send-btn" onClick={handleSend} disabled={!input.trim()}>
                    <Send size={20} />
                </button>
            </div>
        </div>
    );
}
