import { Col, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import Gallery from "../components/Gallery";
import MainHeader from "./MainHeader";

const MainPage = () => {
  const queen = useSelector((state) => state.defaultSongs.content.queenSongs);
  const zecchino = useSelector((state) => state.defaultSongs.content.zecchinoSongs);
  const katy = useSelector((state) => state.defaultSongs.content.katyPerrySongs);
  const eminem = useSelector((state) => state.defaultSongs.content.eminemSongs);

  return (
    <>
      <MainHeader />
      <Col className="col-12 col-md-9 offset-md-3 mainPage">
        <Row>
          <Col className="col-10">
            <div id="rock">
              <Gallery title={"Rock Classics"} query={"zecchinodoro"} artistArr={zecchino} />
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

        <Row>
          <Col className="col-10">
            <div id="hiphop" className="hipHopSection ">
              <Gallery title={"Music for children"} query={"queen"} artistArr={queen} />
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default MainPage;
