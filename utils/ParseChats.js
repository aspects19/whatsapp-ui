const parseChat = (chatText) => {
  const lines = chatText.split('\n');
  const messages = [];

  lines.forEach((line, index) => {
      const [date, timeRest] = line.split(', ');
      const [time, rest] = timeRest.split(' - ');

      const isUserMessage = rest.includes(': ') 
      
      const [sender, message] = isUserMessage ? rest.split(': ') : [null, rest];

      messages.push({
          id: index + 1,
          isMessage: isUserMessage, 
          isUser: !message,
          time: time,
          text: message || rest,
      });
  });

  return messages;
}

export default parseChat
  