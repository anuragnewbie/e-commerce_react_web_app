import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./layout";
import Navbar from '../src/app/components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route
            path="/"
            name="Layouts"
            render={(props) => <Layout {...props} />}
          />
        </Switch>

      </Router>
    </React.Fragment>
  );
}

export default App;
