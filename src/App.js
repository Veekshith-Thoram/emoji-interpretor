import "./styles.css";
import { useState } from "react";
// var username = prompt("give me your name");
var emojiDictionary = {
  "😂": "Laughter",
  "😊": "Shy",
  "😉": "Wink",
  "❤": "Love",
  "😢": "Sad",
  "😎": "Cool",
  "👏": "Applause",
  "😁": "Happy",
  "😤": "Anger",
  "🤗": "Hug"
};
var emojisWeKnow = Object.keys(emojiDictionary);
// console.log(emojisWeKnow)
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We dont have that in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Dakoota Dallas</h1>
      <p>The emoji Interpretor</p>
      <input placeholder="EMOJI here" onChange={emojiInputHandler}></input>
      <div id="meaning-text">{meaning}</div>

      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
