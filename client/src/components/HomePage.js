import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {PokeCard} from './PokeCard';
import {componentStyle} from '../commons/component.style';

export const HomePage = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [elements, setElements] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchData = async (url, setTheState) => {
      const datas = await axios.get(url);
      setTheState(datas.data.data);
    }
    //fetch all pokemon 
    fetchData('http://localhost:5000/api/pokemon', (res) => setPokemons(res)).catch(e => console.log(e));
    
    //fetch all pokemon element
    fetchData('http://localhost:5000/api/customsearch/elementofpokemon', (res) => setElements(res)).catch(e => console.log(e));

  }, [])
  
  const homePageReload = () => {
    setReload(!reload);
  }


  const renderedPokemon = pokemons.map((pokemon, index) => {
    const ownedElements =  elements.filter((element) => element.pokemon_id === pokemon.id);
    
    //console.log(`POKEMON ${pokemon.id} has ELEMENTS :`, ownedElements);
    return(
      <PokeCard key={index} {...pokemon} ownedElements={ownedElements} parentReload={homePageReload}/>
    )
  })


  return(
    <section>
      
      <div className="header flex flex-col md:flex-row md:justify-between mt-2">
        <h1 className="text-2xl font-bold mx-auto md:mx-2">PokeDumb Find</h1>
        <div className="nav flex flex-row justify-center">
          <Link to="/addPokemon" className={componentStyle.button.default}>Add Pokemon</Link>
          <Link to="/addElement" className={componentStyle.button.default}>Add Element</Link>
        </div>
      </div>
      <div className="body grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {renderedPokemon}
      </div>
    </section>
  )
}