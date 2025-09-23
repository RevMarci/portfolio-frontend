import React, { useState, useRef, useEffect } from 'react';
import '../styles/AIChat.css';

const AIChat = ({ id }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const chatEndRef = useRef(null);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: 'user', text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');

        try {
            const response = await fetch('http://localhost:5000/ask', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input }),
            });
            const data = await response.json();
            const aiMessage = { sender: 'ai', text: data.answer || 'Hiba a válasz lekérésében.' };
            setMessages((prev) => [...prev, aiMessage]);
        } catch (err) {
            const errorMsg = { sender: 'ai', text: 'Hiba a szerverhez való kapcsolódáskor.' };
            setMessages((prev) => [...prev, errorMsg]);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') sendMessage();
    };

    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div id={id} className="section aichat">
            <h2 className="section-title">AI Chat</h2>
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Írj egy üzenetet..."
                />
                <button onClick={sendMessage}>Küldés</button>
            </div>
        </div>
    );
};

export default AIChat;
