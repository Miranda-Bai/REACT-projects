import React from "react";
import { useSearchParams, useLocation} from "react-router-dom";

const DetailData = [
  { id: "01", title: "message 01", content: "message 01...." },
  { id: "02", title: "message 02", content: "message 02...." },
  { id: "03", title: "message 03", content: "message 03...." },
];

export default function Detail(props) {
    const [search, setSearch] = useSearchParams();
    // console.log("search: ", search)
    const findResult=DetailData.find(item=>item.id===search.get("id"))||{}
    function handleChangeSearh(){
        setSearch("id=009&title=nihao")
    }

    const location = useLocation()
    console.log("location:", location)
  return (
    <div>
      <ul>
        <li>id: {search.get("id")}</li>
        <li>title: {search.get("title")}</li>
        <li>content: {findResult.content}</li>
        <li><button onClick={handleChangeSearh}>click to update search</button></li>
      </ul>
    </div>
  );
}
