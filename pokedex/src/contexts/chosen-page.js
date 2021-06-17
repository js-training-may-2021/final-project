import { createContext } from "react";

const ChosenPageContext = createContext(1);

ChosenPageContext.displayName = 'Chosen Page Context';

export default ChosenPageContext;
