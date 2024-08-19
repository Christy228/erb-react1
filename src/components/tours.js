import React from "react";
import Title from "./title";
import { tours } from "../data";
import Tour from "./tour";
export default function Tours() {
   return (
<section className="section" id="tours">
  <Title title='featured' subTitle='tours' />
  <div className="section-center tours-center">
    
    {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} />;
    })}
   </div>   
</section>
  );
}