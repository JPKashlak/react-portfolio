import React from 'react';

function About() {
  return (
    <section>
      <ul id="about">
        <li>
        <h2><span>About Me</span></h2>
        </li>
        <li>
        <img id="portrait" src={require('../../assets/images/portrait.jpeg')} alt="programmer's portrait"/>
        </li>
        <li>
        <div className="my-2">
          <p>Jacob is an Austin-based full stack web developer, theatre artist, and coffee enthusiast.</p>
        </div>
        </li>
      </ul>
    </section>
  );
}

export default About;