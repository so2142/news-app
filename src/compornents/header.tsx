// header.tsx

import React from "react";
import Help from "../images/help.png";
import Setting from "../images/setting.png";
import Menu from "../images/menu.png";
import Nav from "./nav";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="flex header-top">
          <h1>News</h1>
          <div className="search">
            <form action = "https://www.google.co.jp/search" method="get"></form>
            <input className="search-form" type="search" name="search" placeholder="トピック、場所、ニュース提供元を検索"></input>
            <input type="submit" name="submit"></input>
          </div>
          <div className="icon-filter">
            <a href="https://www.google.co.jp"><img className="icon" src={Help} alt="help" /></a>
            <a href="https://www.google.co.jp"><img className="icon" src={Setting} alt="setting" /></a>
          </div>
          <div className="icon-filter menu">
            <a href="https://www.google.co.jp"><img className="icon" src={Menu} alt="menu" /></a>
          </div>
        </div>
        <Nav />
      </div>
        <hr className="header-hr" />
    </React.Fragment>
  );
};

export default Header;