import React from 'react';

function ChatsBody({ messages }) {
  if (!messages || messages.length === 0) {
    return <div>No messages available</div>;
  }

  return (
    <div className="pt-20 flex flex-col mx-2 space-y-4">
      {messages.map((message) => (
        <div key={message.id} className={`max-w-xs p-3 rounded-lg ${
          message.isUser ? 'bg-blue-600 ml-auto text-left' : 'bg-slate-600 mr-auto text-left'
        }`}>
          <p className="text-sm relative">
            {message.text}
            <span className="text-xs pt-4 text-slate-100 right-1 absolute">{message.time}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default ChatsBody;
