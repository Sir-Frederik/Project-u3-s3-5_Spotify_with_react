import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../redux/actions";
import MainCard from "./MainCard";

const Gallery = ({ title, query, artistArr }) => {
  const dispatch = useDispatch();
  const favSongs = useSelector((state) => state.favourites.content);

  useEffect(() => {
    dispatch(fetchSongs(query));
  }, []);

  const handleClick = (song) => {
    dispatch({ type: "SELECT_SONG", payload: song });
  };

  const handleFav = (song) => {
    const isFav = favSongs.some((obj) => obj.id === song.id);
    dispatch({
      type: isFav ? "REMOVE_FROM_FAV" : "ADD_TO_FAV",
      payload: isFav ? song.id : song,
    });
  };

  return (
    <>
      <h2>{title}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
        {artistArr.map((song) => (
          <MainCard
            key={song.id}
            song={song}
            isFavourite={favSongs.some((obj) => obj.id === song.id)}
            onToggleFavourite={handleFav}
            onSelectSong={handleClick}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
