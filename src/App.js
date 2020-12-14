import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import Login from "./views/Auth/Login";
import Signup from "./views/Auth/Signup";
import Dashboard from "./views/Dashboard/Dashboard";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/Signup'>
            <Signup />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
