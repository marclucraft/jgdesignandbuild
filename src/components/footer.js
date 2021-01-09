import React from 'react';

import logo from '../images/jg_logo.png'
import fmbLogo from '../images/fmb-logo.png'

function Footer() {
  return (
    <footer className="bg-jg-lg text-jg-tg">
      <div className="bg-jg-dg">
        <div className="max-w-6xl px-4 py-6 mx-auto text-xs md:flex">
          <div><img className="mx-auto w-28" src={logo}/></div>
          <div className="py-4 text-base text-center md:flex-1 md:px-12 md:text-left md:py-0">
            <p>
              <strong className="text-jg-green">To arrange a free, no-obligation consultation contact:</strong><br/>
              <strong>Office:</strong> 01268 754581<br/>
              <strong>Mobile:</strong> 07989 960973<br/>
              <strong>Email:</strong> <a className="text-jg-green" href="john@jgdesignandbuild.co.uk">john@jgdesignandbuild.co.uk</a>
            </p>
          </div>
          <div><img className="mx-auto w-14" src={fmbLogo}/></div>
        </div>
      </div>
        <div className="max-w-6xl p-2 mx-auto text-xs text-center text-white md:text-left md:p-4">
          <p>
            Created by{` `}
            <a
              className="font-bold no-underline"
              href="https://www.marclucraft.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marc Lucraft
            </a>
          </p>
        </div>
      </footer>
  )
}

export default Footer;