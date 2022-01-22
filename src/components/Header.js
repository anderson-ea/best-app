import React from 'react';
import profile from "../images/profile.png";

export default function Header() {
  return (
    <header>
      <img alt="Profile Pic" className="profile-pic" src={profile} />
    </header>  
  );
}
