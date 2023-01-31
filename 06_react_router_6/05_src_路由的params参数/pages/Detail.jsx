import React from "react";
import { useParams, useMatch } from "react-router-dom";

const DetailData = [
  { id: "01", title: "message 01", content: "message 01...." },
  { id: "02", title: "message 02", content: "message 02...." },
  { id: "03", title: "message 03", content: "message 03...." },
];

export default function Detail(props) {
  const { id, title } = useParams();
  const findResult = DetailData.find((obj) => obj.id === id) || {};
  const match = useMatch("/home/message/detail/:id/:title");
  console.log("match:", match);
  return (
    <div>
      <ul>
        <li>id: {id}</li>
        <li>title: {title}</li>
        <li>content: {findResult.content}</li>
      </ul>
    </div>
  );
}
