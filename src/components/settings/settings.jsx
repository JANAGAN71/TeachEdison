import "../settings/settings.css"
import Sidebar from "../sidebar/sidebar"
import ProfileImg from "../settings/profile.jpg"


export default function Settings() {
    return (
        <div className="settingsPage">
            <div className="settingsWrapper">
                <div className="settingsEdit">
                    <span className="updateAcc">Update Your Account</span>
                    <span className="delAcc">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <div className="UserImg">
                        <span>Profile Picture</span>
                        <img src= {ProfileImg} alt="" className="pro_img"/>
                        <label htmlFor="fileInput"><i class=" pro_logo fa-solid fa-user-tie"></i></label>
                        <input type="file" name="fileInput" id="fileInput" style={{ display: "none" }} />
                    </div>
                    <div className="userDetails">
                        <label htmlFor="userNameInp" className="userCont">UserName</label>
                        <input type="text" name="Janagan" className="userInput" id="userNameInp" placeholder="Enter Your Name" />
                        <label htmlFor="emailInp" className="userCont">Email ID</label>
                        <input type="text" name="Emailid" className="userInput" id="emailInp" placeholder="Enter Your Email ID" />
                        <label htmlFor="passwordInp" className="userCont">Password</label>
                        <input type="text" name="Janagan" className="userInput" id="passwordInp" placeholder="Enter Your Password" />
                    </div>
                    <button className="submitBtn">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
