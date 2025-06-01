import { Col, Container, Image, Row } from "react-bootstrap";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";
import { useSelector } from "react-redux";

const Player = () => {
  const selected = useSelector((state) => state.selectedSong.content);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className={`h-100 ${selected && "justify-content-end"}`}>
        <Col className={`col-lg-10 ${!selected && "offset-lg-2"}`}>
          <Row className={`h-100 align-items-center ${selected ? "justify-content-start" : "justify-content-center"}`}>
            {selected && (
              <Col className="col-3 col-md-4 text-white offset-lg-1">
                <div className="d-flex">
                  <Image fluid src={selected.album.cover_small} />
                  <div className="d-flex flex-column ms-2 d-none d-md-inline ">
                    <p>{selected.title}</p>
                    <p className="fst-italic">{selected.artist.name}</p>
                  </div>
                </div>
              </Col>
            )}
            <Col className="col-9 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#">
                  <Image src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <Image src={prev} alt="prev" />
                </a>
                <a href="#">
                  <Image src={play} alt="play" />
                </a>
                <a href="#">
                  <Image src={next} alt="next" />
                </a>
                <a href="#">
                  <Image src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
