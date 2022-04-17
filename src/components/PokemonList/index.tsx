import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { IPokemon } from "../../interfaces/IPokemon";
import { RootState } from "../../redux/store";
import { Loader } from "../Loader";
import PokemonCard from "../PokemonCard";
import "./PokemonList.css";

interface IPokemonListProps {
  pokemons: IPokemon[];
}
const PokemonList = (props: IPokemonListProps) => {
  const { pokemons } = props;

  const totalLoaders = Array(12).fill("");
  const loading = useSelector((state: RootState) => state.loading);
  return (
    <Grid container spacing={3}>
      {loading
        ? totalLoaders.map((a: any, index: number) => <Loader key={index} />)
        : pokemons.map((p) => (
            <PokemonCard key={`pokemon-${p.id}`} pokemon={p} />
          ))}
    </Grid>
  );
};

export default PokemonList;
