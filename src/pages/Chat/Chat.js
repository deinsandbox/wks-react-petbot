import React, { useState, useEffect } from "react";
import "./Chat.css";

import { petImages } from "../../data/petImages";

import PetItem from "./components/PetItem/PetItem.jsx";
import UserItem from "./components/UserItem/UserItem.jsx";
import InputChat from "./components/InputChat/InputChat.jsx";
import Select from "./components/Select/Select.jsx";

import {
  errorChat,
  welcomeChat,
  petQuestions,
  getQuestion,
  getAnswer,
} from "../../data/petActions";

const Chat = ({ history }) => {
  const [message, setMessage] = useState({});

  function getMessage(value) {
    setMessage({
      emitter: "user",
      text: [value],
    });
  }

  const [chat, setChat] = useState([
    {
      emitter: "pet",
      text: ["Hi!", "What's your name?"],
      reaction: petImages.Aww,
    },
  ]);

  function sendMessage(event) {
    event.preventDefault();

    if (
      openSelect ||
      (message.text && message.text.length === 1 && !isNaN(message.text[0]))
    ) {
      handleSelectedOption(message.text[0]);
    } else {
      setChat([...chat, message]);
    }
  }

  //console.table(chat);
  //console.table(msg);

  function firstResponse(name) {
    if (welcomeChat) {
      setChat([...chat, welcomeChat(name)]);
    }
  }

  function errorResponse() {
    if (errorChat) {
      setChat([...chat, errorChat]);
      setMessage({ ...message, text: [""] });
    }
  }

  const [openSelect, setOpenSelect] = useState(false);

  function handleSelectedOption(value) {
    if (!value) {
      return;
    }

    const question = getQuestion(value);
    if (question) {
      setChat([...chat, question]);
    } else {
      errorResponse();
      return;
    }

    const answer = getAnswer(value);
    if (answer) {
      setChat([...chat, question, answer]);
    }
    setMessage({ ...message, text: [""] });
  }

  useEffect(() => {
    const TIMER_FIRSTRESPONSE = 0.5;
    const TIMER_OPENSELECT = 0.6;

    if (chat.length === 2) {
      setTimeout(() => {
        firstResponse(message.text);
      }, TIMER_FIRSTRESPONSE * 1000);
      setMessage({ ...message, text: [""] });
      setTimeout(() => {
        setOpenSelect(true);
      }, TIMER_OPENSELECT * 1000);
    }

    //TODO: Automatic scroll
  }, [chat]);

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
            {openSelect && (
              <Select
                petQuestions={petQuestions}
                handleSelectedOption={handleSelectedOption}
              />
            )}
          </div>
          <div className="chatbot-chat-container-input">
            <InputChat
              getMessage={getMessage}
              sendMessage={sendMessage}
              openSelect={openSelect}
              text={[message.text]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
