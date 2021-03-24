import React from 'react';
import {Element} from './Element';

export const PokeCard = (props) => {

  const renderedElement = props.ownedElements.map(element => {
    return(
      <Element {...element}/>
    )
    
  })
  return(
    <div className="poke-card w-full rounded border-2 border-black grid grid-rows-6 " id={props.id}>
      <div className="w-full p-2 border-b-2 border-black row-span-5">
        <img src={props.photo} alt="No Gambar" className="w-full" />
      </div>
      <div className="grid grid-rows-2">
        <h2 className="text-4xl font-bold text-center">{props.name}</h2>
        <div className="skills flex justify-center p-1">
          {renderedElement}
        </div>
      </div>
      
    </div>
  )
}