import React from 'react';
import {componentStyle} from '../commons/component.style';

const ModalSimple = (props) => {

  const {
    type, 
    content, 
    action
  } = props.properties;


  let modalBody = null;

  switch (type) {
    case 'confirmation': modalBody =(
      <div className="w-1/2 modal-message p-4 bg-white rounded-lg">
        <div className="modal-header border-b-2 pb-2 border-blue-600 font-bold text-xl">
          <h1>Confirmation</h1>
        </div>
        <div className="modal-body py-5 border-b-2 border-blue-600 font-bold">
          {content}
        </div>

        <div className="modal-footer">
          <button className={componentStyle.button.danger + ' float-right'} onClick={action.no}> No </button>
          <button className={componentStyle.button.default+ ' float-right'} onClick={action.yes}> Yes </button>
        </div>
        
      </div>
    )
      
      break;
  
    default:
      break;
  }

  // switch if modal open or not...
  if(props.open){
    return(
      <div className="fixed modal-backround z-10 min-w-full inset-0 bg-gray-400 bg-opacity-50 flex justify-center items-center">
        
          {modalBody}
        
          

      </div>  
    )
  }else{
    return null
  }
  
}

export default ModalSimple;