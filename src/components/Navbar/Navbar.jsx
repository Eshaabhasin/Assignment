import React from "react";
import './Navbar.css';
import image from "../../assets/icons.png"
import phone from "../../assets/Symbol.png"
import mail from "../../assets/Symbol2.png"
import beforeimg from "../../assets/before.png"
import logoimg from "../../assets/logo.png"
import searchimg from "../../assets/search.png"
const Navbar=()=>{
    return(
    <>
    <div className='navbar'>
      <div className='upper-navbar'>
        <ul>
          <li><img src={mail}></img>www.registerkaro.in </li>
          <li><img src={beforeimg}></img></li>
          <li><img src={phone}></img>+918447746183</li>
          <li><img src={beforeimg}></img></li>
          <li><img src={image}></img></li>
        </ul>
        
      </div>
      <div className="navbar-lower">
        <div className="navbar-img">
       < img src={logoimg}></img>
       </div>
       <div className="navbar-items">
        <ul>
            <li>Home</li>
            <li>Our Services</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>About us</li>
            <li><img className='search' src={searchimg}></img></li>
           
        </ul>
        </div>
        <div></div>
        <button className="talk">Talk An Expert</button>
      </div>
     </div>
    </>
     )
}
export default Navbar;