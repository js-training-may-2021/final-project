import { createContext } from "react";

const ChosenCardContext = createContext();

export default ChosenCardContext;

export const ChosenCardProvider = ChosenCardContext.Provider;
export const ChosenCardConsumer = ChosenCardContext.Consumer;
