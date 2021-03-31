import axios from 'axios';

//get method
export const getDataServer = async(url, cb) => {
  try{
    const response = await axios.get(url);
    const data = response.data.data;
    cb(null,data); // if not error, data send to the call back
  } catch (error){
    cb(error,null); // if error, error detail send to call back funtion
  }
}

//post method woth x-www-form-url-encoded
//params is const params = new URLSearchParams();
//then assign the params with params.append('key', 'value');
export const postDataServer = async(url, params, cb) => {
  try{
    const config = {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      }
    }
      const response = await axios.post(url, params, config);
      const data = response.data.data;
      cb(null, data);
  }catch(error){
    cb(error, null)
  }
}

export const putMultipartFormDataServer = async(url, formData, cb) => {
  try{
    const config = {
      headers: {
        'Content-Type' : 'multipart/form-data'
      }
    };
    const response = await axios.put(url, formData, config);//url with /:id
    const data = response.data.data;
    cb(null, data);
  }catch(error){
    cb(error, null);
  }
}

export const deletePokemon =async(id, cb) => {
  try{
    let response = await axios.delete("http://localhost:5000/api/pokemon/"+id);
    response = await axios.delete("http://localhost:5000/api/customsearch/deletePokemonElement/"+id);
    const data = response.data.data;
    cb(null, data);
  }catch(err){
    cb(err, null);
  }
}