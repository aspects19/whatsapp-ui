import React from 'react';
import Image from 'next/image';
const chatsBody = ({ messages }) =>{
  if (!messages || messages.length === 0) {
    return <div>No messages available</div>;
  }

  return (
    <div className=" p-3 pt-20 flex flex-col space-y-4"> 
      {messages.map((message) => (
        message.isMessage ? (
          <div
            key={message.id}
            className={`max-w-72 p-3 pb-3 text-[12px] rounded-lg ${
              message.isMe ? 'bg-primary text-[#EDEDED] p-2 rounded-lg max-w-xs ml-auto text-left' : 'bg-secondary text-[#EDEDED] mr-auto text-left'
            }`}
          >
            <p className="text-md relative font-semibold ">
              {message.text}
              <span className="inline-flex text-xs  text-zinc-400 hover:text-slate-400 right-0 ml-full ">
                {message.time} {message.isMe ? <Image className='h-4 w-5' src={"/assets/blueticks.png"} alt='' width={20} height={20}/> : <span></span>}
              </span>        
            </p>
          </div>
        ) : (
          <div key={message.id} className="flex mx-auto text-xs bg-status text-center  text-gray-500 my-1 rounded-[5px] ">
            {message.text}
          </div>
        )
      ))}
    </div>
  );
}

export default chatsBody;
