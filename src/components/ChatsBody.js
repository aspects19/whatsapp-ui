import React from 'react';
import Image from 'next/image';

function ChatsBody({ messages }) {
  if (!messages || messages.length === 0) {
    return <div>No messages available</div>;
  }

  return (
    <div className=" p-3 pt-20 flex flex-col space-y-4"> 
      {messages.map((message) => (
        message.isMessage ? (
          <div
            key={message.id}
            className={`max-w-72 p-3 pb-3 rounded-lg ${
              message.isUser ? 'bg-green-900 hover:bg-green-950 ml-auto text-left' : 'bg-[#2A2A2A] text-[#EDEDED]  mr-auto text-left'
            }`}
          >
            <p className="text-sm relative">
              {message.text}
              <span className="inline-flex text-xs pt-4  text-slate-400 hover:text-slate-400 right-0 absolute ">
                {message.time} {message.isUser? <Image className='h-4 w-5' src={"/assets/blueticks.png"} alt='' width={20} height={20}/>: <span></span>}  </span>        
            </p>
          </div>
        ) : (
          <div key={message.id} className="text-center text-sm text-gray-500 my-2">
            {message.text}
          </div>
        )
      ))}
    </div>
  );
}

export default ChatsBody;
