import "./App.css";
import { Col, Container, Row } from "reactstrap";
import { Footer, Header } from "./components";
import { HomePage } from "./pages/";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <Row>
            <Col>
              <HomePage />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
