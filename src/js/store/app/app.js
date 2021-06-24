const initialState = {
	isLoading: false,
	errorMessage: null,
};

const ActionType = {
	CHANGE_LOADING_STATUS: 'CHANGE_LOADING_STATUS',
	CHANGE_ERROR_MESSAGE: 'CHANGE_ERROR_MESSAGE',
};

const ActionCreator = {
  changeLoadingStatus: isLoading => {
    return {
      type: ActionType.CHANGE_LOADING_STATUS,
      payload: isLoading,
    };
  },

  changeErrorMessage: message => {
    return {
      type: ActionType.CHANGE_ERROR_MESSAGE,
      payload: message,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {      
		case ActionType.CHANGE_LOADING_STATUS:
			return {
				...state,
				isLoading: action.payload,
			};
      
		case ActionType.CHANGE_ERROR_MESSAGE:
			return {
				...state,
				errorMessage: action.payload,
			};
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
