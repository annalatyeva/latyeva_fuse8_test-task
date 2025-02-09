import { useState } from 'react';
import Input from '../../components/input/Input';
import CountInfo from '../../components/countInfo/CountInfo';
import CharacterCard from '../../components/characterCard/CharacterCard';

const InputPage = () => {
  const [characterData, setCharacterData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalCount, setTotalCount] = useState(0);

  async function getCharacterInfo(inputValue, page = 1) {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${inputValue}&page=${page}`
      );

      if (response.ok) {
        const json = await response.json();
        setCharacterData((prev) => [...prev, ...json.results]);

        if (page === 1) {
          setTotalCount(json.info.count);
        }

        if (json.info.next) {
          const nextPage = page + 1;
          getCharacterInfo(inputValue, nextPage);
        }
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

  const getInputValue = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    if (value.length > 3) {
      setCharacterData([]);
      setTotalCount(0);
      getCharacterInfo(value);
    } else if (value.length <= 3) {
      setCharacterData([]);
      setTotalCount(0);
    }
  };

  return (
    <div className="page">
      <div className="search-container">
        <Input inputValue={searchTerm} getInputValue={getInputValue} />
        {characterData.length > 0 ? <CountInfo count={totalCount} /> : null}
      </div>
      <div className="cards-container">
        {characterData.map((character) => (
          <CharacterCard key={character.id} characterResults={character} />
        ))}
      </div>
    </div>
  );
};

export default InputPage;
