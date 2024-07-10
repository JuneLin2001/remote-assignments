import "./App.css";
import { useState } from "react";
import PropTypes from "prop-types";

const ContentBox = ({ num }) => {
  return <div className="box">Content Box {num}</div>;
};
ContentBox.propTypes = {
  num: PropTypes.number.isRequired,
};

const Hidemenu = ({ isHide, setIsHide }) => {
  return (
    <div className={isHide ? "display-none" : "menu"}>
      <div id="menu-close" onClick={() => setIsHide(true)}>X</div>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  );
};
Hidemenu.propTypes = {
  isHide: PropTypes.bool.isRequired,
  setIsHide: PropTypes.func.isRequired,
};

const Header = () => {
  const [isHide, setIsHide] = useState(true);
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
          onClick={() => setIsHide(!isHide)}
        >
          &#9776;
        </div>
        <Hidemenu isHide={isHide} setIsHide={setIsHide} />
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

      <button className="CallToAction" onClick={() => setIsHide(!isHide)}>
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
      <h2>add some to test</h2>
    </>
  );
}

export default App;

