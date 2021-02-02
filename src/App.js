import logo from "./logo.svg";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import Login from "./views/Auth/Login";
import Signup from "./views/Auth/Signup";
import Dashboard from "./views/Dashboard/Dashboard";
import axios from 'axios';
import UserProvider from "./providers/UserProvider";

axios.defaults.baseURL = process.env.REACT_APP_API;

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
