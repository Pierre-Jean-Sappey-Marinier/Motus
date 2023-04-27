import React from 'react';

function AddNewWordForm({ handleAddWord }) {
  const [wordName, setwordName] = React.useState('');

  return (
    <div className='new-list-item-form'>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          handleAddWord(wordName);

          setwordName('');
        }}
      >
        <label htmlFor='new-list-form-input'>Enter guess: </label>

        <div className='row'>
          <input
            id='new-list-form-input'
            type='text'
            maxLength='5'
            value={wordName}
            required
            onChange={(event) => {
              setwordName(event.target.value.toUpperCase());
            }}
          />
          <button></button>
        </div>
      </form>
    </div>
  );
}

export default AddNewWordForm;
