import React from 'react';
import Image from 'next/image';

const chatHeader = () => {
  return (
    <div className="flex fixed top-9 w-96 justify-between pr-4 md:pr-0 pl-1 bg-header">
          <div className="flex align-center flex-row bg-header h-10 " >
            <Image src='/assets/back.png' alt='' className='h-6 my-auto ' width={20} height={10}/>
            <Image src='/assets/profile-placeholder.png' alt='' className='h-8 my-auto mx-2' width={30} height={10}/>
            <span className='my-auto px-2 font-bold'>Aspect</span>
          </div>
          <div className="flex align-center flex-row bg-header h-10 " >
            <Image src='/assets/videocall.png' alt='' className='h-6 my-auto mx-3' width={20} height={10}/> 
            <Image src='/assets/audiocall.png' alt='' className='h-6 my-auto mx-3' width={20} height={10}/>
            <Image src='/assets/3dots.png' alt='' className='h-5 my-auto mx-4 md:ml-2 ' width={20} height={10}/>
          </div>
        </div>
  )
}

export default chatHeader