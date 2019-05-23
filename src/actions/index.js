import axios from "axios";
// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

// // our action creator will be a function that returns a function
// // the url to fetch characters from is `https://swapi.co/api/people/`
// // remember that now we have controll over our thunk-based action creator
export const getCharacters = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get("https://swapi.co/api/people")
    .then(({ data }) => {
      console.log(data)
      dispatch({
        type: SUCCESS,
        payload: data.results
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });
};
   
