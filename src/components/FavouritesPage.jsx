import { Col, Image, Row } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

const FavouritesPage = () => {
  const favSongs = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();

  const handleClick = (data) => {
    dispatch({ type: "SELECT_SONG", payload: data });
  };

  const handleFav = (song) => {
    const favSongIds = favSongs.map((obj) => obj.id);

    if (favSongIds.includes(song.id)) {
      dispatch({ type: "REMOVE_FROM_FAV", payload: song.id });
    } else {
      dispatch({ type: "ADD_TO_FAV", payload: song });
    }
  };

  return (
    <>
      <Col className="col-12 col-md-9 offset-md-3 mainPage">
        <Row>
          <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="col-10">
            <Row className="hipHopSection">
              {favSongs.map((song) => (
                <Col className="col-3 text-center d-flex flex-column align-items-center" key={song.id}>
                  <div className="position-relative imgContainer">
                    {favSongs.includes(song) ? (
                      <StarFill
                        className="star"
                        onClick={() => {
                          handleFav(song);
                        }}
                      />
                    ) : (
                      <Star
                        className="star"
                        onClick={() => {
                          handleFav(song);
                        }}
                      />
                    )}
                    <Image
                      className=""
                      fluid
                      src={song.album.cover_medium}
                      alt="track"
                      onClick={() => {
                        handleClick(song);
                      }}
                    />
                  </div>
                  <p>"{song.title}"</p>
                  <p> {song.artist.name}</p>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default FavouritesPage;
