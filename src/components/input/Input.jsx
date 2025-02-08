import { useState } from 'react';

const Input = () => {
  const placeholderText = 'Search characters...';

  const [inputValue, setInputValue] = useState('');
  const getInputValue = (event) => {
    const { value } = event.target;
    setInputValue(value);
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
