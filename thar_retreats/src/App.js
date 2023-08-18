import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import NavBar from './Components/Pages/navBar';
import Home from './Pages/Home'
// import Footer from './Components/Pages/footer';
import Login from './Pages/login';
import SignUp from './Pages/SignUp';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <Router>
{/* <NavBar /> */}
    <div className="App">

    <Switch>

    <Route path="/home" exact component={Home} />
    <Route path="/signUp" exact component={SignUp} />
    <Route path="/login" exact component={Login} />
    <Route path="/ContactUs" exact component={ContactUs} />
    <Route path="/" exact component={AboutUs} />

    </Switch>
    
    </div>
    {/* <Footer /> */}
    </Router>
  );
}

export default App;
