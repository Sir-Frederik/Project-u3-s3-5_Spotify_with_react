import { Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchEminemSongs, fetchKatySongs, fetchQueenSongs } from "../redux/actions";
import { useEffect } from "react";

const MainSection = () => {
  const dispatch = useDispatch();

  const queen = useSelector((state) => state.defaultSongs.content.queenSongs);
  const katy = useSelector((state) => state.defaultSongs.content.katyPerrySongs);
  const eminem = useSelector((state) => state.defaultSongs.content.eminemSongs);

  const queenSongs = queen.slice(0, 4);
  const katySongs = katy.slice(0, 4);
  const eminemSongs = eminem.slice(0, 4);

  useEffect(() => {
    dispatch(fetchQueenSongs("queen"));
    dispatch(fetchKatySongs("katyperry"));
    dispatch(fetchEminemSongs("eminem"));
  }, []);

  const handleClick = (data) => {
    dispatch({ type: "SELECT_SONG", payload: data });
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
        <Row>
          <Col className="col-10">
            <div id="rock">
              <h2>Rock Classics</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
                {queenSongs.map((song) => (
                  <Col className="text-center" key={song.id}>
                    <Image
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
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col-10">
            <div id="pop">
              <h2>Pop Culture</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
                {katySongs.map((song) => (
                  <Col className="text-center" key={song.id}>
                    <Image fluid src={song.album.cover_medium} alt="track" />
                    <p>Track: "{song.title}"</p>
                    <p>Artist: {song.artist.name}</p>
                  </Col>
                ))}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col-10">
            <div id="hiphop">
              <h2>#HipHop</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
                {eminemSongs.map((song) => (
                  <Col className="text-center" key={song.id}>
                    <Image fluid src={song.album.cover_medium} alt="track" />
                    <p>Track: "{song.title}"</p>
                    <p>Artist: {song.artist.name}</p>
                  </Col>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default MainSection;
