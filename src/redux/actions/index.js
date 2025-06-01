export const SET_QUEEN_SONGS = "SET_QUEEN_SONGS";
export const SET_KATY_SONGS = "SET_KATY_SONGS";
export const SET_EMINEM_SONGS = "SET_EMINEM_SONGS";
export const SELECT_SONG = "SELECT_SONG";

export const setQueenSongAction = (data) => ({ type: SET_QUEEN_SONGS, payload: data });
export const setKatySongAction = (data) => ({ type: SET_KATY_SONGS, payload: data });
export const setEminemSongAction = (data) => ({ type: SET_EMINEM_SONGS, payload: data });

export const selectAction = (data) => ({ type: SELECT_SONG, payload: data });

export const fetchQueenSongs = (artistName) => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);

      if (resp.ok) {
        let { data } = await resp.json();
        dispatch(setQueenSongAction(data));
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchKatySongs = (artistName) => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);

      if (resp.ok) {
        let { data } = await resp.json();
        dispatch(setKatySongAction(data));
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchEminemSongs = (artistName) => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);

      if (resp.ok) {
        let { data } = await resp.json();
        dispatch(setEminemSongAction(data));
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
