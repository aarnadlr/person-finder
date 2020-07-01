import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import { Card } from './components/Card';
import mockData from './MOCK_DATA.json';

interface Person {
  id?: number;
  name?: string;
  email?: string;
  avatar?: string;
  description?: string;
}

function App() {

  //data array
  const [fullDataArray] = useState(mockData);

  // user's string
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  // filtered array
  const [searchResults, setSearchResults] = React.useState<Array<Person>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef && inputRef.current && inputRef.current.focus();
  },[])

  useEffect(() => {
    // every time the user types, check if the searchTerm is present in the name. If so, include that person in the array.
    const results = fullDataArray.filter(
      (personObj) => ( personObj.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // store the filtered results in state
    setSearchResults(results);
  }, [fullDataArray, searchTerm]);

  return (
    <div className="App">
      <div className="App__wrapper">
        <h1 className="App__header">The Person Finder</h1>
        <p className="App__introduction">
          If you just can’t find someone and need to know what they look like,
          you’ve come to the right place! Just type the name of the person you
          are looking for below into the search box!
        </p>

        <input
          className="App__input"
          type="text"
          name="type-a-name"
          id="type-a-name"
          placeholder="Type a name"
          value={searchTerm}
          onChange={(e) => handleChange(e)}
          ref={inputRef}
        />

        <ul>
          {searchResults.map((person, index) => (
            <li key={index}>
              <Card
                name={person && person.name}
                avatar={person && person.avatar}
                description={person && person.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
