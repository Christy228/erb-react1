import React from "react";
import logo from "../logo.svg";
import pageLinks from "./PageLinks";
import socialLink from "./SocialLinks";
export default function Navbar() {
  const [isToggled, setToggled] = useState(false);  
  const handleToggle = () => {
    setToggled(!isToggled);
  };
  return (
<nav className="navbar">
<div className="nav-center"
    <div className="nav-header">
        <a href="index.html" className="nav-logo">
            <img src="/images/logo.svg" alt="logo"/>
        </a>
        <button 
        onClick={handleToggle}
        className='nav-toggle'
        id='nav-toggle'
        type='button' >
    <i className="fas fa-bars"></i></button> 
    <pageLinks
    groupClass={isToggled ? "nav-links show-links" : "nav-links"}
    itemClass='nav-link' 
    nav_id='nav-links'
    />
    <socialLinks groupClass='nav-icons' itemClass='nav-icon' />
  </div>
 </nav>
 ); 
}