import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react'
import Main from './Pages/Homes/HomeIndex';
import About from './Components/Home/About';
import Education from './Components/Home/Education';
import Skills from './Components/Home/Skills';
import Interest from './Components/Home/Interest';
import Awards from './Components/Home/Awards';
import Experience from './Components/Home/Experience';
import Sidebar from './Components/Sidebar/Sidebar'
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Sidebar />
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/About' exact component={About} />
            <Route path='/Experience' exact component={Experience} />
            <Route path='/Education' exact component={Education} />
            <Route path='/Skills' exact component={Skills} />
            <Route path='/Interest' exact component={Interest} />
            <Route path='/Awards' exact component={Awards} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
