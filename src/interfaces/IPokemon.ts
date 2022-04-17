export interface IPokemon {
  id: number;
  name: string;
  sprites: {
    back_default: string;
    front_default: string;
  };
  types: type[];
  favorite?: boolean;
}

interface type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
