import React from "react";

const Counter = () => {
  return <button onClick={console.log("BTN is on click")}>+1</button>;
};

const Wireframe = () => {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
    </>
  );
};

export default Wireframe;
