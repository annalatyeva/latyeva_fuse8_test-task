import PropTypes from 'prop-types';

const CharacterCard = ({ characterResults }) => {
  const createdDate = new Date(characterResults.created);
  const day =
    createdDate.getDate() < 10
      ? `0${createdDate.getDate()}`
      : createdDate.getDate();
  const month =
    createdDate.getMonth() + 1 < 10
      ? `0${createdDate.getMonth() + 1}`
      : createdDate.getMonth() + 1;
  const createdDateFormated = `${day}
  .${month}
  .${createdDate.getFullYear()}`;
  return (
    <div className="card">
      <a href={characterResults.url} target="_blank" rel="noreferrer">
        <h2>
          {characterResults.name} - {characterResults.species}
        </h2>
        <div className="card-info">
          <p>
            <span>Status: </span>
            <span className={characterResults.status.toLowerCase()}>
              {characterResults.status}
            </span>
          </p>
          <p>
            <span>Created: </span> <span>{createdDateFormated}</span>
          </p>
        </div>
      </a>
    </div>
  );
};

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
