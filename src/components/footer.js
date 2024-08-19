import React from "react";
import pageLinks from "./PageLinks";
import socialLink from "./SocialLinks";
export default function Footer() {
   return ( 
       <footer className="section footer">
         <pageLinks groupClass='footer-links' itemClass='footer-link' />
         <socialLinks groupClass='footer-icons' itemClass='footer-icon' />     
   <p className="copyright">
copyright &copy; backroads travel yours company<span id='date'>{new Date().getFullYear()}</span>
    all rights reserved</p>
  </footer>
 );
} 
   
       