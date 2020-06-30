import Angry from "../assets/images/reactions/15049-jooey-at-tgsticker-sticker-1.json";
import Hello from "../assets/images/reactions/15050-jooey-at-tgsticker-sticker-2.json";
import Sleepy from "../assets/images/reactions/15051-jooey-at-tgsticker-sticker-3.json";
import Idea from "../assets/images/reactions/15052-jooey-at-tgsticker-sticker-4.json";
import NoListen from "../assets/images/reactions/15058-jooey-at-tgsticker-sticker-10.json";
import CallMe from "../assets/images/reactions/15059-jooey-at-tgsticker-sticker-11.json";
import Sick from "../assets/images/reactions/15060-jooey-at-tgsticker-sticker-12.json";
import Scared from "../assets/images/reactions/15061-jooey-at-tgsticker-sticker-13.json";
import Love from "../assets/images/reactions/15063-jooey-at-tgsticker-sticker-15.json";
import OhNo from "../assets/images/reactions/15066-jooey-at-tgsticker-sticker-18.json";
import RollingEyes from "../assets/images/reactions/15069-jooey-at-tgsticker-sticker-21.json";
import Crying from "../assets/images/reactions/15070-jooey-at-tgsticker-sticker-22.json";
import Talking from "../assets/images/reactions/15075-jooey-at-tgsticker-sticker-27.json";
import Madness from "../assets/images/reactions/15077-jooey-at-tgsticker-sticker-29.json";
import Evil from "../assets/images/reactions/15078-jooey-at-tgsticker-sticker-30.json";
import Drunk from "../assets/images/reactions/15083-jooey-at-tgsticker-sticker-35.json";
import Rocking from "../assets/images/reactions/15090-jooey-at-tgsticker-sticker-42.json";
import Aww from "../assets/images/reactions/15092-jooey-at-tgsticker-sticker-44.json";

export const petImages = {
  Angry,
  Hello,
  Sleepy,
  Idea,
  NoListen,
  CallMe,
  Sick,
  Scared,
  Love,
  OhNo,
  RollingEyes,
  Crying,
  Talking,
  Madness,
  Evil,
  Drunk,
  Rocking,
  Aww,
};

export const getRandomPet = () => {
  const keys = Object.keys(petImages);
  const randomKey = (keys.length * Math.random()) << 0;
  return petImages[keys[randomKey]];
};
