import React from 'react';

const Grid = () => {
  const [letters, setLetters] = useState(Array(50).fill(''));

  const handleChange = (e, index) => {
    const newLetters = [...letters];
    newLetters[index] = e.target.value;
    setLetters(newLetters);
  };

  return (
    <div className='grid-container'>
      {letters.map((letter, index) => (
        <input
          type='text'
          maxLength={1}
          key={index}
          value={letter}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
};

export default Grid;
