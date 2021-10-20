
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import Register from './components/Register/Register';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Notfound from './components/NotFound/Notfound';
import Details from './components/Details/Details';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MainServices from './components/MainServices/MainServices';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <PrivateRoute path="/service/:serviceId">
            <Details />
          </PrivateRoute>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <PrivateRoute path="/services">
            <MainServices />
          </PrivateRoute>

          <Route path="/singleService/:serviceId">
            <Details />
          </Route>

          <PrivateRoute path="/contact">
            <Contact />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="*">
            <Notfound />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
