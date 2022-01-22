import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <FaGithub style={{ marginRight: 8 }} size={40} color="gray" />
      <FaFacebook size={40} style={{ marginLeft: 8 }} color="gray" />
    </footer>
  );
}
