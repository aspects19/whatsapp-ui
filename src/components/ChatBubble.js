const ChatBubble = ({ message }) => {
    return (
      <div
        className={`max-w-xs p-3 rounded-lg ${
          message.isUser ? 'bg-blue-200 ml-auto text-right' : 'bg-white mr-auto text-left'
        }`}
      >
        <span className="text-sm text-gray-500">{message.time}</span>
        <p className="text-lg">{message.text}</p>
      </div>
    );
  };
  
  export default ChatBubble;
  