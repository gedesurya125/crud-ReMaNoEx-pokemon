import React, {useState, useReducer} from 'react';
import {Element} from './Element';
import ModalSimple from '../commons/ModalSimple';
import {deletePokemon} from '../commons/backendComunication.axios';
import { Redirect } from 'react-router';
//current - import delete API from server



export const PokeCard = ({
  id,
  photo, 
  ownedElements, 
  name,
  parentReload
}) => {

  //Use Reducer initialization
  const intialState = {
    reloadHome: false,
    isModalOpen: false,
    modalProperties : {
      type: 'confirmation',
      content: (<h1>Are You Sure ?</h1>),
      action : {
        yes: () => dispatch({ type: 'toggleModalConfirmation' }),
        no: () => dispatch({ type: 'toggleModalConfirmation' })
      } 
    }
  }
  const reducer = (state, action) => {
    switch(action.type){
      case 'toggleModal' : return {
        ...state, isModalOpen: !state.isModalOpen
      }

      case 'reloadHome' : return {
        ...state, reloadHome: true
      }

      case 'toggleModalConfirmation' : return{
        isModalOpen: !state.isModalOpen,
        modalProperties: {
          type: 'confirmation',
          content: (<h1>Are You Sure ?</h1>),
          action : {
            yes: () => {
              action.payload();
              dispatch({ type: 'toggleModal' });
              dispatch({ type: 'reloadHome' });
            },
            no: () => dispatch({ type: 'toggleModal' })
          }
        }
      };

      
      default: throw new Error('Unexpected action');
    }
  }

  const [state, dispatch] = useReducer(reducer, intialState);


  console.log("ini state dari reducer : ", state);

  const onDeletePokemon = (pokemon_id) => {
    dispatch({type: 'toggleModalConfirmation', payload: () => {
      deletePokemon(pokemon_id, (err, res) => {
        err ? console.log(err) : console.log(res);
      })
    }})
    

  }

  const renderedElement = ownedElements.map((element, index) => {
    return(
      <Element key={index} {...element}/>
    )  
  })

  if(state.reloadHome){
    return(
      <Redirect to="/"/>
    )
  }
  return(
    <section>
      <ModalSimple open={state.isModalOpen} properties={state.modalProperties}/>

      <div className="poke-card w-full rounded border-2 border-black grid grid-rows-6 " id={id}>
        <div className="w-full p-2 border-b-2 border-black row-span-5 relative">
          <img src={photo} alt="No Gambar" className="w-full" />

          <div className="absolute top-0 right-0">
            {/** Edit Button */}
            <button className="bg-blue-400 p-2 w-12 h-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
              </svg>
            </button>

            {/** Delete Button */}
            <button className="bg-red-800 text-white p-2 w-12 h-12" onClick={() => onDeletePokemon(id)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

        </div>

        <div className="">
          <h2 className="text-4xl font-bold text-center my-2">{name}</h2>
          <div className="skills flex justify-center p-1">
            {renderedElement}
          </div>
        </div>
        
      </div>

    </section>
  )
}