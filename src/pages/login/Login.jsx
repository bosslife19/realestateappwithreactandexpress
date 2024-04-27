import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import axiosInstance from "../../lib/axiosInstance";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  
  const [error, setError] = useState("")
  const [isLoading, setIsloading] = useState(false)

  const {updateUser} = useContext(AuthContext)

  const navigate = useNavigate()
  const handleSubmit = async(e)=>{
    e.preventDefault();
    setError('')
    setIsloading(true)
        const formData = new FormData(e.target);

        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");

        try {

            const res = await axiosInstance.post("auth/login", {
                username, password
            })
            setIsloading(false)
           
            updateUser(res.data)

            navigate('/')
            
        } catch (error) {
            console.log(error)
            setError(error.response.data.message)
            setIsloading(false)
        }

  }
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" type="text" placeholder="Username" required minLength={3} maxLength={20} />
          <input name="password" type="password" placeholder="Password" required />
          <button disabled={isLoading}>Login</button>
          <Link to="/register">{"Don't"} you have an account?</Link>
          {error && <span>{error}</span>}
        </form>
      
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;