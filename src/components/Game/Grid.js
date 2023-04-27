import React from 'react';
import './grid.scss';
import { checkGuess } from '../../game-helpers';

function Grid({ letter, answer }) {
  const rows = [];
  let cols = [];
  console.log('PUTAIN DE MERDE', checkGuess(letter[0].wordName, answer));

  for (let i = 0; i < letter.length; i++) {
    let newClass = checkGuess(letter[i].wordName, answer);
    let letters = letter[i].wordName.split('');
    for (let j = 0; j < 5; j++) {
      cols.push(
        <div key={j} className={`cell ${newClass[j].status}`}>
          {letters[j]}
        </div>
      );
    }
    rows.push(
      <div key={i} className='row'>
        {cols}
      </div>
    );
    cols = [];
  }

  return <div className='grid'>{rows}</div>;
}

export default Grid;
