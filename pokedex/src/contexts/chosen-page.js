import { createContext } from "react";

const ChosenPageContext = createContext(1);

export default ChosenPageContext;

export const ChosenPageProvider = ChosenPageContext.Provider;
export const ChosenPageConsumer = ChosenPageContext.Consumer;
