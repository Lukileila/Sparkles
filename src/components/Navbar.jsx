import {Link, NavLink} from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import logo from '../assets/images/favicon/sparkleslogo.png';



export default function Navbar(){  
  
    return (
        <div className="top-0 z-50 navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           
          <div className="flex justify-around gap-2 align-items">
      
          
         <br />
            
         
            </div>
              <li></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="normal-case text-sm -ml-10" style={{width:'300px'}}><img src={logo} alt="Logo" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            
            <li><a><NavLink 
             className={(({ isActive }) => (isActive ? "active" : ""))}   style={({ isActive}) => {
                return {
                  fontWeight: isActive ? "bold" : "",  };
                }}
            to="/">Home</NavLink></a>  </li>
            <li><a> <Link to="/entry">About</Link></a></li>
            <li tabIndex={0}>
              <details>
                <summary>Shop</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
        <ThemeSwitcher/>
          <a className="btn btn-primary buttonShadow"><Link to="/login">Login</Link></a>
          <a className="btn btn-primary buttonShadow"> <Link to="/signup">Sign Up</Link></a>
        </div>
      </div>
    )
}


