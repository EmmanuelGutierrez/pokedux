import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getPokemons } from "../../config/getPokemons";
import { IPokemon } from "../../interfaces/IPokemon";
import { setError, toggleLoader } from "./ui";

interface IPokemonState {
  list: IPokemon[];
}

const initialState: IPokemonState = { list: [] };

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemons",
  async (_, { dispatch }) => {
    dispatch(toggleLoader());
    getPokemons()
      .then((res) => {
        const pokemonList = res.results;
        return Promise.all(
          pokemonList.map((pokemon) => axios.get(pokemon.url))
        );
      })
      .then((pokemonsResponse) => {
        const pokemonsData = pokemonsResponse.map((r) => r.data as IPokemon);
        dispatch(setPokemons(pokemonsData));
        dispatch(toggleLoader());
      })
      .catch((err) => dispatch(setError(err)));
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.list = action.payload;
    },
    addFavorite: (state, action) => {
      const currentPokemonIndex = state.list.findIndex(
        (elem) => elem.id === action.payload
      );
      if (currentPokemonIndex >= 0) {
        state.list[currentPokemonIndex].favorite =
          !state.list[currentPokemonIndex].favorite;
      }
    },
  },
});

export const { setPokemons, addFavorite } = pokemonSlice.actions;

export const pokemonReducer = pokemonSlice.reducer;
