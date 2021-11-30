import React from 'react'
import coverImage from "../../assets/cover/IMG_1707.JPG";
function About() {

  return (
    <section className="my-5" >
      <div className="card shadow border-0">

        <div>
          <h1 id="about">Julissa Hash</h1>
          <p>Software Developer</p>
          <p>Austin, Texas</p>
        </div>
        <div className="image1">
          <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </div>
        <div className="image2">
        </div>




      </div>
      <div className="text">
        <p>
          Julissa is a full stack developer instructed by the University of Texas coding boot camp. This program helped her setting knowledge on newly development skills in JavaScript, CSS, React.js and responsive web design MERN. She is looking forward to join a development company to create and update responsive applications, developing a more effective and dynamic user interaction with innovation, problem solving and visual appeal web design which is one of her biggest passions.

        </p>
      </div>
    </section>
  );
}

export default About;