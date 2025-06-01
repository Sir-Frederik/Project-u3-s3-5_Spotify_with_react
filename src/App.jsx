import { Container, Row } from "react-bootstrap";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import MainPage from "./components/MainPage";
function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <aside>
            <Sidebar />
          </aside>
          <main>
            <MainPage />
          </main>
        </Row>
        <Player />
      </Container>
    </>
  );
}

export default App;
