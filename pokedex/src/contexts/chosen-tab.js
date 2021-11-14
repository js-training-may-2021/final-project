import { createContext } from 'react';

const ChosenTabContext = createContext('/home');

/*const ChosenTabContext = createContext({
  tab: '/home',
  getTab() {
    return this.tab;
  },
  setTab(value) {
    this.tab = value;
  }
});*/

ChosenTabContext.displayName = 'Chosen Tab Context';

export default ChosenTabContext;
