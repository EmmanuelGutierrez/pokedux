import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setPokemons } from "../../actions";
import PokemonList from "../../components/PokemonList";
import { Searcher } from "../../components/Searcher";
import { getPokemons } from "../../config/getPokemons";
import { IPokemon } from "../../interfaces/IPokemon";
import { RootState } from "../../store";

const Home = () => {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.list);
  /*   const getPokemonsCallback = useCallback(() => {
    getPokemons().then((res) => dispatch(setPokemons(res.results)));
  }, [dispatch]); */
  useEffect(() => {
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
      })
      .catch((err) => dispatch(setError(err)));
  }, []); //TODO Verificar si esto esta bien

  return (
    <div className="Home">
      <Searcher />
      <PokemonList pokemons={list} />
    </div>
  );
};

export default Home;
