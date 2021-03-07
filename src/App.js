import "./App.css";
import { Col, Container, Row } from "reactstrap";
import { Footer, Header } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center">Welcome to Zenova Shop</h2>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
