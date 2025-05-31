import { Container, Row } from "react-bootstrap";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Container fluid>
          <Row>
            <Sidebar />
          </Row>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
