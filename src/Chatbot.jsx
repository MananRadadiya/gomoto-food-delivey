// src/Chatbot.jsx
import React, { useState, useRef, useEffect } from 'react';
import '../src/Css/Chatbot.css'; // We'll create this CSS file next

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm your website assistant. How can I help you today? (e.g., 'What's on the menu?' or 'Track my order')", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response (replace this with real AI integration, e.g., via API)
    setTimeout(() => {
      let botResponse = "Thanks for your message! I'll get back to you soon.";
      
      // Simple predefined responses for demo
      const lowerInput = inputValue.toLowerCase();
      if (lowerInput.includes('menu') || lowerInput.includes('products')) {
        botResponse = "Check out our Popular section or /products page for the latest menu items!";
      } else if (lowerInput.includes('order') || lowerInput.includes('cart')) {
        botResponse = "You can add items to your cart and checkout securely. Need help with delivery? Visit /delivery.";
      } else if (lowerInput.includes('login') || lowerInput.includes('account')) {
        botResponse = "Head to /login or /register to manage your account.";
      } else if (lowerInput.includes('contact')) {
        botResponse = "For more help, visit /contacts or email us at support@yourwebsite.com.";
      }

      const botMessage = { id: Date.now() + 1, text: botResponse, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    }, 1000); // 1-second delay for realism
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="chatbot-toggle"
        onClick={toggleChat}
        aria-label="Open Chatbot"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h4>Chat with Assistant</h4>
            <button onClick={closeChat} className="close-btn">&times;</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSendMessage} className="chatbot-input-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="chatbot-input"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(e)}
            />
            <button type="submit" className="send-btn">Send</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;