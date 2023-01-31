import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  function handleGoBack() {
    navigate(-1);
  }
  function handleForward() {
    navigate(1);
  }
  return (
    <div className="offset-md-2 col-md-8">
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={handleGoBack}>go back</button>
        <button onClick={handleForward}>forward</button>
      </div>
    </div>
  );
}
