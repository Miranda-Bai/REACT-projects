import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Message() {
  const [messageArray] = useState([
    { id: "01", title: "message 01" },
    { id: "02", title: "message 02" },
    { id: "03", title: "message 03" },
    { id: "04", title: "message 04" },
  ]);
  return (
    <div>
      <ul>
        {messageArray.map((m) => {
          return (
            <li key={m.id}>
              <Link to={`detail?id=${m.id}&title=${m.title}`}>{m.title}</Link>
            </li>
          );
        })}
      </ul>
      <hr />
      <Outlet></Outlet>
    </div>
  );
}
