import { Grid } from "@mui/material";
import React from "react";
import { IPokemon } from "../../interfaces/IPokemon";
import PokemonCard from "../PokemonCard";
import "./PokemonList.css";

interface IPokemonListProps {
  pokemons: IPokemon[];
}

const PokemonList = (props: IPokemonListProps) => {
  const { pokemons } = props;
  return (
    <Grid container spacing={3}>
      {pokemons.map((p) => (
        <PokemonCard key={`pokemon-${p.id}`} pokemon={p} />
      ))}
    </Grid>
  );
};

export default PokemonList;
