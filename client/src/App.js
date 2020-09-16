import React from 'react';
import './App.css';
import AddPeople from "./components/AddPeople";
import ListPeople from "./components/ListPeople";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
        <Router>
            <Nav />
            <Switch>
                <Route path='/' component={Home} exact></Route>
                <Route path='/List' component={ListPeople} exact></Route>
                <Route path='/Add' component={AddPeople} exact></Route>
            </Switch>
        </Router>
    </div>    
  );
}

const Home = () => (
  <div>
    <br/><br/><br/>
    <h1>ΚΑΛΩΣ ΟΡΙΣΑΤΕ!!!</h1>
  </div>
);

export default App;
