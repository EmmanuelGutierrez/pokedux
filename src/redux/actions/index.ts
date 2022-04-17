import axios from "axios";
import { Dispatch } from "redux";
import { getPokemons } from "../../config/getPokemons";
import { IPokemon } from "../../interfaces/IPokemon";
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

export const toggleLoader = () => ({
  type: ActionTypes.TOGGLE_LOADER,
});

export const getPokemonsWhitDetails = () => (dispatch: Dispatch) => {
  dispatch(toggleLoader());
  getPokemons()
    .then((res) => {
      const pokemonList = res.results;
      return Promise.all(pokemonList.map((pokemon) => axios.get(pokemon.url)));
    })
    .then((pokemonsResponse) => {
      const pokemonsData = pokemonsResponse.map((r) => r.data as IPokemon);
      dispatch(setPokemons(pokemonsData));
      dispatch(toggleLoader());
    })
    .catch((err) => dispatch(setError(err)));
};

export const addFavorite = (payload: number) => ({
  type: ActionTypes.ADD_FAVORITE,
  payload,
});

export const removeFavorite = (payload: IPokemon) => ({
  type: ActionTypes.REMOVE_FAVORITE,
  payload,
});
