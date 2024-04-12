import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./layout";

function App() {
  return (
    <React.Fragment>
      <Router>
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
