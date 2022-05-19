import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Buttons from "./examples/Buttons";
import AllyForm from "./examples/ally";
import Custom from "./examples/custom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Buttons</Link>
          </li>
          <li>
            <Link to="/ally">Accessibility attributes</Link>
          </li>
          <li>
            <Link to="/custom">Custom components + aria attributes</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Buttons />
          </Route>
          <Route path="/ally">
            <AllyForm />
          </Route>
          <Route path="/custom">
            <Custom />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
