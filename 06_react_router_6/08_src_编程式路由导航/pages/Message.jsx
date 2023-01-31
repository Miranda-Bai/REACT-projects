import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Message() {
  const navigate = useNavigate();
  const [messageArray] = useState([
    { id: "01", title: "message 01" },
    { id: "02", title: "message 02" },
    { id: "03", title: "message 03" },
    { id: "04", title: "message 04" },
  ]);
  function handleShowDetail(m) {
    navigate("detail", {
      replace: false,
      state: {
        id: m.id,
        title: m.title,
      },
    });
  }
  return (
    <div>
      <ul>
        {messageArray.map((m) => {
          return (
            <li key={m.id}>
              <Link to="detail" state={{ id: m.id, title: m.title }}>
                {m.title}
              </Link>
              <button onClick={() => handleShowDetail(m)}>show detail</button>
            </li>
          );
        })}
      </ul>
      <hr />
      <Outlet></Outlet>
    </div>
  );
}
