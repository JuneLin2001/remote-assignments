import "./Assignment-3.css";
import { useState } from "react";
import PropTypes from "prop-types";

const ContentBox = ({ plus = 0 }) => {
  const numBox = [1, 2, 3, 4];
  return numBox.map((num) => (
    <div key={num + plus} className="box">
      Content Box {num + plus}
    </div>
  ));
};

const NavMenu = () => {
  return (
    <ul>
      <li>About</li>
      <li>Products</li>
      <li>Price</li>
      <li>FAQ</li>
    </ul>
  );
};

const Hidemenu = ({ isHide, setIsHide }) => {
  return (
    <div className={isHide ? "display-none" : "menu"}>
      <div id="menu-close" onClick={() => setIsHide(true)}>
        X
      </div>
      <NavMenu />
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
        <NavMenu />
        <div id="menu-trigger" onClick={() => setIsHide(!isHide)}>
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
        <ContentBox />
      </div>

      <button className="CallToAction" onClick={() => setIsHide(!isHide)}>
        Call to Action
      </button>
      <HideBoxes isHide={isHide} />
    </section>
  );
};

const HideBoxes = ({ isHide }) => {
  return (
    <div className={isHide ? "display-none" : "flex-container"}>
      <ContentBox plus={4} />
    </div>
  );
};
HideBoxes.propTypes = {
  isHide: PropTypes.bool.isRequired,
};

function Page() {
  return (
    <>
      <Header />
      <Section />
    </>
  );
}

export default Page;
