import React from 'react';
//Table component
export const FormTable = (props) => {
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
        </tbody>
      </table>
    </form>
  )
}