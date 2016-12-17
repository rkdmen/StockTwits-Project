import axios from 'axios';
import * as type from '../constants/ActionTypes';

export function addStock (symbol){

  const request = axios.get('api/stock/', {params: { symbol} });

  return {
    type: type.ADD_STOCK_WATCHLIST,
    payload: request
  }
}

export function addStockToJSON (symbol){
  const request = axios.post('api/dataJSON/', {symbol} );
  return {
    type: type.ADD_STOCK_JSON,
    payload: request
  }
}

export function getStockSymbol(){

}

