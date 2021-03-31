import React, {useState, useEffect, useReducer} from 'react';
import {FormTable} from './FormTable';
import {getDataServer, postDataServer, putMultipartFormDataServer} from '../commons/backendComunication.axios';
import {Redirect} from 'react-router-dom';
import {componentStyle} from '../commons/component.style';
import {Element} from './Element';






//====Add Pokemon Form====
export const AddPokemon = (props) => {
  //form field=========================
  const [name, setName] = useState('');
  const [str, setStr] = useState(0);
  const [def, setDef] = useState(0);
  const [photo, setPhoto] = useState();
  const [elementName, setElementName] = useState(''); // 1, 2, 3 etc
  
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedElements, setSelectedElements] = useState([]);
  

  const [elementList, setElementList] = useState([]);


  //===========TESTING==============
  const selectElementNameByValue = (value) => {
    const elements = elementList.slice();
    const elementObj = elements.find(element => element.value === value);
    return elementObj.txt;
  }

 // const elel = selectElementNameByValue(1);
 // console.log("INI NAMA ELEMENETNYA BROOO : ", elel);
 /**
  * Perlu Mempelajari bagaimana caranya menantikan suatu fungsi selesai baru menjalankan fungsi lainnya
  */
  //===========================
  

 
  //SIDE EFFECT===========
  useEffect(() => {
    //get Element list from the server and save to LOCAL VARIABLE
    getDataServer('http://localhost:5000/api/element', (err, resData) => {
      err ? console.log(`error = ${err}`) : resData.map(data => {
          setElementList(elementList => [...elementList, {value: data.id, txt: data.name}]);
          /*
          dispatch({type: 'addElementList', payload: {
            value: data.id,
            txt: data.name
          }});
          */
      });
    });
  }, [])
  
  console.log(`INI ISI DARI element list :`, elementList);

  //Form Controller
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


  //onFormSubmit clicked method
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted!!!!');
    const pokemonParams = new URLSearchParams();
    pokemonParams.append('name', name);
    pokemonParams.append('str', str);
    pokemonParams.append('def', def);
    pokemonParams.append('photo', null); //will be uploaded my multer method
    postDataServer('http://localhost:5000/api/pokemon',pokemonParams, (err, resData) => {
      err ? console.log("error postPokemon to server : ", err) : console.log("new Pokemon Created, details: ",resData);

       //1. Fetch the last pokemon id to update its element relation
      getDataServer('http://localhost:5000/api/pokemon', (err, resData) => {
        let lastPokemonId = 0;
        err ? console.log("error get data from server, details :",err) : lastPokemonId = resData[resData.length-1].id;

        //2. then insert the element relation to the server
        selectedElements.map(element => {
          const elementRelationParams = new URLSearchParams();
          elementRelationParams.append('id', null);
          elementRelationParams.append('pokemon_id', lastPokemonId);
          elementRelationParams.append('element_id', element);
          postDataServer('http://localhost:5000/api/relation', elementRelationParams, (err, resData) => {
            err ? console.log("error elementRelation to server : ", err) : console.log("new element relation Created, details: ",resData);
        })

        

          //3. then update the pokemon photo
          const formData = new FormData();
          formData.append('photo', photo);
          putMultipartFormDataServer(`http://localhost:5000/api/upload/update/pokemon/img/${lastPokemonId}`, formData, (err, resData) => {
            if(err){
              console.log("error update photo to server, details: ", err)
            }else{
              console.log("photo updated successfully, details : ", resData);
              alert('New Pokemon Added Succesfully');
              
              //4. Triger Redirect to /
              setSubmitSuccess(true);
              
              
            }
           


          })
        })
      })

    });

   



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
      { formType: 'label', txt:'Element', properties:{htmlFor:'element', className:'px-4 text-white font-bold'}},
      { formType: 'select', properties:{name:'elementName', value:"", 
      onChange: e => setSelectedElements([...selectedElements, e.target.options[e.target.value].text])
 , className:'w-full p-1'}, 
        innerTag:elementList}
    ],
  ]
console.log('ini inis selectedElements', selectedElements)

  //BUTON DISABLE CONTROL========================
  const isFilled = Boolean(name) && Boolean(str) && Boolean(def) && Boolean(photo) && Boolean(elementName);
  console.log("isFilled : ", isFilled);
  let formButtonSubmitProperties = '';
  if(isFilled){
    formButtonSubmitProperties = {
      className: componentStyle.button.default,
      onClick: onFormSubmit,
      disabled: !isFilled
    }
  }else {
    formButtonSubmitProperties = {
      className: componentStyle.button.disabled,
      onClick: null,
      disabled: !isFilled
    }
  }

  
  const renderSelectedElements = selectedElements.map(element => {
    return(
    <Element name={element}/>
    )
  })

  if(submitSuccess){
    return(
      <Redirect to="/"/>
    )
  }else{
    return(
      <div className="grid grid-cols-1 grid-rows-1 justify-items-center p-4">
        <div className="p-4 mb-4 bg-purple-700 w-full">
          <h1 className="font-bold text-2xl text-center text-white">INPUT NEW POKEMON</h1>
        </div>
        <FormTable formClassName="" tableClassName="bg-gray-400" trClassName="border-2 border-gray" tdClassName="" items={pokemonInput} formButtonSubmitProperties={formButtonSubmitProperties} selectedElements={renderSelectedElements}/>
      </div>
    )
  }
 
}







//============Add Element Form===================================
export const AddElement = (props) => {
  return(
    <p className="font-bold text-2xl">ADD ELEMENT FORM</p>
  )
}