import PropTypes from 'prop-types';

const CharacterCard = ({ characterResults }) => (
  <a href={characterResults.url} target="_blank" rel="noreferrer">
    <div className="card">
      <h2>
        {characterResults.name} {characterResults.species}
      </h2>
      <p>Status: {characterResults.status}</p>
      <p>Created: {characterResults.created}</p>
    </div>
  </a>
);

CharacterCard.propTypes = {
  characterResults: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterCard;
