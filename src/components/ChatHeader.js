import React from 'react';
import Image from 'next/image';

function ChatHeader() {
  return (
    <div className="flex fixed top-50 w-96 justify-between pr-6 pl-1 bg-slate-900">
          <div className="flex align-center flex-row bg-slate-900 h-10 " >
            <Image src='/assets/back.png' alt='' className='h-6 my-auto ' width={20} height={10}/>
            <Image src='/assets/profile-placeholder.png' alt='' className='h-8 my-auto mx-2' width={30} height={10}/>
            <span className='my-auto px-2 font-bold'>Aspect</span>
          </div>
          <div className="flex align-center flex-row bg-slate-900 h-10 " >
            <Image src='/assets/videocall.png' alt='' className='h-6 my-auto mx-3' width={20} height={10}/> 
            <Image src='/assets/audiocall.png' alt='' className='h-6 my-auto mx-3' width={20} height={10}/>
            <Image src='/assets/3dots.png' alt='' className='h-5 my-auto mx-4 ' width={20} height={10}/>
          </div>
        </div>
  )
}

export default ChatHeader