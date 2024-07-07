const parseChat = (chatText) => {
    const chatArray = chatText.split('\n').map(line => {
      const [date, time, userAndMessage] = line.split(' - ');
      const [user, message] = userAndMessage.split(': ');
      return {
        date,
        time,
        user,
        text: message,
        isUser: user === 'YourName'
      };
    });
    return chatArray;
  };
  
  export default parseChat;
  