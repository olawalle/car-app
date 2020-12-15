import React, { useState } from "react";
import "./Sidebar.scss";

import logo from "../../assets/images/blackLogo.svg";
import { withRouter } from "react-router-dom";

export default withRouter(function Sidebar({ history }) {
  const [currentLink, setCurrentLink] = useState(0);
  const links = [
    {
      image: `<svg xmlns="http://www.w3.org/2000/svg" width="21.714" height="19" viewBox="0 0 21.714 19"><defs><style>.a{}</style></defs><path class="a" d="M20.078,7.011,18.555,1.935A2.7,2.7,0,0,0,15.954,0H5.76a2.7,2.7,0,0,0-2.6,1.935L1.637,7.011A2.716,2.716,0,0,0,0,9.5v5.429a1.357,1.357,0,0,0,1.357,1.357h0v1.357A1.357,1.357,0,0,0,2.714,19H4.071a1.357,1.357,0,0,0,1.357-1.357V16.286H16.286v1.357A1.357,1.357,0,0,0,17.643,19H19a1.357,1.357,0,0,0,1.357-1.357V16.286h0a1.357,1.357,0,0,0,1.357-1.357V9.5a2.716,2.716,0,0,0-1.637-2.489ZM5.76,2.714H15.954l1.221,4.071H4.538L5.76,2.714ZM5.429,12.893a1.357,1.357,0,1,1,1.357-1.357A1.357,1.357,0,0,1,5.429,12.893Zm10.857,0a1.357,1.357,0,1,1,1.357-1.357A1.357,1.357,0,0,1,16.286,12.893Z" transform="translate(0)"/></svg>`,
      text: "Request a car",
      to: "",
    },
    {
      image: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><defs><style>.a{}.b{fill:#fff;}</style></defs><g transform="translate(-142 -493)"><circle class="a" cx="11" cy="11" r="11" transform="translate(142 493)"/><path class="b" d="M10.616.153a.313.313,0,0,0-.343-.068L.192,4.31a.314.314,0,0,0,.05.595L4.635,5.928a.23.23,0,0,1,.171.171l1.05,4.426a.314.314,0,0,0,.279.24h.026a.313.313,0,0,0,.289-.192L10.684.5A.314.314,0,0,0,10.616.153Z" transform="translate(147 498.939)"/></g></svg>`,
      text: "My trips",
      to: "trips",
    },
    {
      image: `<svg xmlns="http://www.w3.org/2000/svg" width="21.714" height="14.929" viewBox="0 0 21.714 14.929"><defs><style>.a{}</style></defs><path class="a" d="M21.714,83.52V82.375A2.375,2.375,0,0,0,19.339,80H2.375A2.375,2.375,0,0,0,0,82.375V83.52a.212.212,0,0,0,.212.212H21.5A.212.212,0,0,0,21.714,83.52Z" transform="translate(0 -80)"/><path class="a" d="M0,200.212v7.252a2.375,2.375,0,0,0,2.375,2.375H19.339a2.375,2.375,0,0,0,2.375-2.375v-7.252A.212.212,0,0,0,21.5,200H.212A.212.212,0,0,0,0,200.212Zm5.429,5.556a.679.679,0,0,1-.679.679H4.071a.679.679,0,0,1-.679-.679v-.679a.679.679,0,0,1,.679-.679H4.75a.679.679,0,0,1,.679.679Z" transform="translate(0 -194.911)"/></svg>`,
      text: "Payment",
      to: "payment",
    },
    {
      image: `<svg xmlns="http://www.w3.org/2000/svg" width="21.957" height="24.982" viewBox="0 0 21.957 24.982"><defs><style>.a{}</style></defs><g transform="translate(4.391)"><path class="a" d="M127.586,0a6.587,6.587,0,1,0,6.587,6.587A6.594,6.594,0,0,0,127.586,0Z" transform="translate(-120.999)"/></g><g transform="translate(0 14.736)"><path class="a" d="M52.833,306.717A10.572,10.572,0,0,0,44.019,302H39.936a10.572,10.572,0,0,0-8.814,4.717L31,306.9v5.345H52.956V306.9Z" transform="translate(-30.999 -302)"/></g></svg>`,
      text: "My account",
      to: "account",
    },
  ];

  return (
    <div className='sidebar'>
      <div className='logo-wrap'>
        <img src={logo} alt='' />
      </div>

      <div className='logo-wrap'>
        <p className='welcome'>Welcome</p>
        <p className='name'>David O.</p>
      </div>

      <ul>
        {links.map((link, i) => (
          <li
            onClick={() => {
              setCurrentLink(i);
              history.push(`/dashboard/${link.to}`);
            }}
          >
            <div className={`link ${i === currentLink ? "active" : ""}`}>
              <span dangerouslySetInnerHTML={{ __html: link.image }}></span>
              {link.text}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});
