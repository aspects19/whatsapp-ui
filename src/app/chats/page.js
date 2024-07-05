import React from 'react';
import Image from 'next/image';

function page() {
  return (
    <main className='flex justify-center'>
       <div className='flex fixed flex-col my-4 w-96 h-screen bg-background-image bg-cover'>
       <div className="flex fixed flex-row bg-slate-800 h-10 " >
        </div>
        <div className="flex align-center flex-row bg-slate-900 h-10 " >
          <Image src='/assets/back.png' alt='' className='h-6 my-auto' width={20} height={10}/>
          <Image src='/assets/profile-placeholder.png' alt='' className='h-6 my-auto' width={20} height={10}/>
          <Image src='/assets/back.png' alt='' className='h-6 my-auto' width={20} height={10}/>
          <span className='my-auto'>Daisy</span>
          <Image src='/assets/back.png' alt='' className='h-6 my-auto' width={20} height={10}/>
        </div>
        
       </div>
    </main>
  )
}

export default page