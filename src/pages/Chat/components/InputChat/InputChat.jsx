import React from "react";
import "./InputChat.css";

const InputChat = () => {
  return (
    <form className="chatbot-chat-input-container">
      <input placeholder="Escribir tu nombre" type="text" />
      <button type="submit"></button>
    </form>
  );
};

export default InputChat;
