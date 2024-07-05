const parseChat = (chatText) => {
    const chatArray = chatText.split('\n').map(line => {
      const [date, time, userAndMessage] = line.split(' - ');
      const [user, message] = userAndMessage.split(': ');
      return {
        date,
        time,
        user,
        text: message,
        isUser: user === 'YourName' // Replace 'YourName' with the actual name used in the chat file
      };
    });
    return chatArray;
  };
  
  export default parseChat;
  