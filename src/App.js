import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import styled from "styled-components";
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase"
import Login from './components/Login';

function App () {
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>

        </AppLoadingContent>
      </AppLoading>
    )
  }
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>  
          <Header />
          <AppBody >
            <Sidebar />
            <Switch>
              <Route path="/" exact>
                <Chat />
              </Route>
            </Switch>
            </AppBody>
          </>
        )}

      </Router>
    </div>
  );
}


export default App;

const AppLoading = styled.div``;
const AppLoadingContent = styled.div``;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;