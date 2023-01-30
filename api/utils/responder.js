const {v4: uuidv4} = require("uuid");

const OPERATOR = "Alice";

const hello = ["Hello, how are you?", "Hi, how are you?", "Hi, how are you doing?", "Hello", "Hi", "Aloha!", "Hey!", "Hey, want some Pizza?"];
const positive = ["Yes", "Yes, of course", "Sure", "For sure", "I believe yes", "The answer is yes", "Correct"];
const negative = ["No", "Probably no", "Of cource no", "The answer is no", "No, I don't think so"];
const unclear = [
  "Cannot understand, sorry",
  "What does it mean",
  "What?",
  "Are you kidding?",
  "I don't really know",
  "I don't know what you mean",
  "I don't know what you mean, sorry",
  "It sounds like you are talking about something I don't know about",
  "I don't know what you mean",
  "I'm a very simple bot, basically useless...",
  "Ask me something else"
];

const selectRandom = array => array[Math.floor(Math.random() * array.length)];

const generateResponce = message => {
  if (message.toLocaleLowerCase().includes("hello")) {
    return selectRandom(hello);
  }

  const isQuestion = message.includes("?");
  if (isQuestion) {
    return Math.random() < 0.5 ? selectRandom(positive) : selectRandom(negative);
  }

  return selectRandom(unclear);
};

const respond = (message, callback) => {
  const delay = Math.random() * 1000 + 500;
  const responce = {id: uuidv4(), from: OPERATOR, message: generateResponce(message)};
  setTimeout(() => callback(responce), delay);
};

module.exports = respond;
