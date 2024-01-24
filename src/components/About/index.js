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
        Julissa is a full-stack developer instructed by the University of Texas coding boot camp. This program helped her to improve her knowledge of development skills in JavaScript, CSS, React.js, and responsive web design MERN, over her already experience in graphic design campaigns. She is looking forward to joining a development work field to collaborate in creating and updating applications developing more efficient and responsive user interactions.  Working on innovation, problem-solving, and visual appeal web design is one of her biggest passions.






        </p>
      </div>
    </section>
  );
}

export default About;