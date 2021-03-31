/**============== HOW TO USE ========================
 * import then render component like this
    <FormTable formClassName="" tableClassName="bg-gray-400" trClassName="border-2 border-gray" tdClassName="" items={pokemonInput} onSubmit={onFormSubmit}/>
 * Pass value like this to items props

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

 */
//=================TABLE COMPONENT=========================
import React from 'react';
import {useHistory} from 'react-router-dom';
import {componentStyle} from '../commons/component.style';
import {Redirect, Link} from 'react-router-dom';
//Table component
export const FormTable = (props) => {
  const history = useHistory();
  const goToLastPage = () => {
    history.goBack();
  }
  const redirectToHome = () =>{
    return(
      <Redirect to="/" />
    )
  }
  return(
    <form className={props.formClassName}>
      <table className={props.tableClassName}>
        <tbody>
        {props.items.map((item, index) => (
          <tr key={index} className={props.trClassName}>
            {
              
              item.map((tag, index) => {
                let renderForm = '';
                switch (tag.formType) {
                  case 'label': renderForm = (<td key={index} className={props.tdClassName}><label {...tag.properties}>{tag.txt}</label></td>);
                  break;
  
                  case 'input': renderForm = (<td key={index} className={props.tdClassName}><input {...tag.properties}/></td>);
                  break;
  
                  case 'select': renderForm = (
                    <td key={index} className={props.tdClassName}>
                      <select {...tag.properties}>
                        <option value=''></option>
                        {tag.innerTag.map((inner, index) => (
                          <option key={index} value={inner.value}>{inner.txt}</option>
                        ))}
                      </select>
                    </td>
                    
                    );
                  break;

                  default:
                    break;
                }
  
                return renderForm;
              })

            }
            
          </tr>
          
        ))}
        <tr className=""><td colSpan="2" className=" flex items-center">{props.selectedElements}</td></tr>
        <tr>
          
          <td colSpan="2" className="text-center border-2 border-gray-200">
            <button {...props.formButtonSubmitProperties}>Submit</button>
            <Link to="/" className={componentStyle.button.danger}>Cancle</Link>
          </td>          
        </tr>
        </tbody>
      </table>
    </form>
  )
}