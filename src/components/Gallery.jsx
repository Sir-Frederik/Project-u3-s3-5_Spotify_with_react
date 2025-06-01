import { useEffect } from "react";
import { Col, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../redux/actions";
import { StarFill, Star } from "react-bootstrap-icons";

const Gallery = ({ title, query }) => {
  const dispatch = useDispatch();

  const favSongs = useSelector((state) => state.favourites.content);

  useEffect(() => {
    dispatch(fetchSongs("queen"));
    dispatch(fetchSongs("katyperry"));
    dispatch(fetchSongs("eminem"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <h2>{title}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
        {query.map((song) => (
          <Col className="text-center d-flex flex-column align-items-center" key={song.id}>
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
            <p>Track: "{song.title}"</p>
            <p>Artist: {song.artist.name}</p>
          </Col>
        ))}
      </div>
    </>
  );
};

export default Gallery;
