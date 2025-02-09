import { useState } from 'react';

const Input = () => {
  const placeholderText = 'Search characters...';

  async function getCharacterInfo(inputValue) {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${inputValue}`
      );

      if (response.ok) {
        const json = await response.json();
        console.log(json);
      } else {
        if (response.status === 404) throw new Error('404, Not found');
        if (response.status === 500)
          throw new Error('500, internal server error');
        if (!response.ok) throw new Error(response.status);
      }
    } catch (error) {
      console.error('Fetch', error);
    }
  }

  const [inputValue, setInputValue] = useState('');
  const getInputValue = (event) => {
    const { value } = event.target;
    setInputValue(value);
    if (value.length > 3) {
      getCharacterInfo(inputValue);
    }
  };

  return (
    <div>
      <input
        aria-label={placeholderText}
        type="text"
        id="input"
        name="input"
        placeholder={placeholderText}
        onChange={getInputValue}
        value={inputValue}
      />
    </div>
  );
};

export default Input;
