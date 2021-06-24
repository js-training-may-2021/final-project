export const addToBackpack = obj => ({
  type: 'ADD_TO_BP',
  payload: obj,
});

export const removeFromBackpack = id => ({
  type: 'REMOVE_FROM_BP',
  payload: id,
});
