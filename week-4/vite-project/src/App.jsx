import "./App.css";
import { useState } from "react";

const Header = () => {
  return (
    <header className="header">
      <div>Welcome Title / Logo</div>
      <nav>
        <ul id="nav">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
        <div
          id="menu-trigger"
          onClick={() => console.log("menu-trigger is on click")}
        >
          &#9776;
        </div>

        <div className="menu">
          <div id="menu-close">X</div>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

// Request 1: Click to Change Text.

const Section = () => {
    const [welcomeWord, setWelcomeWord] = useState("Welcome Message");
  return (
    <section>
      <h1 id="WelcomeMessage" onClick={() => setWelcomeWord("Have a Good Time!")}>{welcomeWord}</h1>
      <h2>Section Title</h2>
      <div className="flex-container">
        <div className="first box">Content Box 1</div>
        <div className="box">Content Box 2</div>
        <div className="box">Content Box 3</div>
        <div className="box">Content Box 4</div>
      </div>

      <button
        className="CallToAction"
        onClick={() => console.log("CallToAction is on click")}
      >
        Call to Action
      </button>

      <div className="flex-container display-none">
        <div className="first box">Content Box 5</div>
        <div className="box">Content Box 6</div>
        <div className="box">Content Box 7</div>
        <div className="box">Content Box 8</div>
      </div>
    </section>
  );
};

function App() {
  return (
    <>
      <Header />
      <Section />
    </>
  );
}

export default App;

// // Request 2: Click to Show/Close Menu.
// const menuTrigger = document.querySelector("#menu-trigger");
// const menu = document.querySelector(".menu");
// const menuClose = document.querySelector("#menu-close");

// menuTrigger.addEventListener("click", () => {
//   if (menu.style.display === "none" || menu.style.display === "") {
//     menu.style.display = "block";
//   } else {
//     menu.style.display = "none";
//   }
// });

// menuClose.addEventListener("click", () => {
//   menu.style.display = "none";
// });

// // Request 3: Click to Show More Content Boxes.
// const callToAction = document.querySelector(".CallToAction");
// const ContentBox5678 = document.querySelector(".display-none");
// callToAction.addEventListener("click", () => {
//   if (ContentBox5678.style.display === "none" ||ContentBox5678.style.display === "") {
//     ContentBox5678.style.display = "flex";
//   } else {
//     ContentBox5678.style.display = "none";
//   }
// });
