import React from 'react';

function About() {
  return (
    <section>
      <h1 id="about">Jacob Pearson Kashlak</h1>
      <img src={require('../../assets/images/portrait.jpeg')} alt="programmer's portrait"/>
      <div className="my-2">
        <p>Lorem ipsum dolor</p>
      </div>
    </section>
  );
}

export default About;