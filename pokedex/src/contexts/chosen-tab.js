import { createContext } from "react";

const ChosenTabContext = createContext('/caught');

ChosenTabContext.displayName = 'Chosen Tab Context';

export default ChosenTabContext;
