import { Link } from "react-router-dom";
import Navabar from "../Navbar/Navabar";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {


const {createuser} = useContext(AuthContext)
    
    const registerhandler =(e)=>{
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const photo = form.get('photo')
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')

        createuser(email,password)
        .then(result => console.log(result.user))
        .catch(error=> console.error(error))
        e.target.reset()
        console.log(photo,name,email,password)
        

    }
    return (
        <div>
            <Navabar></Navabar>

            <div className="md:w-1/2 mx-auto">
    <h1 className="text-center font-bold text-black text-3xl">Please Register</h1>
   <form onSubmit={registerhandler} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your name" name="name" className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photourl</span>
          </label>
          <input type="text" placeholder="Photo-url" name="photo" className="input input-bordered bg-white" required />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
       <p className="text-center">ALready Have an account? <Link to='/login' className="text-blue-800">Login</Link></p>

   </div>
            
        </div>
    );
};

export default Register;