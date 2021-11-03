import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import Predict from "./pages/Predict";
import ListHistory from "./pages/History";
import MainInform from "./pages/DetailPredict";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/history">
              <ListHistory />
            </Route>
            <Route path="/:id">
              <MainInform />
            </Route>
            <Route path="/">
              <Predict />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
