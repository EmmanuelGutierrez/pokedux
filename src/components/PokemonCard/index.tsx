import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Fade,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/system";
import { IPokemon } from "../../interfaces/IPokemon";
import { PokemonCardStyles } from "./PokemonCardStyles";
import { typeColorFun } from "../../utils/typesColors";
import { firstWordUp } from "../../utils/firstWordUp";
import { Favorite } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../redux/actions";
import backgroudPokemon from "../../static/images/background2.jpg";
interface IPokemonCardProps {
  pokemon: IPokemon;
}

const PokemonCard = (props: IPokemonCardProps) => {
  const { pokemon } = props;
  const dispatch = useDispatch();

  const handleFavorite = () => dispatch(addFavorite(pokemon.id));

  return (
    <Box component={Grid} item xs={12} sm={12} md={6} lg={3}>
      <Card sx={{ maxWidth: "300px", margin: "auto", minHeight: 237 }}>
        <Tooltip title="Favorite" TransitionComponent={Fade}>
          <IconButton onClick={handleFavorite}>
            {pokemon.favorite ? (
              <Favorite color="primary" />
            ) : (
              <FavoriteBorderIcon color="primary" />
            )}
          </IconButton>
        </Tooltip>
        <Box
          sx={{
            backgroundImage: `url(${backgroudPokemon})`,
            backgroundSize: "cover",
            backgroundPositionY: "60%",
            height: 110,
          }}
        >
          <CardMedia
            sx={{ maxWidth: "100px", margin: "auto" }}
            component="img"
            src={pokemon.sprites.front_default}
            alt={pokemon.name || "pokemon"}
          />
        </Box>
        <CardContent>
          <Divider />
          <Typography sx={PokemonCardStyles["PokemonCard-title"]}>
            {firstWordUp(pokemon.name)}
          </Typography>
          <Box>
            {pokemon.types.map((type) => (
              <Chip
                key={`${pokemon.id}-${type.type.name}`}
                sx={{
                  backgroundColor: typeColorFun(type.type.name),
                  margin: " 0 2.5px",
                  borderRadius: "18%",
                  color: "white",
                }}
                label={firstWordUp(type.type.name)}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PokemonCard;
