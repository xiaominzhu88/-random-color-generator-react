import React, { useState } from 'react';
import fun from './fun.jpg';
import './App.css';
// have to learn to pass click event from children to parent

// create hex-randomColor for the background(call this func later to get Hex-Code)
const randomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ADD8E6');
  const [textColor, setTextColor] = useState('green');

  // create text-color use array for text
  // create changeColor() to get color
  const changeColor = () => {
    const colors = [
      'red',
      'blue',
      'hotpink',
      'yellow',
      'lightblue',
      'silver',
      'purple',
    ];
    const lengthColors = colors.length;
    const index = Math.floor(Math.random() * lengthColors);
    const choosedColor = colors[index];

    //call the setTextColor() with choosedColor as argument to get color
    // on the text-color button with click event

    setTextColor(choosedColor);
  };

  // get color from the background-color button use setBackgroundColor
  // here i call the randomColor() to get the color as Hex-'STRING'
  const newBgc = () => {
    setBackgroundColor(randomColor());
  };

  return (
    <div
      className="App"
      //  set the initial bg-color wenn the page load and get 'updated'
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <img className="App-logo" src={fun} alt="fun" width="150px" />
      <h1>Random-color-generator-React-App</h1>

      {/* call both function to get each random-color with click event */}
      <button onClick={newBgc}>Background-Color</button>
      <button onClick={changeColor}>Text-Color</button>

      {/* use {} to get the 'updated'-color as 'string' */}

      <p>
        Background Hex-Color is {}
        <span style={{ fontSize: '2em' }}>{backgroundColor}</span>
      </p>
      <p>
        Text Color is {}
        <span style={{ color: textColor, fontSize: '2em' }}>{textColor}</span>
      </p>

      {/*set initial text-color wenn the page load and get 'updated'
       */}
      <h2 style={{ color: textColor }}>When nothing goes right, Go left.</h2>
    </div>
  );
}

export default App;
