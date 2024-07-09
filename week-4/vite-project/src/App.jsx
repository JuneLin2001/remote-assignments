import "./App.css";
import { useState } from "react";
import PropTypes from 'prop-types';

const ContentBox = ({ num }) => {
  return <div className="box">Content Box {num}</div>;
};
ContentBox.propTypes = {
  num: PropTypes.number.isRequired,
};

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

const Section = () => {
  const [welcomeWord, setWelcomeWord] = useState("Welcome Message");
  const [isHide, setIsHide] = useState(true);
  return (
    <section>
      <h1
        id="WelcomeMessage"
        onClick={() => setWelcomeWord("Have a Good Time!")}
      >
        {welcomeWord}
      </h1>
      <h2>Section Title</h2>
      <div className="flex-container">
        <ContentBox num="1" />
        <ContentBox num="2" />
        <ContentBox num="3" />
        <ContentBox num="4" />
      </div>

      <button
        className="CallToAction"
        onClick={() => setIsHide(!isHide)}
      >
        Call to Action
      </button>
      <Hide isHide={isHide} />
    </section>
  );
};

const Hide = ({ isHide }) => {
  return (
    <div className={isHide ? "display-none" : "flex-container"}>
      <ContentBox num="5" />
      <ContentBox num="6" />
      <ContentBox num="7" />
      <ContentBox num="8" />
    </div>
  );
};
Hide.propTypes = {
  isHide: PropTypes.bool.isRequired,
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
