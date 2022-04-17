import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonList from "../../components/PokemonList";
import { Searcher } from "../../components/Searcher";
import { getPokemonsWhitDetails } from "../../redux/actions";
import { RootState } from "../../redux/store";

const Home = () => {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.list);
  /*   const getPokemonsCallback = useCallback(() => {
    getPokemons().then((res) => dispatch(setPokemons(res.results)));
  }, [dispatch]); */
  useEffect(() => {
    dispatch(getPokemonsWhitDetails());
  }, []); //TODO Verificar si esto esta bien

  return (
    <div className="Home">
      <Searcher />
      <PokemonList pokemons={list} />
    </div>
  );
};

export default Home;
