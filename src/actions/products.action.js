import {
  GET_PRODUCTS_SUCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_REQUEST
} from '../constants/action.constant.js';
import { getProducts } from '../services/products.service.js';

export const getProducts = () => async dispatch => {
  dispatch({ type: GET_PRODUCTS_REQUEST });
  const response = await getProducts();
  console.log(response);
  if (response) {
    dispatch({ type: GET_PRODUCTS_SUCESS, payload: response });
  }
  else
    dispatch({ type: GET_PRODUCTS_ERROR });
}