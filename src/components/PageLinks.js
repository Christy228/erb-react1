import { pageLinks } from "./data";
export default function pageLinks({ groupClass, itemClass, nav_id}) {
   return (
     <ul className={groupClass}  id={nav-id}>
        {pageLinks.map((link) => {
          return (
        i  <li>
            <a key={link.id} href={link.href} className={itemfClass}>
              {link.text}
            </a>
          </li>
          );
       })}
     </ul>
    );
 