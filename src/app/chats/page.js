import React from 'react';
import NotificationBar from '@/components/NotificationBar';
import ChatHeader from '@/components/ChatHeader';
import ChatsBody from '@/components/ChatsBody';
import ChatInput from '@/components/ChatInput';

function Page() {
  const messages = [
    {
      id: 1,
      isMessage: true,
      isUser: true,
      time: '10:30 AM',
      text: 'Hello, this is a sample message from the user!'
    },
    {
      id: 2,
      isMessage: true,
      isUser: false,
      time: '10:32 AM',
      text: 'Hello, this is a sample message from the other person!'
    },
    // Add more messages as needed
  ];

  return (
    <main className='flex justify-center'>
      <div className='flex flex-col my-4 w-96 h-screen bg-background-image bg-cover'>
        <NotificationBar />
        <ChatHeader />
        <ChatsBody messages={messages} />
        <ChatInput />
      </div>
    </main>
  );
}

export default Page;
