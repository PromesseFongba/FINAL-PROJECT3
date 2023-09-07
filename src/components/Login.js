import React, {  useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import l1 from "../images/logo.png"

function Login() {
    const navigate = useNavigate(); // Use navigate instead of history
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function submit(e) {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:8000/", {
          email,
          password,
        });
        if (response.data === "exist") {
          navigate("/Home", { state: { id: email } });
        } else if (response.data === "notexist") {
          alert("User has not signed up");
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          alert("Wrong details");
        } else {
          console.error(error);
        }
      }
    }
    return (
      <div className="login">
        <div className="mainlogin">
          <div className="grid">
            <img src={l1} alt="about" />
            <h2 className="section__title about__title">Login</h2>
            <form onSubmit={submit}> {/* Use onSubmit instead of onClick */}
              <label>Email</label>
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
              />
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
              />
              Are you Human?: <input type="checkbox" name="human" />
              <button type="submit">Login</button>
            </form>
            <br />
            <span>Don't have an account?</span>
            <button>
              <Link to="/Signup">Signup</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
  export default Login;



// function Login() {

//     const history=useNavigate();

//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')

//     async function submit(e){
//         e.preventDefault();

//         try{

//             await axios.post("http://localhost:8000/",{
//                 email,password
//             })
//             .then(res=>{
//                 if(res.data=="exist"){
//                     history("/Home",{state:{id:email}})
//                 }
//                 else if(res.data=="notexist"){
//                     alert("User have not sign up")
//                 }
//             })
//             .catch(e=>{
//                 alert("wrong details")
//                 console.log(e);
//             })

//         }
//         catch(e){
//             console.log(e);

//         }

//     }


//     return (
//         <div className="login">
    
//     <div className="mainlogin">
//          <div className="grid">
//          <img src={l1} alt="about "/>
//                 <h2  className="section__title about__title"> Login</h2>

//             <form action="POST">
//             <label>Email</label>
//                 <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"/>
//                 <label>Password</label>
//                 <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
//                 Are you Human?: <input type="checkbox" name="human" />
//                <button type="submit" onClick={submit}> Login</button>

//             </form>
//             <br />
//             <span> Don't have an account?</span>
//             <button ><Link to="/Signup">Signup </Link></button>
// </div>
// </div>
//         </div>
//     )
// }

// export default Login