import "../login/login.css"

export default function login() {
  return (
    <div className="loginPage">
      <div className="loginContent">
                <span className="loginTitle">Login</span>
                <form action="" className="loginForm">
                    <label htmlFor="">Email Id</label>
                    <input type="text" name="" id="" placeholder="Enter Your Email ID" />
                    <label htmlFor="">Password</label>
                    <input type="text" name="" id="" placeholder="Enter Your Password" />
                    <button className="loginBtn">Login</button>
                </form>
                <button className="regBtn">Register</button>
            </div>
    </div>
  )
}