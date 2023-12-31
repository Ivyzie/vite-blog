import { useState } from "react";

function Welcome() {
  const [ouchList, setOuchList] = useState([]); // Maintain a list of rendered 'ouch' elements
  const [showHideButton, setShowHideButton] = useState(true); // Show the Hide Pain button

  function RandomOuch() {
    const randomPosition = {
      left: Math.random() * 100 + "vw",
      top: Math.random() * 100 + "vh",
    };
    return (
      <p className="randomouch" style={randomPosition} tabIndex="-1">
        help
      </p>
    );
  }

  function HideOuch() {
    setOuchList([]); // Clear the 'ouch' list upon clicking "Hide pain"
    setShowHideButton(false); // Hide the Hide Pain button
  }

  function ShowOuch() {
    const newOuch = <RandomOuch key={Date.now()} />; // Generate a new 'ouch' element
    setOuchList([...ouchList, newOuch]); // Add the new 'ouch' element to the list
    setShowHideButton(true); // Show the Hide Pain button
  }

  return (
    <div className="welcome-section">
      <h1>Hey, I am Ivan.</h1>
      <h6>
        <i>- An aspiring full stack dev who majors in AI</i>
      </h6>
      {ouchList.map((ouch) => ouch)}

      {showHideButton && (
        <button
          id="hideouch"
          className="btn btn-primary"
          type="button"
          onClick={HideOuch}
        >
          Reset
        </button>
      )}

      <button
        className="btn btn-primary"
        id="showouch"
        type="button"
        onClick={ShowOuch}
      >
        Click me!
      </button>

      <img src="boomerang_man_color.png" id="welcome-img" alt="Welcome"></img>
      <div id="gallery-div"></div>
    </div>
  );
}

export default Welcome;
