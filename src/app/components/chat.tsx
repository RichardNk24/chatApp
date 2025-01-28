import { useState, useEffect, FormEvent } from 'react';
import Pusher from 'pusher-js';

interface Message {
  message: string;
  sender: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [sender, setSender] = useState<string>('');

  useEffect(() => {
    setSender(`User${Math.floor(Math.random() * 1000)}`);
  }, []);

  useEffect(() => {
    if (!sender) return;

    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!
    });

    const channel = pusher.subscribe('chat-channel');
    channel.bind('message-event', (data: Message) => {
      setMessages(prev => [...prev, data]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [sender]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    await fetch('/api/pusher', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newMessage, sender })
    });
    
    setNewMessage('');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg">
      <div className="mb-4 h-64 overflow-y-auto">
        {messages.map((msg, i) => (
          <div 
            key={i} 
            className={`mb-2 ${msg.sender === sender ? 'text-right' : ''}`}
          >
            <span className={`inline-block p-2 rounded-lg ${
              msg.sender === sender 
                ? 'bg-blue-500 text-white' 
                : 'bg-white'
            }`}>
              {msg.message}
            </span>
            <p className="text-xs text-gray-500 mt-1">{msg.sender}</p>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;