import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MainCard from "./MainCard";
import MainHeader from "./MainHeader";

const FavouritesPage = () => {
  const favSongs = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();

  const onSelectSong = (song) => {
    dispatch({ type: "SELECT_SONG", payload: song });
  };

  const onToggleFavourite = (song) => {
    const favSongIds = favSongs.map((obj) => obj.id);
    if (favSongIds.includes(song.id)) {
      dispatch({ type: "REMOVE_FROM_FAV", payload: song.id });
    } else {
      dispatch({ type: "ADD_TO_FAV", payload: song });
    }
  };

  return (
    <>
      <MainHeader />
      <Col className="col-12 col-md-9 offset-md-3 mainPage">
        <Row className="mt-5 hipHopSection">
          {favSongs.map((song) => (
            <MainCard key={song.id} song={song} isFavourite={true} onToggleFavourite={onToggleFavourite} onSelectSong={onSelectSong} />
          ))}
        </Row>
      </Col>
    </>
  );
};

export default FavouritesPage;
