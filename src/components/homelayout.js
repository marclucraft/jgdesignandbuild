import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";

function HomeLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-jg-dg">
      <Header />

      <main className="flex-1 w-full mx-auto">
        {children}
      </main>

      <Footer />
    </div>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeLayout;
