import { SET_EMINEM_SONGS, SET_KATY_SONGS, SET_QUEEN_SONGS } from "../actions";

const initialState = {
  content: {
    queenSongs: [],
    katyPerrySongs: [],
    eminemSongs: [],
  },
};

const fetchedSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUEEN_SONGS:
      return {
        ...state,
        content: {
          ...state.content,
          queenSongs: action.payload,
        },
      };
    case SET_EMINEM_SONGS:
      return {
        ...state,
        content: {
          ...state.content,
          eminemSongs: action.payload,
        },
      };
    case SET_KATY_SONGS:
      return {
        ...state,
        content: {
          ...state.content,
          katyPerrySongs: action.payload,
        },
      };
    default:
      return state;
  }
};

export default fetchedSongsReducer;
