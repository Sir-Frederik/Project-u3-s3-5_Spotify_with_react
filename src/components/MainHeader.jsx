import { Col, Container, Row } from "react-bootstrap";

const MainHeader = ({ children }) => {
  return (
    <Container fluid className="fixed-top MainHeader">
      <Row>
        <Col className="col-12 col-md-9 offset-md-3">
          {" "}
          {/* Sposta offset e col qui */}
          <Row>
            <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
              <a href="#">TRENDING</a>
              <a href="#">PODCAST</a>
              <a href="#">MOODS AND GENRES</a>
              <a href="#">NEW RELEASES</a>
              <a href="#">DISCOVER</a>
            </Col>
          </Row>
        </Col>
      </Row>
      {children}
    </Container>
  );
};

export default MainHeader;
