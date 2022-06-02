import './App.css';
import logoball from "./image/ultra-ball.png";
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import PokemonThumnail from './components/pokemonThumnail';
function App() {
  const [allPokemons,setAllPokemons]= useState([]);
  const [carregar,setCarregar]=useState('https://pokeapi.co/api/v2/pokemon?limit=20');
  
  const getAllPokemons = async () => {
    const res = await fetch(carregar)
    const data = await res.json()

    setCarregar(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        await allPokemons.sort((a, b) => a.id - b.id);
        setAllPokemons( currentList => [...currentList, data])
        
        console.log(data)
      })
    }
    createPokemonObject(data.results)
  }
  return (
    <div className="App">
      <div className='container'>

      <p>p</p> <Logoball src={logoball}/>  <p>kemon</p>
      </div>
      <div className='all-container'>
        { allPokemons.map((pokemon,index)=>
        <PokemonThumnail
          id={pokemon.id}
          image={pokemon.sprites.other.dream_world.front_default}
          key={index}
          name={pokemon.name}
          type={pokemon.types[0].type.name}
          />
        )}
      </div>
      
      <Button id="carregar" onClick={() => getAllPokemons()}>carregar mais </Button>

    </div>
  );
}

export default App;
const Logoball = styled.img`
 width: 100px;
 height:100px;
`

const Button = styled.button`
  font-size:20px;
  color: red; 
  gackgrond-color:white;
  border-radius:20px
  `;
 





