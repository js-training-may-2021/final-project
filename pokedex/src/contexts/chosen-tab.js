import { createContext } from "react";

const ChosenTabContext = createContext('all');

export default ChosenTabContext;

export const ChosenTabProvider = ChosenTabContext.Provider;
export const ChosenTabConsumer = ChosenTabContext.Consumer;
