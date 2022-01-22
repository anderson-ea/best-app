import React from 'react';
import {MdEmail} from 'react-icons/md';
import {AiFillLinkedin} from 'react-icons/ai';

export default function About() {
  return (
    <div className="about-container">
      <h1 className='name'>Eric Anderson</h1>
      <h4 className='job-title'>Fullstack Developer</h4>
      <p className='email'>anderson.ericandrew@gmail.com</p>
      <div className="button-container">
        <button className='email-button'>
          <MdEmail style={{ marginRight: 8 }} />
          Email
        </button>
        <button className='linkedIn-button'>
          <AiFillLinkedin style={{ color: 'white', marginRight: 8 }} />
          LinkedIn
        </button>
      </div>
      <div>
        <h3 className="about">About</h3>
        <p className="interests-text">
          Self taught fullstack developer. Proficient in Python,
          Javascript, Flask, React, HTML, CSS, SQL, and more.
          I'm gassed up. Code all day and all night.
        </p>
        <h3 className="interests">Interests</h3>
        <p className="interests-text">
          Health Fanatic. Movie Lover. Ex-Hardcore-Gamer.
          Traveler. Yes Man. Singer in the Shower. 
          Motivator. ADDICTED TO SUCCESS.
        </p>
      </div>
    </div>
  );
}
