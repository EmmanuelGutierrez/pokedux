import { IPokemon } from "../interfaces/IPokemon";
import { ActionTypes } from "./ActionTypes";

export const setPokemons = (payload: IPokemon[]) => ({
  type: ActionTypes.SET_POKEMONS,
  payload,
});

export const setError = (payload: Error) => ({
  type: ActionTypes.SET_ERROR,
  payload,
});

export const clearError = () => ({
  type: ActionTypes.CLEAR_ERROR,
});
