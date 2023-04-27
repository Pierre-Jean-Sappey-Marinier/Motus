import React from 'react';
import { useState } from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import Submitword from './Bubmitword';
import Grid from './Grid';
import './game.scss';
import { checkGuess } from '../../game-helpers';

const answer = sample(WORDS);
console.info({ answer });
console.log({ answer });
function Game() {
  const [word, setWord] = useState([
    {
      wordName: 'POPOP',
      id: crypto.randomUUID(),
    },
  ]);

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
      <div className='grid-elem'>
        <h1>Ma grille de 5x10</h1>
        <Grid letter={word} answer={answer} />
        {console.log('🚀 ~ file: Game.js:42 ~ Game ~ letter:', word)}{' '}
      </div>
    </>
  );
}

export default Game;
