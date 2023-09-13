import "../register/register.css"

export default function register() {
  return (
    <div className="registerPage">
      <div className="registerContent">
                <span className="registerTitle">Register</span>
                <form action="" className="registerForm">
                <label htmlFor="">UserName</label>
                    <input type="text" name="" id="" placeholder="Enter Your Name" />
                    <label htmlFor="">Email Id</label>
                    <input type="text" name="" id="" placeholder="Enter Your Email ID" />
                    <label htmlFor="">Password</label>
                    <input type="text" name="" id="" placeholder="Enter Your Password" />
                    <button className="regBtn">Register</button>
                </form>
            </div>
    </div>
  )
}
