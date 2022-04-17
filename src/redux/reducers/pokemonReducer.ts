import { AnyAction } from "redux";
import { ActionTypes } from "../actions/ActionTypes";
import { IState } from "../../interfaces/IState";
const initialState: IState = {
  list: [],
  error: "",
  loading: false,
};

export const pokemonReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.SET_POKEMONS:
      return { ...state, list: action.payload };

    case ActionTypes.SET_ERROR:
      return { ...state, error: action.payload };

    case ActionTypes.CLEAR_ERROR:
      return { ...state, error: "" };

    case ActionTypes.TOGGLE_LOADER:
      return { ...state, loading: !state.loading };
    case ActionTypes.ADD_FAVORITE:
      const newPokemonList = [...state.list];
      const currentPokemonIndex = newPokemonList.findIndex(
        (elem) => elem.id === action.payload
      );
      if (currentPokemonIndex >= 0) {
        newPokemonList[currentPokemonIndex].favorite =
          !newPokemonList[currentPokemonIndex].favorite;
      }
      return { ...state, list: newPokemonList };

    default:
      return state;
  }
};
