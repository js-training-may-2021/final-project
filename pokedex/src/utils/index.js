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
  const pokemon = caughtArray.filter((item) => item.id === id);
  if (pokemon.length > 0) {
    return pokemon[0].isCaught;
  } else return 'нет';
};

export const getPokemonTitle = (id, data) => {
  const pokemon = data.filter((item) => item.id === id);
  return pokemon[0].name;
};

export const checkStatus = (pokemon, caughtArray) => {
  const filtered =  caughtArray.filter((item) => item.id === pokemon.id);
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