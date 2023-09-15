import './topnav.css'
import profilepic from "./profile.jpg"
import title from "./logo2.png"


export default function TopNavBar(){
    return(
        <div className="t_nav">
        <div className="logotitle">  
        <img src={title} alt="Logo2" className='logo2' /> 
        </div>
        <div className="navbar">
        <ul className="navlist">
            <li className="lists">HOME</li>
            <li className="lists">ABOUT</li>
            <li className="lists">CONTACT</li>
            <li className="lists">CREATE</li>
            <li className="lists">LOGOUT</li>
        </ul>
        </div>
        <div className="profile">
        <img src= {profilepic} alt="Profile" />
        <span>My Profile</span>
        </div>
        </div>
    )
}