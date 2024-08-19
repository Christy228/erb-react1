import React from "react";
import aboutImg from "../images/about.jpeg";
export default function About() {
    return (
<section className="section" id="about">
<div className="section-title">
<h2>about <span>us</span></h2>
</div>
<div className="section-center about-center">
<div className="about-img">
    <img src="./images/about.webp" alt="awesome beach" className="about-photo" />
</div>
<article className="about-info">
    <h3>explore the difference</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, rerum! Deserunt hic inventore porro officia dolore voluptatibus vitae reiciendis voluptatem!</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, reprehenderit tenetur cum atque in ratione doloremque. Deserunt reprehenderit sapiente nemo.</p>
    <a href="#" className="btn">read more</a>
</article>
</div>
</section>
    )
}