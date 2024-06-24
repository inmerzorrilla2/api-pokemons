import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setTrainer } from '../store/slices/trainer.slice'
import { useNavigate } from 'react-router-dom'
import './styles/homePage.css'

const HomePage = () => {

const dispatch = useDispatch()

const navigate = useNavigate()

const textInput = useRef()

const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(setTrainer(textInput.current.value))
    textInput.current.value = '';
    navigate('/pokedex')
    
  }

  return (
    <div className='homePage'>
    <div class="wrapper">
	<svg>
		<text x="50%" y="50%" dy=".35em" text-anchor="middle">
			¡POKEMONS!
		</text>
	</svg>
</div>
<img className='img_trainer' src="../../../assets/trainer.jpeg" alt="" />
    <div className='greeting'>
    <p>To start, give me your name:</p>
    <form onSubmit={handleSubmit}>
      <input ref={textInput} type="text" /> 
      <button>Start</button>
    </form>
    </div>
    </div>
  )
}

export default HomePage