import React, { UseState, useState } from "react";
import "./Chat.css";

import { petImages } from "../../data/petImages";

import PetItem from "./components/PetItem/PetItem.jsx";
import UserItem from "./components/UserItem/UserItem.jsx";
import InputChat from "./components/InputChat/InputChat.jsx";

const Chat = ({ history }) => {
  const [msg, setMsg] = useState({});

  const [chat, setChat] = useState([
    {
      id: 0,
      emitter: "pet",
      text: ["My name is Jooey", "What's your name?"],
    },
    {
      id: 1,
      emitter: "user",
      text: ["Welcome to earth", "My name is Camilo but just call me Equiman"],
    },
    {
      id: 2,
      emitter: "pet",
      text: ["Glad to meet you!"],
      reaction: petImages.Rocking,
    },
    {
      id: 3,
      emitter: "user",
      text: ["Where are you from?"],
    },
    {
      id: 2,
      emitter: "pet",
      text: ["I'm from another Galaxy far far away"],
      reaction: petImages.RollingEyes,
    },
    {
      id: 3,
      emitter: "user",
      text: ["Oh come on", "Are you from mars? Right?"],
    },
    {
      id: 2,
      emitter: "pet",
      text: ["That's my home"],
      reaction: petImages.Love,
    },
  ]);

  return (
    <div className="chatbot-chat-container">
      <div className="chatbot-chat-content">
        <div className="chatbot-chat">
          <div className="chatbot-chat-container-body">
            {chat.map((message, index) => {
              if (message.emitter === "pet") {
                return (
                  <PetItem
                    key={index}
                    text={message.text}
                    reaction={message.reaction ?? petImages.Talking}
                  />
                );
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
