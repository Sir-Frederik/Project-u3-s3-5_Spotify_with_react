const initialState = {
  content: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAV":
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case "REMOVE_FROM_FAV":
      return {
        ...state,
        content: state.content.filter((song) => song.id !== action.payload),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
