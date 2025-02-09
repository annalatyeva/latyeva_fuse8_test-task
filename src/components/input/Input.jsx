import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Input = ({ inputValue, getInputValue }) => {
  const placeholderText = 'Search characters...';
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="input-container">
      <input
        aria-label={placeholderText}
        type="text"
        id="input"
        className="input"
        name="input"
        placeholder={placeholderText}
        onChange={getInputValue}
        value={inputValue}
        ref={inputRef}
      />
    </div>
  );
};

Input.propTypes = {
  inputValue: PropTypes.string.isRequired,
  getInputValue: PropTypes.func.isRequired,
};

export default Input;
