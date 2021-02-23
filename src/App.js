import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import styled from "styled-components";
import Sidebar from './components/Sidebar';

function App () {
  return (
    <div className="App">
      <Router>
        <>  
        <Header />
        <AppBody >
          <Sidebar />
          <Switch>
            <Route path="/" exact>
              { /* Chat */ }
            </Route>
          </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div``;