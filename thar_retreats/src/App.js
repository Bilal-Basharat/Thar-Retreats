import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './Components/Pages/navBar';
import Home from './Pages/Home'
import Footer from './Components/Pages/footer';
function App() {
  return (
    <Router>
<NavBar />
    <div className="App">

    <Switch>

    <Route path="/" exact component={Home} />

    </Switch>
    
    </div>
    <Footer />
    </Router>
  );
}

export default App;
