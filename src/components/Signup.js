import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import l1 from "../images/logo.png"


function SignUp() {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function submit(e) {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:8000/Signup", {
          email,
          password,
        });
        if (response.data === "exist") {
          alert("User already exists");
        } else if (response.data === "notexist") {
          history("/Home", { state: { id: email } });
        }
      } catch (error) {
        if (error.response) {
          // Handle specific error responses from the server, if any
          if (error.response.status === 409) {
            alert("User already exists");
          } else {
            alert("Something went wrong");
          }
          console.log(error.response.data);
        } else {
          // Handle other types of errors (network issues, etc.)
          alert("Network error or something went wrong");
          console.error(error);
        }
      }
    }
    return (
      <div className="register">
        <div className="mainlogin">
          <div className="grid">
            <img src={l1} alt="about " />
            <h2 className="section__title about__title">Register</h2>
            <form onSubmit={submit}>
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
              <button type="submit">SignUp</button>
            </form>
            <br />
            <span>Do you have an account?</span>
            <button>
              <Link to="/Login">Login Page</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
  export default SignUp;





// function SignUp() {
//     const history=useNavigate();

//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')

//     async function submit(e){
//         e.preventDefault();

//         try{

//             await axios.post("http://localhost:8000/Signup",{
//                 email,password
//             })
//             .then(res=>{
//                 if(res.data=="exist"){
//                     alert("User already exists")
//                 }
//                 else if(res.data=="notexist"){
//                     history("/Home",{state:{id:email}})
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
//         <div className="register">
//         <div className="mainlogin">
//           <div className="grid">
//           <img src={l1} alt="about "/>
//               <h2  className="section__title about__title">Register</h2>
//             <form action="POST">
//             <label>Email</label>
//                 <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"/>
//                 <label>Password</label>
//                 <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
//                 Are you Human?: <input type="checkbox" name="human" />
//                 {/* <button type="submit" onClick={submit}>Signup</button> */}
//                 <button type="submit">SignUp</button>
//             </form>
//             <br/>
//             <span>Do you have an account?</span>
//             <button><Link to="/Login">Login Page</Link></button>
//         </div>
//         </div>
//         </div>
//     )
// }

// export default SignUp