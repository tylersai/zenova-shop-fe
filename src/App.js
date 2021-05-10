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
  PaymentPage,
  PlaceOrderPage,
  OrderDetailPage,
  ProductListPage,
  ProductInfoPage,
  OrderListPage,
  EditUserPage,
  ChangePasswordPage,
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
                  <Route path="/edit-profile" exact component={EditUserPage} />
                  <Route
                    path="/change-password"
                    exact
                    component={ChangePasswordPage}
                  />
                  <Route
                    path="/save/product/:id?"
                    component={ProductInfoPage}
                  />
                  <Route path="/product/:id" exact component={ProductPage} />
                  <Route path="/products" exact component={ProductListPage} />
                  <Route path="/order/:id" exact component={OrderDetailPage} />
                  <Route path="/orders" exact component={OrderListPage} />
                  <Route path="/cart/:id?" component={CartPage} />
                  <Route path="/profile" exact component={ProfilePage} />
                  <Route path="/shipping" exact component={ShippingPage} />
                  <Route path="/payment" exact component={PaymentPage} />
                  <Route path="/place-order" exact component={PlaceOrderPage} />
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
