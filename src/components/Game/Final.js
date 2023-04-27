import React from 'react';

const Final = () => {
  return (
    <div>
      {' '}
      <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>3can guesses</strong>.
        </p>
      </div>
      <div className='sad banner'>
        <p>
          Sorry, the correct answer is <strong>LEARN</strong>.
        </p>
      </div>
    </div>
  );
};

export default Final;
