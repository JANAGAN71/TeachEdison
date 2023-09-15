import './sidebar.css'
import articleImg from "./profile.jpg"

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
      <span className="sideBarTitle">ABOUT ME</span>
      <img src= {articleImg} alt="" />
      <p>A 6G network is defined as a cellular network that operates in untapped 
        radio frequencies and uses cognitive technologies like AI to enable high-speed, 
        low-latency communication at a pace multiple times faster than fifth-generation networks. 
        6G networks are currently under research and development, yet to be released</p>
      </div>
    <div className="sidebarItem">
      <span className="sideBarTitle">FOLLOW US</span>
      <div className="sm_links">
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-telegram"></i>
      <i class="fa-brands fa-twitter"></i>
      </div>
    </div>
    </div>
  );
}
