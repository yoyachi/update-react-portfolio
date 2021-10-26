import React from 'react'
import coverImage from "../../assets/cover/IMG_8236.JPG";
import backgroundImage from "../../assets/cover/austin.jpg";
function About() {

  return (
    <section className="my-5" >
      <div className="card shadow border-0">

        <div>
          <h1 id="about">Julissa Hash</h1>
          <p>Software Developer</p>
          <p>Austin, Texas</p>
        </div>

        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      
      </div>
      <div className="text">
        <p>
          I am a full stack developer instructed by the University of Texas coding boot camp. This program helped me setting knowledge on newly development skills in JavaScript, CSS, React.js and responsive web design MERN. In addition, supported by the implementation of modern libraries and frameworks to improve their setup. With this knowledge I am looking forward to update and create responsive applications, developing a more effective and dynamic user interaction. I am looking forward to join a development company to share innovation, interactivity and desirable web design, which is one of my biggest passions.  Altogether with this employer, I would look forward to setup better solutions for a competitive and rapid changing developer world.
        </p>
      </div>
    </section>
  );
}

export default About;