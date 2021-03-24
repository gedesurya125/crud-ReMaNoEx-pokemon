import React, {useState, useEffect} from 'react';
import {FormTable} from './FormTable';
import axios from 'axios';


//===LOCAL=== 
//LOCAL Function
const getDataServer = async(url, cb) => {
  try{
    const response = await axios.get(url);
    const data = response.data.data;
    cb(null,data); // if not error, data send to the call back
  } catch (error){
    cb(error,null); // if error, error detail send to call back funtion
  }
}
//LOCAL Variable




//====Add Pokemon Form====
export const AddPokemon = (props) => {
  const [name, setName] = useState('');
  const [str, setStr] = useState(0);
  const [def, setDef] = useState(0);
  const [photo, setPhoto] = useState();
  const [elementName, setElementName] = useState('');
  const [elementList, setElementList] = useState([]);
  //const elementList = [];
  //SIDE EFFECT===========
  useEffect(() => {
    //get Element list from the server and save to LOCAL VARIABLE
    getDataServer('http://localhost:5000/api/element', (err, resData) => {
      //let dataList = [];
      err ? console.log(`error = ${err}`) : resData.map(data => {
          setElementList(elementList => [...elementList, {value:data.id, txt: data.name}]);
          //elementList.push({value:data.id, txt: data.name});
      });
    });
  }, [])
  
  console.log(`INI ISI DARI element list :`, elementList);


  const onFormChanged = e => {
    switch (e.target.name) {
      case 'name': setName(e.target.value); 
      break;
      case 'str': setStr(e.target.value); 
      break;
      case 'def': setDef(e.target.value); 
      break;
      case 'photo': 
        e.preventDefault(); 
        //const targetFile = e.target.files[0];
        console.log(e.target.files[0]);
        setPhoto(e.target.files[0]);
      break;
      case 'elementName': 
        e.preventDefault();
        setElementName(e.target.value); 
      break;
      default:
        break;
    }
  }

  const pokemonInput =[
    [
      {formType: 'label', txt:'Name', properties:{htmlFor:'name', className:'px-4 text-white font-bold text-white font-bold'}},
      {formType: 'input', properties:{type:'text', name:'name', value:name, onChange:onFormChanged, className:'w-full p-1'}}
    ],
    [
      {formType: 'label', txt:'Strength', properties:{htmlFor:'str', className:'px-4 text-white font-bold'}},
      {formType: 'input', properties:{type:'text', name:'str', value:str, onChange:onFormChanged, className:'w-full p-1' }}
    ],
    [
      {formType: 'label', txt:'Defense', properties:{htmlFor:'def', className:'px-4 text-white font-bold'}},
      {formType: 'input', properties:{type:'text', name:'def', value:def, onChange:onFormChanged, className:'w-full p-1' }}
    ],
    [
      {formType: 'label', txt:'Photo', properties:{htmlFor:'photo', className:'px-4 text-white font-bold'}},
      {formType: 'input', properties:{type:'file', name:'photo', onChange:onFormChanged, className:'w-full p-1 bg-white' }}
    ],
    [
      {formType: 'label', txt:'Element', properties:{htmlFor:'element', className:'px-4 text-white font-bold'}},
      {formType: 'select', properties:{name:'elementName', value:elementName, onChange:onFormChanged, className:'w-full p-1' }, 
        innerTag:elementList}
    ],
  ]

  return(
    <div className="grid grid-cols-1 grid-rows-1 justify-items-center p-4">
      <h1 className="font-bold text-2xl text-center text-white p-4 mb-4 bg-purple-700 w-full ">INPUT NEW POKEMON</h1>
      <FormTable formClassName="" tableClassName="bg-gray-400" trClassName="border-2 border-gray" tdClassName="" items={pokemonInput}/>
    </div>
  
  
  )
}


//============Add Element Form===================================
export const AddElement = (props) => {
  return(
    <p className="font-bold text-2xl">ADD ELEMENT FORM</p>
  )
}