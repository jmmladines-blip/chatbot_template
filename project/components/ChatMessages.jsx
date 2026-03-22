function ChatMessages({ chatMessages }) {
  const chatMessagesRef = React.useRef(null);

  React.useEffect(() => {
    const container = chatMessagesRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((msg) => (
        <ChatMessage key={msg.id} message={msg.message} sender={msg.sender} />
      ))}
    </div>
  );
}
