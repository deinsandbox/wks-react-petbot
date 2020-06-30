import React from "react";
import "./InputChat.css";

const InputChat = ({ getMessage, sendMessage, openSelect, text }) => {
  return (
    <form
      onSubmit={(event) => sendMessage(event)}
      className="chatbot-chat-input-container"
    >
      <input
        placeholder={openSelect ? "Write a number" : "Write your name"}
        type="text"
        value={text}
        onChange={(event) => getMessage(event.target.value)}
      />
      <button type="submit"></button>
    </form>
  );
};

export default InputChat;
