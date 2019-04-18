import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Login } from './components/Login';
import { NoMatch } from './components/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import './components/Login.css';
import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />

            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
