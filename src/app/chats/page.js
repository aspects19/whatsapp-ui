import React from 'react';
import NotificationBar from '@/components/NotificationBar';
import ChatHeader from '@/components/ChatHeader';
import ChatsBody from '@/components/ChatsBody';
import ChatInput from '@/components/ChatInput';
import parseChat from '../../../utils/ParseChats';

function Page() {

  const raw = `3/24/24, 19:42 - Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more.
12/14/23, 22:35 - ~ Senator created group "Best friends"
3/24/24, 19:42 - Daisy added you
4/3/24, 22:30 - Brian Matege: Rada wakuu huku c mmechill excess
4/3/24, 22:30 - +254 714 872718: Tuko mzee
4/3/24, 22:31 - Adrian: Hii ata inasahaulika 😂😂🤦‍♂️
4/3/24, 22:31 - Brian Matege: Hata hamuezi salimiana manze
4/3/24, 22:58 - Brian Matege added Cynthia mac2
4/3/24, 22:59 - Cynthia mac2: Watu wengi`

  const messages = parseChat(raw)

  return (
    <main className='flex justify-center'>
      <div className='flex flex-col my-4 w-96 h-screen bg-background-image bg-cover'>
        <NotificationBar time={"3:40"} />
        <ChatHeader />
        <ChatsBody messages={messages} />
        <ChatInput />
      </div>
    </main>
  );
}

export default Page;
