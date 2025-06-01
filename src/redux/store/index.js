import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchedSongsReducer from "../reducers/fetchedSongsReducer";
import selectedSongReducer from "../reducers/selectedSongReducer";

const rootReducer = combineReducers({
  defaultSongs: fetchedSongsReducer,
  selectedSong: selectedSongReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
