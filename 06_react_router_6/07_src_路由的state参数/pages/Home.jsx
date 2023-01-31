import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function Home() {
   
  return (
    <div className="home-container">
        <h3>Home 组件</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <NavLink className="list-group-item" to="news">News</NavLink>
            </li>
            <li>
              <NavLink className="list-group-item" to="message">Message</NavLink>
            </li>
          </ul>
        </div>
        {/* 指定路由展示的位置 */}
        <Outlet></Outlet>
      </div>
  );
}
