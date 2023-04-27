import React from 'react';
import { useState } from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import Submitword from './Bubmitword';
import Grid from './Grid';
import './game.scss';
import Final from './Final';

const answer = sample(WORDS);
console.log({ answer });
function Game() {
  const [word, setWord] = useState([
    {
      wordName: 'MOTUS',
      id: crypto.randomUUID(),
    },
  ]);

  function handleAddWord(wordName) {
    if (!minLengthValidator(wordName, 5)) {
      alert('Input value must be at least 5 characters long.');
      return;
    }
    if (word.length == 7) {
      alert('Le nombre maximum de tentatives a été atteint.');
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
        <Submitword handleAddWord={handleAddWord} tentative={word.length} />
      </ul>
      <div className='grid-elem'>
        <h1>MOTUS</h1>
        <Grid letter={word} answer={answer} />
      </div>
      <div className='tested-words'>
        <p>Mots testés :</p>
        {word.map(({ id, wordName }) => (
          <li key={id}>{wordName}</li>
        ))}
      </div>

      <Final tentative={word.length} />
    </>
  );
}

export default Game;
