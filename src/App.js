import React, { useEffect, useState, useRef } from 'react';
import useRandomJoke from './useRandomJoke';

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState('Alexandre')
  const [lastName, setLastName] = useState('Finger')


  // Custom Hook
  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  }



  return (
    <div className="App">
      <h1>The Joke Generator</h1>
      <input placeholder='first name' ref={firstNameRef} />
      <input placeholder='last name' ref={lastNameRef}/>
      <button onClick={generateJoke}>Generate Joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default App;
