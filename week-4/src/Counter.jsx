import React from "react";

const Counter = () => {
  return <button onClick={console.log("BTN is on click")}>+1</button>;
};

const AllPlus1 = () => {
  return <button onClick={console.log("BTN is on click")}>+1</button>;
};

const AddCounter = () => {
  return <button onClick={console.log("BTN is on click")}>+1</button>;
};

const Wireframe = () => {
  return (
    <>
      <AllPlus1 />
      <Counter />
      <Counter />
      <Counter />
      <AddCounter />
    </>
  );
};

export default Wireframe;
