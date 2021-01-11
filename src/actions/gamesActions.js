import axios from 'axios';
import { popularGamesUrl } from '../api';

//Action Creator
//Add another arrow function, and add the dispatch in the second
//parenthesis, then add the async keyword before that parenthesis
export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesUrl());

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularData.data.results,
    },
  });
};
