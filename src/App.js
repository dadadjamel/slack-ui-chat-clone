import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Chat from './Chat';
import Login from './Login';
import { useStatevalue } from './StateProvider';

function App() {
  const [ {user} , dispatch] = useStatevalue()
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login/>
        ) : (
            <>
              <Header />
              <div className="app__body" >
                <Sidebar />
                <Switch>
                  <Route path="/room/:roomId">
                    <Chat />
                  </Route>
                  <Route path="/" >
                    <p>Welcome</p>
                  </Route>
                </Switch>

              </div>
            </>
          )}
      </Router>
    </div>
  );
}

export default App;
