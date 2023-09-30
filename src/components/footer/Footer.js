import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__message">May the blessings of your ancestors guide you on your path.</p>
      <p className="footer__rights">&copy; {new Date().getFullYear()} Pitrapaksh All rights reserved.</p>
    </footer>
  );
}

export default Footer;
