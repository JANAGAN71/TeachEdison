import "../serach_filter/filter.css"
import { useState } from "react"

export default function Filter({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const filters = ['Technology', 'Sports', 'Education', 'Entertainment', 'Astrology', 'Healthcare'];
    return (
        <div className="filter">
            <div className="filterbox">
                <div className="dropdownBtn" onClick={(e) => setIsActive(!isActive)}>
                    <span>{selected}</span>
                    <i class="fa-solid fa-angle-down"></i>
                    </div>
                {isActive && (
                    <div className="dropdownContent">
                        {filters.map((c) => (
                            <div onClick={e => {
                                setSelected(c);
                                setIsActive(false);
                            }} 
                            className="dd_lists">
                                {c}
                                </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="social_links">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-telegram"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
            <div className="searchbar">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" name="" id="" placeholder="Search.." />
            </div>
        </div>
    )
}