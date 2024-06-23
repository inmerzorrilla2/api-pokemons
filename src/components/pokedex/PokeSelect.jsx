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
    <select onChange={handleChange} ref={valueSelect}>
        <option value="">All pokemons</option>
        {
            types?.results.map((type, i) => (
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
      
    </select>
  )
}

export default PokeSelect