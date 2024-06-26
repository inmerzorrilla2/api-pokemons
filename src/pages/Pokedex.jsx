import React, { useEffect, useRef, useState } from 'react';
import PokeCard from '../components/pokedex/PokeCard.jsx';
import useFetch from '../hooks/useFetch.js';
import { useSelector } from 'react-redux';
import PokeSelect from '../components/pokedex/PokeSelect.jsx';
import './styles/pokedex.css';

const Pokedex = () => {
  const trainer = useSelector((store) => store.trainer);
  const [inputValue, setInputValue] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const [pokemons, getPokemons, getType, nextPage, prevPage, nextCount, prevCount] = useFetch();

  useEffect(() => {
    if (typeFilter) {
      getType(typeFilter);
    } else {
      const url = 'https://pokeapi.co/api/v2/pokemon/?limit=10';
      getPokemons(url);
    }
  }, [typeFilter]);

  const textInput = useRef();

  const handleSearch = (event) => {
    event.preventDefault();
    setInputValue(textInput.current.value.trim().toLowerCase());
    textInput.current.value = '';
  };

  const cbFilter = (poke) => {
    return poke.name.includes(inputValue);
  };

  const handleNextPage = () => {
    if (nextPage) {
      getPokemons(nextPage);
    }
  };

  const handlePrevPage = () => {
    if (prevPage) {
      getPokemons(prevPage);
    }
  };

  return (
    <>
      <h3 className="pokedex__wave">Pokedex</h3>
      <div className="pokedex__container">
        <div className='pokedex__search'>
          <form onSubmit={handleSearch}>
            <input ref={textInput} type="text" />
            <button>Search</button>
          </form>
        </div>

        <PokeSelect setTypeFilter={setTypeFilter} />

        <div className="pokedex__pagination">
          {prevPage && (
            <button onClick={handlePrevPage}>
              Previous ({prevCount})
            </button>
          )}
          {nextPage && (
            <button onClick={handleNextPage}>
              Next ({nextCount})
            </button>
          )}
        </div>

        <div className="pokedex__grid">
          {pokemons?.results.filter(cbFilter).map((poke) => (
            <PokeCard key={poke.url} url={poke.url} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Pokedex;
