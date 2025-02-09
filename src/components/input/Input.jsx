import PropTypes from 'prop-types';

const Input = ({ inputValue, getInputValue }) => {
  const placeholderText = 'Search characters...';

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

Input.propTypes = {
  inputValue: PropTypes.string.isRequired,
  getInputValue: PropTypes.func.isRequired,
};

export default Input;
