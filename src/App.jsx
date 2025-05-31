import { Container, Row } from "react-bootstrap";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
function App() {
  return (
    <>
      <BrowserRouter>
        <Container fluid>
          <Row>
            <Sidebar />
          </Row>
          <Player />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
