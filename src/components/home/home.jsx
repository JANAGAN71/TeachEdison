import "../home/home.css"
import SearchFilter from "../serach_filter/filter.jsx"
import Articles from "../articles/article.jsx"
import { useState } from "react"

export default function Home() {
    const [selected, setSelected] = useState("Categories");
    return (
        <>
            <SearchFilter selected={selected} setSelected={setSelected} />
            <div className="homePage">
                <Articles />
                {/* <Sidebar /> */}
            </div>
        </>
    )
}