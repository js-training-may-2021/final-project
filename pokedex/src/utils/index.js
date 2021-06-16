export const makeClassList = (elem, chosen) => {
  if (elem === chosen) {
    return 'active to-' + elem;
  } else {
    return 'to-' + elem;
  };
};

export const makeArrayFromValue = (value) => {
  let arr = Array.apply(null, {length: +value}).map(Number.call, Number);
  arr.push(arr.length);
  arr = arr.slice(1);
  return arr;
};

export const getPokemonStatus = (id, caughtArray) => {
  const pokemon = caughtArray.find((item) => parseInt(item.id, 10) === parseInt(id, 10));
  return pokemon ? pokemon.isCaught : 'нет';
};

export const getPokemonTitle = (id, data) => {
  const pokemon = data.find((item) => parseInt(item.id, 10) === parseInt(id, 10));
  return pokemon ? pokemon.name : '';
};

export const checkStatus = (id, caughtArray) => {
  const filtered =  caughtArray.filter((item) => parseInt(item.id, 10) === parseInt(id, 10));
  return filtered.length > 0 ? filtered[0].isCaught : 'null';
};

export const getPortion = (data, chosenPage) => {
  const chosenPageNumber = +chosenPage - 1;
  const portionsQuantity = Math.ceil(data.length / 12);
  const startPoint = portionsQuantity - chosenPageNumber;
  let endPoint = startPoint + 1;
  const result = data.slice((startPoint - 1) * 12, (endPoint - 1) * 12);
  return result;
};

export const findCommonItems = (array1, array2) => {
  const ids = array2.map((item) => parseInt(item.id, 10));
  let filtered = array1.filter((item) => ids.includes(parseInt(item.id, 10)));
  return filtered;
};