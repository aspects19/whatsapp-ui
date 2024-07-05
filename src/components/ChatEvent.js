const ChatEvent = ({ event }) => {
    return (
      <div className="text-center text-sm text-gray-500 my-2">
        {event.text}
      </div>
    );
  };
  
  export default ChatEvent;
  