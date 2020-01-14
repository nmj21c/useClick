import React, { useRef, useEffect } from "react";
import "./styles.css";

const useClick = onClick => {
  const element = useRef();

  console.log("onClick", element.current);

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return element;
};

const App = () => {
  const clickMe = e => {
    console.log(e);
  };

  const title = useClick(clickMe);

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
