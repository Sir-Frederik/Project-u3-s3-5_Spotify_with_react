import { Container, Row } from "react-bootstrap";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import MainPage from "./components/MainPage";
import Gallery from "./components/Gallery";
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
