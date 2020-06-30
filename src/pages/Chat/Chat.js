import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";

import { petImages } from "../../data/petImages";

import PetItem from "./components/PetItem/PetItem.jsx";
import UserItem from "./components/UserItem/UserItem.jsx";
import InputChat from "./components/InputChat/InputChat.jsx";
import Select from "./components/Select/Select.jsx";

import {
  errorChat,
  welcomeChat,
  byeChat,
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

    if (openSelect || (message.text && message.text[0].length === 1)) {
      handleSelectedOption(message.text[0]);
      return;
    }

    setChat([...chat, message]);
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

  function byeResponse(question) {
    const BYE_TIMER_IN_SECONDS = 5;

    if (byeChat) {
      setChat([...chat, question, byeChat]);
      setMessage({ ...message, text: [""] });

      setTimeout(() => {
        history.goBack();
      }, BYE_TIMER_IN_SECONDS * 1000);
    }
  }

  const [openSelect, setOpenSelect] = useState(false);

  async function handleSelectedOption(value) {
    if (!value) {
      return;
    }

    const question = getQuestion(value);
    if (!question) {
      errorResponse();
      return;
    }

    if (value.toLowerCase() === "x") {
      byeResponse(question);
      return;
    }

    const answer = await getAnswer(value);
    if (answer) {
      setChat([...chat, question, answer]);
    }
    setMessage({ ...message, text: [""] });

    scrollToBottom();
  }

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    const SCROLL_TIMER_IN_SECONDS = 0.6;
    setTimeout(() => {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }, SCROLL_TIMER_IN_SECONDS * 1000);
  };

  useEffect(() => {
    const FIRST_RESPONSE_TIMER_IN_SECONDS = 0.5;
    const OPEN_SELECT_TIMER_IN_SECONDS = 0.6;

    if (chat.length === 2) {
      setTimeout(() => {
        firstResponse(message.text);
      }, FIRST_RESPONSE_TIMER_IN_SECONDS * 1000);
      setMessage({ ...message, text: [""] });
      setTimeout(() => {
        setOpenSelect(true);
      }, OPEN_SELECT_TIMER_IN_SECONDS * 1000);
    }

    scrollToBottom();
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
                    imagePath={message.imagePath}
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
            <div ref={messagesEndRef} />
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
