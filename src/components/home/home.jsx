import "../home/home.css"
import Header from "../header/header.jsx"
import Articles from "../articles/article.jsx"
import Sidebar from "../sidebar/sidebar.jsx"


export default function Home() {
    return (
        <>
            <Header />
            <div className="homePage">
                <Articles />
                {/* <Sidebar /> */}
            </div>
        </>
    )
}