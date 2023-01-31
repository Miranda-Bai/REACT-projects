import React from "react";
import {useLocation} from "react-router-dom";

const DetailData = [
  { id: "01", title: "message 01", content: "message 01...." },
  { id: "02", title: "message 02", content: "message 02...." },
  { id: "03", title: "message 03", content: "message 03...." },
];

export default function Detail(props) {
    const location = useLocation()
    // console.log(location)
    const {id, title} = location.state
    const findResult=DetailData.find(item=>item.id===id)||{}
    
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
