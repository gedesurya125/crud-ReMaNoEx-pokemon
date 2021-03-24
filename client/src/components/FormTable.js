import React from 'react';
//Table component
export const FormTable = (props) => {
  return(
    <form className={props.formClassName}>
      <table className={props.tableClassName}>
        {props.items.map(item => (
          <tr className={props.trClassName}>
            {
              
              item.map(tag => {
                let renderForm = '';
                switch (tag.formType) {
                  case 'label': renderForm = (<td className={props.tdClassName}><label {...tag.properties}>{tag.txt}</label></td>);
                  break;
  
                  case 'input': renderForm = (<td className={props.tdClassName}><input {...tag.properties}/></td>);
                  break;
  
                  case 'select': renderForm = (
                    <td className={props.tdClassName}>
                      <select {...tag.properties}>
                        <option value=''></option>
                        {tag.innerTag.map(inner => (
                          <option value={inner.value}>{inner.txt}</option>
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
      </table>
    </form>
  )
}