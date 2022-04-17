/* export enum typesColors {
  "grass" = "#78c850",
  "bug" = "#A8b820",
  "dragon" = "#7038F8",
  "electric" = "#F8D030",
  "fighting" = "#7d3929",
  "fire" = "#c92100",
  "flying" = "#5e74d6",
  "ghost" = "#705898",
  "ground" = "#d0ae65",
  "ice" = "#71d2f6",
  "normal" = "#c4c1b9",
  "poison" = "#803582",
  "psychic" = "#d75581",
  "rock" = "#9a803b",
  "water" = "#4696e4",
} */

export const typeColorFun = (typecolor: string) => {
  switch (typecolor) {
    case "grass":
      return "#78c850";
    case "bug":
      return "#A8b820";
    case "dragon":
      return "#7038F8";
    case "electric":
      return "#F8D030";
    case "fighting":
      return "#7d3929";
    case "fire":
      return "#c92100";
    case "flying":
      return "#5e74d6";
    case "ghost":
      return "#705898";
    case "ground":
      return "#d0ae65";
    case "ice":
      return "#71d2f6";
    case "normal":
      return "#c4c1b9";
    case "poison":
      return "#803582";
    case "psychic":
      return "#d75581";
    case "rock":
      return "#9a803b";
    case "water":
      return "#4696e4";
    case "fairy":
      return "#efb5bb";

    default:
      return "#999";
  }
};
