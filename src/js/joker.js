import joker from "one-liner-joke";

setInterval(() => {
  console.log(joker.getRandomJoke().body);
}, 10000);
