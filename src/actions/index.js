import axios from 'axios';
   
export const SMURF_FETCH  = 'SMURF_FETCH';
export const SMURF_API_SUCCESS  = 'SMURF_API_SUCCESS';
export const SMURF_API_START  = 'SMURF_API_START';
export const SMURF_API_FAIL  = 'SMURF_API_FAIL';
export const ADD_SMURF  = 'ADD_SMURF';
export const SMURF_ERROR  = 'SMURF_ERROR';


export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({type: SMURF_FETCH});
    axios.get('../mocks/server.js')
      .then(res => {
        // console.log(res.data)
        dispatch({type: SMURF_API_SUCCESS, payload: res.data})
      })
      .catch(err => {
        // console.log(err.message)
        dispatch({type: SMURF_API_FAIL, payload: err.message})
      })
  }
}

export const addSmurf = (smurf) => {
  if(!smurf){
    return{
      type: SMURF_ERROR
    };
  }else{
    return  ({
      type: ADD_SMURF,
      payload: smurf
      })
  }
}


export const smurfError = (mess) => {
  return({
    type: SMURF_API_FAIL,
    payload: mess
  })
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.