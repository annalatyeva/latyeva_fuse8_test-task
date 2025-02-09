import PropTypes from 'prop-types';

const CountInfo = ({ count }) => (
  <div className="count-container">
    <p className="count">Found characters: {count}</p>
  </div>
);

CountInfo.propTypes = {
  count: PropTypes.number.isRequired,
};

export default CountInfo;
