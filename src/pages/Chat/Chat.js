import React, { UseState, useState } from "react";
import "./Chat.css";

import PetItem from "./components/PetItem/PetItem.jsx";
import UserItem from "./components/UserItem/UserItem.jsx";
import InputChat from "./components/InputChat/InputChat.jsx";

const Chat = ({ history }) => {
  const [msg, setMsg] = useState({});

  const [chat, setChat] = useState([
    {
      id: 0,
      emitter: "pet",
      text: ["My name is Jooey. What's your name?"],
    },
    {
      id: 1,
      emitter: "user",
      text: ["Welcome Martian", "Mi name is Camilo but just call me Equiman"],
    },
  ]);

  return (
    <div className="chatbot-chat-container">
      <div className="chatbot-chat-content">
        <div className="chatbot-chat">
          <div className="chatbot-chat-container-body">
            {chat.map((message, index) => {
              if (message.emitter === "pet") {
                return <PetItem key={index} text={message.text} />;
              } else {
                return <UserItem key={index} text={message.text} />;
              }
            })}
          </div>
          <div className="chatbot-chat-container-input">
            <InputChat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
