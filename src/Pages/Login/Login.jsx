import { Link } from "react-router-dom";
import Navabar from "../Navbar/Navabar";


const Login = () => {


    const loginhandler =(e)=>{
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

    }
       
    return (
        <div>
            <Navabar></Navabar>


   <div className="md:w-1/2 mx-auto">
    <h1 className="text-center font-bold text-black text-3xl">Please Login</h1>
   <form onSubmit={loginhandler} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered bg-white" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
       <p className="text-center">New here? <Link to='/register' className="text-blue-800">Register</Link></p>

   </div>
  
        </div>
    );
};

export default Login;