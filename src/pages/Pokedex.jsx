import React, { useEffect, useRef, useState } from 'react'
import PokeCard from '../components/pokedex/PokeCard.jsx'
import useFetch from '../hooks/useFetch.js'
import { useSelector } from 'react-redux'
import PokeSelect from '../components/pokedex/PokeSelect.jsx'
import './styles/pokedex.css'

const Pokedex = () => {

  const trainer = useSelector((store) => store.trainer)
  const [inputValue, setInputValue] = useState('')
  const [typeFilter, setTypeFilter] = useState('')

  const [pokemons, getPokemons, getType] = useFetch()

  useEffect(() => {
    if (typeFilter) {
      getType(typeFilter)
    } else {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=10'
    getPokemons(url)
    }
  }, [typeFilter])

  // console.log(pokemons)

  const textInput = useRef()

  const handleSearch = (event) => {
    event.preventDefault()
    setInputValue(textInput.current.value.trim().toLowerCase())
    textInput.current.value = '';
    
  }

  const cbFilter = (poke) => {
    return poke.name.includes(inputValue)
  }

  return (
    <div className="pokedex">
      <h3 className="pokedex__wave">Pokedex</h3>
    
    
    <div className="pokedex__filters">
    <form onSubmit={handleSearch}>
      <input ref={textInput} type="text" />
      <button>Search</button>
    </form>
    <PokeSelect
      setTypeFilter={setTypeFilter}
    />
    </div>
    <div className="pokedex__container">
      {
        pokemons?.results.filter(cbFilter).map((poke) => (
          <PokeCard
            key={poke.url}
            url={poke.url}
          />
          
        ))
      }
      
    </div>

    </div>
  )

}
export default Pokedex