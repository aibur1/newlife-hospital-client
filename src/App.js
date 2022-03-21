import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home/Home';
import Navigation from './views/Shared/Navigation/Navigation';
import Services from './views/Services/Services';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Login from './views/Login/Login/Login';
import Register from './views/Login/Register/Register';
import Footer from './views/Shared/Footer/Footer';
import AuthProvider from './views/contexts/AuthProvider/AuthProvider';
import PrivateRoute from './views/Login/PrivateRoute/PrivateRoute';
import Dashboard from './views/Dashboard/Dashboard';
import Booking from './views/Booking/Booking';





function App() {
  return (
    <div className="App">
     
     <AuthProvider>
     <Router>
    <Navigation/>
   

      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route exact path="/home">
        <Home/>
        </Route>
        <Route exact path="/services">
        <Services/>
        </Route>
        <Route exact path="/about">
        <About />
        </Route>
        <Route exact path="/contact">
        <Contact />
        </Route>
        <Route exact path="/login">
        <Login />
        </Route>
        <Route exact path="/register">
        <Register />
        </Route>
        <Route exact path="/booking/:serviceId">
        <Booking />
        </Route>
        <Route exact path="/dashboard">
        <Dashboard />
        </Route>
      </Switch>

    <Footer/>
    </Router>
     </AuthProvider>
      </div>
  );
}

export default App;
