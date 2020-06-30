import { petImages, getRandomPet } from "./petImages";
import { getAnimation } from "../api/getAnimation";

export const errorChat = {
  emitter: "pet",
  text: ["Are you kidding me?", "Choose a valid option!"],
  reaction: petImages.Scared,
};

export const welcomeChat = (name) => {
  const welcome = {
    emitter: "pet",
    text: [
      `Glad to meet you ${name}!`,
      "My name is Jooey. I'm a petbot under development",
      "But we can interact each other a little",
      "Please choose a question",
    ],
  };
  return welcome;
};

export const byeChat = {
  emitter: "pet",
  text: ["Nice to know you", "Call me!"],
  reaction: petImages.CallMe,
};

export const petQuestions = {
  1: "1️⃣ What are you doing?",
  2: "2️⃣ Could you send me a gif?",
  3: "3️⃣ Tell be about you",
  x: "❌ Goodbye",
};

export const getQuestion = (value) => {
  const text = petQuestions[value].split(" ").slice(1).join(" ");
  if (text) {
    const question = { text: [text], emitter: "user" };
    return question;
  }
};

const petAnswers = {
  1: [
    { text: ["I'm talking with you"], reaction: petImages.RollingEyes },
    {
      text: ["Thinking how to conquer your world"],
      reaction: petImages.Madness,
    },
    {
      text: ["It was a long journey", "Wanna sleep a few hours"],
      reaction: petImages.Sleepy,
    },
    {
      text: ["I'm not on mood", "Leave Britney alone"],
      reaction: petImages.Evil,
    },
    {
      text: ["Searching a new hobbie", "What can I do on your planet?"],
      reaction: petImages.Idea,
    },
    {
      text: ["Sorry", "I'm a little drunk"],
      reaction: petImages.Drunk,
    },
  ],
  3: [
    {
      text: [
        "I'm Jooey",
        "Prince of Alpha Centaury",
        "We come in peace to conquer your world",
        "Resistance is futile!",
      ],
      reaction: petImages.Rocking,
    },
    {
      text: ["Never mind", "It's to complicated for humans"],
      reaction: petImages.RollingEyes,
    },
    {
      text: ["I'm a lonely soul", "Seeking for interplanetary love!"],
      reaction: petImages.Love,
    },
    {
      text: ["I'm lost", "and I miss my mom!"],
      reaction: petImages.Crying,
    },
    {
      text: [
        "Believe it or not",
        "I'm a famous Hollywood actor",
        "Are you filming a movie?",
      ],
      reaction: petImages.CallMe,
    },
  ],
};

export const getAnswer = async (value) => {
  let answer = {};
  answer.emitter = "pet";

  if (value === "2") {
    const imagePath = await getAnimation();
    if (imagePath) {
      answer.imagePath = imagePath;
    } else {
      answer.text = ["Oops! Something went wrong!"];
    }
    answer.reaction = getRandomPet();
  }

  const answers = petAnswers[value];
  if (answers) {
    const random = Math.floor(Math.random() * answers.length);
    answer = { ...answer, ...answers[random] };
  }

  return answer;
};
