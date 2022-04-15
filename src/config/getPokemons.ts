import { IPokemonList } from "../interfaces/IPokemonList";
import { axiosInstance } from "./api";

interface ResPokeApi {
  count: number;
  next: string | null;
  prev: string | null;
  results: IPokemonList[];
}

export const getPokemons = (limit: number = 151) =>
  axiosInstance
    .get<ResPokeApi>(`/pokemon?limit=${limit}`)
    .then((res) => res.data);
