import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/pokeSelect.css'

const PokeSelect = ({setTypeFilter}) => {

    const [types, getTypes] = useFetch()

   

   useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/type'
    getTypes(url)
  }, [])

  const valueSelect = useRef()

  const handleChange = () =>{
    console.log(valueSelect.current.value)

  }

  return (
    <div className='poke-select'>
    <select onChange={handleChange} ref={valueSelect}>
        <option value=""> <span className='all_pokemons'>All pokemons-clic hear</span> </option>
        {
            types?.results.map((type, i) => (
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
      
    </select>
    </div>
  )
}

export default PokeSelect