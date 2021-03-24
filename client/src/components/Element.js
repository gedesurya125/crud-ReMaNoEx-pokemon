import axios from 'axios';
import React, {useEffect, useState} from 'react';

export const Element = (props) => {
/*
  const [elementList, setElementList] = useState([]);

  useEffect(() => {
    const fetchData = async (url, setTheState) => {
      let datas = await axios.get(url);
      setTheState(datas.data.data);
    }
    //fetch list of elements from the server
    fetchData('localhost:5000/api/element', (elements) => setElementList(elements));
  }, []);
*/
  let elementcolor = '';
  switch (props.name) {
    case 'water': elementcolor = 'bg-blue-400';
    break;
    case 'earth': elementcolor = 'bg-yellow-800';
    break;
    case 'wind': elementcolor = 'bg-gray-200';
    break;
    case 'thunder': elementcolor = 'bg-yellow-400';
    break;
    default: elementcolor = 'bg-white';
    break;
  }


  return(
    <div className={`px-4 py-1 rounded ${elementcolor} max-w-max text-white mx-1`}>
      {props.name}
    </div>
  )
}