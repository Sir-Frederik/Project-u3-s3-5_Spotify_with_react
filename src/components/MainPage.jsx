import { Col, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import Gallery from "../components/Gallery";

const MainPage = () => {
  const queen = useSelector((state) => state.defaultSongs.content.queenSongs);
  const katy = useSelector((state) => state.defaultSongs.content.katyPerrySongs);
  const eminem = useSelector((state) => state.defaultSongs.content.eminemSongs);

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
              <Gallery title={"Rock Classics"} query={queen} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col-10">
            <div id="pop">
              <Gallery title={"Rock Classics"} query={katy} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col-10">
            <div id="hiphop" className="hipHopSection ">
              <Gallery title={"Rock Classics"} query={eminem} />
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default MainPage;
