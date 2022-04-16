// rxreducer

import {
  STOCK_EDIT_FAILED,
  STOCK_EDIT_FETCHING,
  STOCK_EDIT_SUCCESS,
} from "../Constants";
import { Product } from "../types/product.type";

export interface StockEditState {
  isFetching: boolean;
  isError: boolean;
  result: Product | null;
}
const initialState: StockEditState = {
  isFetching: false,
  isError: false,
  result: null,
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case STOCK_EDIT_FETCHING:
      return { ...state, isFetching: true, isError: false, result: null };
    case STOCK_EDIT_SUCCESS:
      return { ...state, isFetching: false, isError: false, result: payload };
    case STOCK_EDIT_FAILED:
      return { ...state, isFetching: false, isError: true, result: null };
    default:
      return state;
  }
};
