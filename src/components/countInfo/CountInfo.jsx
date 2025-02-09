import PropTypes from 'prop-types';

const CountInfo = ({ count }) => (
  <div>
    <p>Found characters: {count}</p>
  </div>
);

CountInfo.propTypes = {
  count: PropTypes.number.isRequired,
};

export default CountInfo;
