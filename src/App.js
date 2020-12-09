import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥝": "Kiwi Fruit",
  "🍅": "Tomato",
  "🥥": "Coconut",
  "🥑": "Avocado",
  "🍆": "Eggplant",
  "🥔": "Potato",
  "🥕": "Carrot",
  "🌽": "Ear of Corn",
  "🌶️": "Hot Pepper",
  "🥒": "Cucumber",
  "🥦": "Broccoli",
  "🧄": "Garlic",
  "🧅": "Onion",
  "🍄": "Mushroom",
  "🥜": "Peanuts",
  "🍞": "Bread",
  "🧀": "Cheese Wedge",
  "🍖": "Meat on Bone",
  "🍗": "Poultry Leg",
  "🥩": "Cut of Meat",
  "🥓": "Bacon",
  "🍔": "Hamburger",
  "🍟": "Frech Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🍿": "Popcorn",
  "🧈": "Butter",
  "🥫": "Canned Food",
  "🍘": "Rice Cracker",
  "🍙": "Rice Ball",
  "🍚": "Cooked Rice",
  "🍛": "Curry Rice",
  "🍜": "Bowl of Noodles",
  "🍝": "Spaghetti",
  "🍠": "Roasted Sweet Potato",
  "🍣": "Sushi",
  "🍤": "Fried Shrimp",
  "🥠": "Fortune Cookie",
  "🥡": "Takeout Box",
  "🍦": "Soft Ice Cream",
  "🍧": "Shaved Ice",
  "🍨": "Ice Cream",
  "🍩": "Doughnut",
  "🍪": "Cookie",
  "🎂": "Birthday Cake",
  "🍰": "Cake Slice",
  "🧁": "Cupcake",
  "🍫": "Chocolate Bar",
  "🍬": "Candy",
  "🍭": "Lollipop",
  "🍮": "Custard",
  "☕": "Hot Beverage",
  "🍷": "Wine Glass",
  "🍸": "Cocktail Glass",
  "🍹": "Tropical Drink",
  "🍺": "Beer Mug",
  "🍻": "Clinking Beer Mugs",
  "🥂": "Clicking Glasses",
  "🥃": "Tumbler Glass",
  "🥤": "Cup with Straw",
  "🧃": "Juice Box"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiEventHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry, we don't have this in our database!";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <div className="app-panel">
        <h1>
          <u>Yummymoji!</u>
        </h1>
        <p>
          Click on the food emojis or paste them below to know what they are
          called
        </p>
        <input onChange={emojiEventHandler} />
        <h2>This is: " {meaning} "</h2>
        <h3> Emojis We Know </h3>

        <ul className="emojiList">
          {emojisWeKnow.map((emoji) => {
            return (
              <li
                className="emoji"
                onClick={() => emojiClickHandler(emoji)}
                key={emoji}
              >
                {emoji}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
