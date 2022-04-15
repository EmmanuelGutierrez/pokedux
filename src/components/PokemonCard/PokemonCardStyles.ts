import { SxProps } from "@mui/material";

interface IPokemonCardStyle {
  PokemonCard: SxProps;
  "PokemonCard-title": SxProps;
  "PokemonCard-type": SxProps;
}

export const PokemonCardStyles: IPokemonCardStyle = {
  PokemonCard: {
    borderRadius: "20px",
  },
  "PokemonCard-title": {
    textAlign: "center",
    color: "#999",
  },
  "PokemonCard-type": {
    margin: " 0 2.5px",
    borderRadius: "18%",
    backgroundColor: "main",
  },
};
