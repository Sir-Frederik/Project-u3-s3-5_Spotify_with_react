import { useEffect } from "react";
import { Col, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchSongs } from "../redux/actions";

const Gallery = ({ title, query }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongs(query));
  }, []);

  const handleClick = (data) => {
    dispatch({ type: "SELECT_SONG", payload: data });
  };

  return (
    <>
      <h2>{title}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
        {query.map((song) => (
          <Col className="text-center" key={song.id}>
            <Image
              className="mt-2"
              fluid
              src={song.album.cover_medium}
              alt="track"
              onClick={() => {
                handleClick(song);
              }}
            />
            <p>Track: "{song.title}"</p>
            <p>Artist: {song.artist.name}</p>
          </Col>
        ))}
      </div>
    </>
  );
};

export default Gallery;
