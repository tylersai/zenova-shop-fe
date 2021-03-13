import "./App.css";
import { Col, Container, Row } from "reactstrap";
import { Footer, Header } from "./components";
import { HomePage, ProductPage } from "./pages/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Row>
              <Col>
                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/product/:id" exact component={ProductPage} />
                  <Route
                    path="*"
                    component={() => (
                      <h3 className="text-center my-4">NOT FOUND</h3>
                    )}
                  />
                </Switch>
              </Col>
            </Row>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
