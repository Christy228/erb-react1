import React from "react";
import title from "./title";
import { services } from "../data";  
import Service from "./service"; 
export default function services() {
    return (     
<section className="section services" id="services">
  <Title title='our' subtitle='services' />
  <div className="section-center services-center">
   {services.map((service) => {    
     return <service key={service.id} {...service} />;
     })}
  </div>
</section>
   );
}  

