import { Col, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import Gallery from "../components/Gallery";
import MainCard from "./MainCard";
import MainHeader from "./MainHeader";

const MainPage = () => {
  const queen = useSelector((state) => state.defaultSongs.content.queenSongs);
  const katy = useSelector((state) => state.defaultSongs.content.katyPerrySongs);
  const eminem = useSelector((state) => state.defaultSongs.content.eminemSongs);

  return (
    <>
      <Col className="col-12 col-md-9 offset-md-3 mainPage">
        <Row>
          <Col>
            <MainHeader />
          </Col>
        </Row>
        <Row>
          <Col className="col-10">
            <div id="rock">
              <Gallery title={"Rock Classics"} query={"queen"} artistArr={queen} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col-10">
            <div id="pop">
              <Gallery title={"Pop Culture"} query={"katyperry"} artistArr={katy} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col-10">
            <div id="hiphop" className="hipHopSection ">
              <Gallery title={"#HipHop"} query={"eminem"} artistArr={eminem} />
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default MainPage;
