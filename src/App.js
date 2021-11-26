import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Offerings from './components/Offerings/Offerings';
import MyOrders from './components/MyOrders/MyOrders';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import AddNewOffers from './components/AddNewOffers/AddNewOffers';
import OfferUpdateDelete from './components/OfferUpdateDelete/OfferUpdateDelete';
import OfferUpdate from './components/OfferUpdate/OfferUpdate';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import OrderUpdate from './components/OrderUpdate/OrderUpdate';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/offerings">
              <Offerings></Offerings>
            </Route>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/addNewOffers">
              <AddNewOffers></AddNewOffers>
            </PrivateRoute>
            <PrivateRoute path="/offerUpdateDelete">
              <OfferUpdateDelete></OfferUpdateDelete>
            </PrivateRoute>
            <PrivateRoute path="/offerUpdate/:id">
              <OfferUpdate></OfferUpdate>
            </PrivateRoute>
            <PrivateRoute path="/orderUpdate/:id">
              <OrderUpdate></OrderUpdate>
            </PrivateRoute>
            <PrivateRoute path="/placeOrder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
