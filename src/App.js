import "./App.css";
import { Col, Container, Row } from "reactstrap";
import { Footer, Header } from "./components";
import {
  CartPage,
  HomePage,
  ProductPage,
  LoginPage,
  RegisterPage,
  ProfilePage,
  ShippingPage,
  NotFoundPage,
} from "./pages/";
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
                  <Route path="/login" exact component={LoginPage} />
                  <Route path="/register" exact component={RegisterPage} />
                  <Route path="/product/:id" exact component={ProductPage} />
                  <Route path="/cart/:id?" component={CartPage} />
                  <Route path="/profile" component={ProfilePage} />
                  <Route path="/shipping" component={ShippingPage} />
                  <Route path="*" component={NotFoundPage} />
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
