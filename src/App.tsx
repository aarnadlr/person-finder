import React, { useState } from 'react';
import './App.scss';
import { Card } from './components/Card';
import mockData from './MOCK_DATA.json';

function App() {
  const [data] = useState(mockData);

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
        />

        <ul>
          {data.map((person, index) => (
            <li key={index}>
              <Card
                id={person.id}
                name={person.name}
                email={person.email}
                avatar={person.avatar}
                description={person.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
