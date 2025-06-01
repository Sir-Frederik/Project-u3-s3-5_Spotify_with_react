import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchedSongsReducer from "../reducers/fetchedSongsReducer";
import selectedSongReducer from "../reducers/selectedSongReducer";
import favouritesReducer from "../reducers/favouritesReducer";

const rootReducer = combineReducers({
  defaultSongs: fetchedSongsReducer,
  selectedSong: selectedSongReducer,
  favourites: favouritesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
