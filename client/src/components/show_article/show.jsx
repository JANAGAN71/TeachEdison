import "./show.css"
import SideBar from "../sidebar/sidebar.jsx"
import SinglePost from "../singlePost/singlePost"
import TopNavBar from "../top_navbar/topnav"

export default function single() {
  return (
    <>
    <TopNavBar />
    <div className="singlePage">
    <SinglePost />
    </div>
    </>
  )
}
