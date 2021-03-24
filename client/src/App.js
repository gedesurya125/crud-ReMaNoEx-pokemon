import './App.css';
import {AddPokemon, AddElement} from './components/AddForm';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import React from 'react';
import {HomePage} from './components/HomePage';
const App = (props) =>{
  return(
    <Router>
      <Switch>
        <Route exact path="/" render={() => (
          <React.Fragment>
            <HomePage/>
          </React.Fragment>
        )}/>
        <Route exact path="/addPokemon" component={AddPokemon}/>
        <Route exact path="/addElement" component={AddElement}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  )
}

export default App;