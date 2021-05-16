import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.scss';
import Login from './pages/login';
import AdressBar from './components/AdressBar';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={AdressBar} />
      </Switch>
    </Router>
  );
}
