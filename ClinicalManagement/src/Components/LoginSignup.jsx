import './LoginSignup.css'
import { useNavigate } from 'react-router-dom';
import React ,{useState} from 'react'
function LoginSignup() {
  const [wrongpass, setWrongpass] = useState(false);
  const[action,setAction]=useState("Sign Up");
  const[loginStatus,setLoginStatus]=useState(false);
  const navigate=useNavigate();

  const Signup = ()=>{
    if(action==="Login"){
      setAction("Sign Up")
      setWrongpass(false);
    }
    else if(action==="Sign Up"){
      /*Push to database */
      const username=document.getElementById("username").value;
      const email=document.getElementById("email").value;
      const password=document.getElementById("password").value;
      
      /*  */

    }
  }
  const Login = ()=>{
    if(action==="Sign Up"){
      setAction("Login");
    }
    else if(action==="Login"){
      /*Check from database */
      const username=document.getElementById("username").value;
      const password=document.getElementById("password").value;
      const message=document.getElementById("message");
      
      /*Test*/
      if (username=="admin" && password=="admin"){
        setLoginStatus(true);
        navigate("/dashboard");
       
      }
      else{
        setWrongpass(true);
      }
    }
  }
  


  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
       {/*Inputs */}
        <div className="inputs">
          {/* Username */}
          <div className="input">
            <div className="login-icon"> 
              <i class="bi bi-person "></i></div>
            <input type="text" id='username' placeholder='User name' />
          </div>
          {/* Email */}
          {action==="Login"?null:<div className="input">
            <div className="login-icon">
              <i class="bi bi-envelope "></i></div>
           
            <input type="email" id='email' placeholder='Email' />
          </div>}
          
          {/* Password */}
          <div className="input">
            <div className="login-icon">
              <i class="bi bi-key "></i></div>
           
            <input type="password" id='password' placeholder='Password'/>
          </div>
          
          {wrongpass===true?<div id='message' className='message'>Wrong username or password</div>:null}
          <div className="submit-container">
            <div className={action ==="Login"?"submit gray":"submit"} onClick={Signup}>SIGN UP</div>
            <div className={action ==="Sign Up"?"submit gray":"submit"}onClick={Login}>LOGIN</div>
          </div>
          {action==="Sign Up"?null:<div className="forgot-pass"><a href="">Forgot password?</a></div>}
        </div>
      </div>
    </>
  )
}

export default LoginSignup