import React from "react";
import { socialLinks } from "./data";
export default function socialLink({ groupClass, itemClass }) {
    return (
 <ul className={groupClass}>
        { socialLinks.map((link) => {
            return (
        <li>
           <a
            key={link.id}
            href={link.href}
            className={link.icon}></i>
           </a>        
         </li>        
         );
        })}
    </ul>
  )
}    