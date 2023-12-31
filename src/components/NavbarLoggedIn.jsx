import {Link, NavLink} from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import { useParams } from "react-router-dom";
import logo from '../assets/images/favicon/sparkleslogo.png';




export default function NavbarLoggedIn(){  
  
const {name} = useParams();

    return (
        <div className="top-0 z-50 navbar bg-base-100 buttonShadow">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPA9rX9idZ_8ViKtR8vipU1DyeNNbATvTEw&usqp=CAU" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
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
          <a className="normal-case text-xl -ml-10 " style={{width:'300px'}}><img src={logo} alt="Logo" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            
            <li><a><NavLink 
             className={(({ isActive }) => (isActive ? "active" : ""))}   style={({ isActive}) => {
                return {
                  fontWeight: isActive ? "bold" : "",  };
                }}
            to={`/user/${name}`}>Home</NavLink></a>  </li>
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
        <div className="navbar-end gap-3 ">
        <ThemeSwitcher/>
        <div>
        <div>
          <div >
            <button className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
            </button>
           

          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu buttonShadow menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
        </div>
      </div>
    )
}


