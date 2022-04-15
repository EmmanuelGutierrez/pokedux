import { AnyAction } from "redux";
import { ActionTypes } from "../actions/ActionTypes";
import { IState } from "../interfaces/IState";
const initialState: IState = {
  list: [],
  error: "",
};

export const pokemonReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.SET_POKEMONS:
      return { ...state, list: action.payload };

    case ActionTypes.SET_ERROR:
      return { ...state, error: action.payload };

    case ActionTypes.CLEAR_ERROR:
      return { ...state, error: "" };

    default:
      return state;
  }
};
