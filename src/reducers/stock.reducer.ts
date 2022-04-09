// rxreducer

import {
  STOCK_CLEAR,
  STOCK_FAILED,
  STOCK_FETCHING,
  STOCK_SUCCESS,
} from "../Constants";

export interface StockState {
  isFetching: boolean;
  isError: boolean;
  result: any[];
}
const initialState: StockState = {
  isFetching: false,
  isError: false,
  result: [],
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case STOCK_FETCHING:
      return { ...state, isFetching: true, isError: false, result: [] };
    case STOCK_SUCCESS:
      return { ...state, isFetching: false, isError: false, result: payload };
    case STOCK_FAILED:
      return { ...state, isFetching: false, isError: true, result: [] };
    case STOCK_CLEAR:
      return { ...state, isFetching: false, isError: true, result: [] };

    default:
      return state;
  }
};
