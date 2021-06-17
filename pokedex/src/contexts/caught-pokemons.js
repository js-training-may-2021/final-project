import { createContext } from "react";

const c = [
    { 
    isCatched: "10/12/2019", id: 25
  },
  { 
    isCatched: "10/12/2019", id: 80
  },
  { 
    isCatched: "10/12/2019", id: 67
  },
      { 
    isCatched: "10/12/2019", id: 5
  },
  { 
    isCatched: "10/12/2019", id: 8
  },
  { 
    isCatched: "10/12/2019", id: 7
  },
      { 
    isCatched: "10/12/2019", id: 20
  },
  { 
    isCatched: "10/12/2019", id: 89
  },
  { 
    isCatched: "10/12/2019", id: 63
  },
      { 
    isCatched: "10/12/2019", id: 12
  },
  { 
    isCatched: "10/12/2019", id: 45
  },
  { 
    isCatched: "10/12/2019", id: 14
  },
      { 
    isCatched: "10/12/2019", id: 2
  },
  { 
    isCatched: "10/12/2019", id: 9
  },
  { 
    isCatched: "10/12/2019", id: 11
  },
];

const CaughtPokemonsContext = createContext(c);

CaughtPokemonsContext.displayName = 'Caught Pokemons Context';

export default CaughtPokemonsContext;
