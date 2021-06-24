import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';

export const POKEMONS_PER_PAGE = 10;
const START_PAGE = 1;

let currentPage = START_PAGE;

export const getCurrentPage = () => {
	return currentPage++;
};

export const AppRoute = {
  MAIN: '/',
  DETAIL: '/detail/:id',
  CAUGHT: '/caught'
};

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const getCatchDate = () => {
  const date = new Date();

  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`
};

export const noop = () => {};
export const history = createMemoryHistory();
const mockStore = configureStore();
export const testStore = mockStore({});
