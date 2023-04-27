import React from 'react';

function AddNewWordForm({ handleAddWord, tentative }) {
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
        <label htmlFor='new-list-form-input'>Ici votre mot: </label>

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
      <div className='nombre-de-tentatives-restantes'>
        <p>Nombre de tentatives restantes : {7 - tentative}</p>
      </div>
    </div>
  );
}

export default AddNewWordForm;
