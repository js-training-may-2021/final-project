import { createContext } from "react";

const d = new Date().toDateString();

const d2 = new Date(2019, 10, 28, 15, 20, 0, 0).toDateString();

const c = [
    { 
    isCaught: "10/12/2019", id: 76
  },
  { 
    isCaught: d, id: 80
  },
  { 
    isCaught: d2, id: 67
  },/*
      { 
    isCaught: "10/12/2019", id: 5
  },
  { 
    isCaught: "10/12/2019", id: 8
  },
  { 
    isCaught: "10/12/2019", id: 7
  },
      { 
    isCaught: "10/12/2019", id: 20
  },
  { 
    isCaught: "10/12/2019", id: 89
  },
  { 
    isCaught: "10/12/2019", id: 63
  },
      { 
    isCaught: "10/12/2019", id: 12
  },
  { 
    isCaught: "10/12/2019", id: 45
  },
  { 
    isCaught: "10/12/2019", id: 14
  },
      { 
    isCaught: "10/12/2019", id: 2
  },
  { 
    isCaught: "10/12/2019", id: 9
  },
  { 
    isCaught: "10/12/2019", id: 11
  },
  */
];

const CaughtPokemonsContext = createContext(c);

CaughtPokemonsContext.displayName = 'Caught Pokemons Context';

export default CaughtPokemonsContext;
