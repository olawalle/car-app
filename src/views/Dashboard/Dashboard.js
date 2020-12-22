import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Dashboard.scss";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import DashboardHome from "./Pages/DashHome/DashboardHome";
import Trips from "./Pages/Trips/Trips";
import Payment from "./Pages/Payment/Payment";
import MyAccount from "./Pages/MyAccount/MyAccount";

import logo from "../../assets/images/logoIcon.svg";
import Menuicon from "../../components/MenuIcon/Menuicon";

export default function Dashboard() {
  let match = useRouteMatch();

  return (
    <div className='dashboard'>
      <Sidebar />
      <div className='dashbody'>
        <div className='mobile-nav'>
          <img src={logo} alt='' />
          <Menuicon />
        </div>
        <HashRouter>
          <Switch>
            <Route exact path={`${match.path}/trips`}>
              <Trips />
            </Route>
            <Route exact path={`${match.path}/payment`}>
              <Payment />
            </Route>
            <Route exact path={`${match.path}/account`}>
              <MyAccount />
            </Route>
            <Route exact path={`${match.path}`}>
              <DashboardHome />
            </Route>
          </Switch>
        </HashRouter>
      </div>
    </div>
  );
}
