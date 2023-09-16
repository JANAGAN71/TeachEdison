import React, { useEffect, useState } from "react"
import "../home/home.css"
import SearchFilter from "../serach_filter/filter.jsx"
import Articles from "../articles/article.jsx"
import TopNavBar from "../top_navbar/topnav"
import axios from "axios"

export default function Home() {
  const [selected, setSelected] = useState("Categories");
  return (
    <>
      <TopNavBar />
      <SearchFilter selected={selected} setSelected={setSelected} />
      <div className="homePage">
        <Articles />
      </div>
    </>
  )
}



// const [Posts, setPosts] = useState([]);

// useEffect(() => {
//     axios.get('http://localhost:5000/api/posts')
//       .then(response => {
//         setPosts(response.data);
//         console.log(Posts);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);
// useEffect(() => {
//     axios.get("http://localhost:5000/api/posts")
//     .then((res)=>{
//         setPosts(res.data);
//         console.log(Posts);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// }, [])