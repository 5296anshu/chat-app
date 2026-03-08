import React, { useEffect, useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import socket from '../utils/socket';

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
}

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.on('message', (msg: string) => {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: msg,
        sender: 'other', // Assuming received messages are from others
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newMessage]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'me',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
    socket.emit('message', text);
  };

  return (
    <div className="flex flex-col h-[80vh] w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
        <h1 className="text-xl font-bold">Chat Room</h1>
        <p className="text-sm opacity-90">Connect and chat with others</p>
      </div>
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;