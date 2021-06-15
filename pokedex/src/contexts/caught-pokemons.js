import { createContext } from "react";

const CaughtPokemonsContext = createContext(
[
    { 
    id: 3
  },
  { 
    id: 16
  },
  { 
    id: 17
  },
  ]
);

export default CaughtPokemonsContext;

export const CaughtPokemonsProvider = CaughtPokemonsContext.Provider;
export const CaughtPokemonsConsumer = CaughtPokemonsContext.Consumer;