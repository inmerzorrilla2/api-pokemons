import React from 'react'
import './styles/pokeFooter.css'

const PokeFooter = () => {
  return (
    <>
    
        <img className='img_footer' src="../../../assets/pokémon.jpeg" alt="" />
    
        <div className='pokeFooter'>
        <img className='academlo' src="../../../assets/academlo.png" alt="" />  
        <p>Made with ❤️ by <a href="https://github.com/inmerzorrilla2">INMER ZORRILLA 2024</a></p>
        <p>Pokémon © 2024 Nintendo</p>
        <p>Pokémon™ and the Pokémon® logo are trademarks of Nintendo.</p>
        <p>All other trademarks are property of their respective owners.</p>

    </div>
   
    </>
  )
}

export default PokeFooter