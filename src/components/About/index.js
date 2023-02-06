import React from 'react'
import coverImage from "../../assets/cover/IMG_2093.JPG";
function About() {

  return (
    <section className="my-5" >
      <div className="card shadow border-0">
        <div>
          <h1 id="about">Julissa Hash</h1>
          <p>Full Stack Developer</p>
          <p>Austin, Texas</p>
        </div>
        <div className="image1">
          <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </div>
        
      </div>
      <div className="text">
        <p className='intro'>
        Julissa is a full-stack developer instructed by the University of Texas at Austin. This program helped her to improve her development skills in HTML5, CSS3, JavaScript, and responsive web design MERN (MongoDB Express React Node). Her experience with client interaction helped her easily capture user needs for functionality. She is looking forward to joining a development company to create and update responsive applications, developing a more effective and dynamic user interaction with innovation, problem-solving, and visual appeal web design, which is one of her biggest passions.

        </p>
      </div>
    </section>
  );
}

export default About;