import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

import logo from '../images/jg_logo.png'

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          authorURL
        }
      }
    }
  `);

  return (
    <header className="bg-jg-dg">
      <div className="flex flex-wrap items-center justify-between max-w-6xl p-4 mx-auto">
        <Link to="/">
          <img className="w-14" src={logo} alt={site.title} />
        </Link>

        <button
          className="items-center block text-white md:hidden focus:outline-none"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/projects`,
              title: `Projects`,
            },
            {
              route: `/services`,
              title: `Services`,
            },
            {
              route: `/testimonials`,
              title: `Testimonials`,  
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-sm text-white no-underline uppercase md:inline-block md:mt-0 md:ml-8"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
