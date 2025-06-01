import { Container, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";
import Player from "./components/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavouritesPage from "./components/FavouritesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container fluid>
          <Row>
            <Sidebar />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/favourites" element={<FavouritesPage />} />
            </Routes>
          </Row>
          <Player />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
