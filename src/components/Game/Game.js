import React from 'react';
import { useState } from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import Submitword from './Bubmitword';

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [word, setWord] = useState([]);

  function handleAddWord(wordName) {
    if (!minLengthValidator(wordName, 5)) {
      alert('Input value must be at least 5 characters long.');
      return;
    }
    const newWord = {
      wordName: wordName,
      id: crypto.randomUUID(),
    };
    const nextWord = [...word, newWord];
    setWord(nextWord);
  }

  function minLengthValidator(value, minLength) {
    return value.length >= minLength;
  }

  return (
    <>
      <ul className='word-list'>
        {word.map(({ id, wordName }) => (
          <li key={id}>{wordName}</li>
        ))}
        <Submitword handleAddWord={handleAddWord} />
      </ul>
    </>
  );
}

export default Game;