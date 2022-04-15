import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/system";
import { IPokemon } from "../../interfaces/IPokemon";
import { PokemonCardStyles } from "./PokemonCardStyles";

interface IPokemonCardProps {
  pokemon: IPokemon;
}

const PokemonCard = (props: IPokemonCardProps) => {
  const { pokemon } = props;

  return (
    <Box component={Grid} item xs={12} sm={12} md={6} lg={3}>
      <Card sx={{ maxWidth: "300px", margin: "auto" }}>
        <FavoriteBorderIcon />
        <CardMedia
          sx={{ maxWidth: "100px", margin: "auto" }}
          component="img"
          src={pokemon.sprites.front_default}
          alt={pokemon.name || "pokemon"}
        />
        <CardContent>
          <Typography sx={PokemonCardStyles["PokemonCard-title"]}>
            {pokemon.name}
          </Typography>
          <Box>
            {pokemon.types.map((type) => (
              <Chip
                key={`${pokemon.id}-${type.type.name}`}
                sx={PokemonCardStyles["PokemonCard-type"]}
                label={type.type.name}
                color="primary"
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PokemonCard;
