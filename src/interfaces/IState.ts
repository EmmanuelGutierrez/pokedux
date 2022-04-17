import { IPokemon } from "./IPokemon";

export interface IState {
  list: IPokemon[];
  error: string;
  loading: boolean;
}
