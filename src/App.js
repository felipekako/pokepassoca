import './App.css';
import logoball from "./image/ultra-ball.png";
import styled from 'styled-components';
import { useEffect, useState } from 'react';
function App() {
  const [allpokemons,setAllpokemon]= useState([]);
  const [carregar,setCarregar]=useState('https://pokeapi.co/api/v2/pokemon?limit=20');
  
  const getAllpokemons=async()=>{
    const res = await fetch(carregar)
    const data = res.json()
    setCarregar(data.next)
    console.log(data)

    function createPokemonObject(result){
      result.forEach(async(pokemon)=>{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setAllpokemon(currentlisst=>[...currentlisst,data])
        await allpokemons.sort((a, b)=> a.id - b.id)
        await console.log(data)
      
      });
    }
    createPokemonObject(data.result)
  }
  useEffect(()=>{
    getAllpokemons()
  },[])
  return (
    <div className="App">
      <div className='container'>
      <p>p</p> <Logoball src={logoball}/>  <p>kemon</p>
      </div>

      
      <Button id="carregar">carregar mais</Button>
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
 





