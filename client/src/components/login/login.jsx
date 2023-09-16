import "../login/login.css"
import Register from "../register/register"

export default function login() {
  return (
    <>
    <div className="loginPage">
      <div className="loginContent">
                <span className="loginTitle">Login</span>
                <form action="" className="loginForm">
                    <label htmlFor="">Email Id</label>
                    <input type="password"  id="" placeholder="Enter Your Email ID" />
                    <label htmlFor="">Password</label>
                    <input type="text" name="" id="" placeholder="Enter Your Password" />
                    <button className="loginBtn">Login</button>
                </form>
            </div>
                <div className="registerLink">
                  {/* <p>If not registered yet: </p>
                  <a href= {Register}>Register Now</a> */}
                  <button className="regBtn">Register</button>
                </div>
    </div>
      </>
  )
}