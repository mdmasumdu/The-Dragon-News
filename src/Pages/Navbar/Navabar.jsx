import { Link, NavLink } from "react-router-dom";
import image from "../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Navabar = () => {

  const {user,logout} = useContext(AuthContext)

  const singout =()=>{
    logout()
    .then()
    .catch()
  }

  


 
  const  links = <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/carrear">Carrear</NavLink>
    
    </>
    return (
        <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
        {
            links
        }
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5">
  {
    links
  }
    </ul>
  </div>
  <div className="navbar-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Link to='/register'><img src={image} /></Link>
        </div>
      </label>

      {
        user ? <button className="btn" onClick={singout}>SignOut</button> : <Link to={"/login"} className="btn">Login</Link>
      }
    
  </div>
</div>
    );
};

export default Navabar;