import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { LinkContents } from "../Sidebar/Sidebar";
import "./Menuicon.scss";

export default withRouter(function Menuicon({ white, history }) {
  const [open, setOpen] = useState(false);
  const closeLinks = () => {
    setOpen(false);
  };
  return (
    <div className='menu-icon'>
      <div
        id='nav-icon3'
        className={`${open ? "open" : ""} ${white ? "white" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {open && !white && (
        <div className='items'>
          <LinkContents closeLinks={closeLinks} />
        </div>
      )}
      {open && white && (
        <div
          className={`contents ${open && "items"}`}
          style={{ paddingTop: 100 }}
        >
          <ul>
            <li onClick={() => history.push("/login")}>
              <div className='link'>Login</div>
            </li>
            <li onClick={() => history.push("/signup")}>
              <div className='link'>Create account</div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
});
