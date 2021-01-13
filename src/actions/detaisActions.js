import axios from 'axios';
import { gameDetailsURL, gameScreenShotURL } from '../api';

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id));
  const screenShotData = await axios.get(gameScreenShotURL(id));

  dispatch({
    type: 'LOADING_DETAIL',
  });

  dispatch({
    type: 'GET_DETAIL',
    payload: {
      data: detailData.data,
      screen: screenShotData.data,
    },
  });
};
