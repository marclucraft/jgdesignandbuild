import React, { useEffect } from "react";

import HomeLayout from "../components/homelayout";
import SEO from "../components/seo";

import logo from '../images/jg_logo.png';
import marleyEternit from '../images/cedral.jpg'
import house from '../images/house.jpg'

function IndexPage() {
  useEffect(() => {
    // let num = 0
    // setInterval( () => {
    //   num += 1
    //   if (num === 9) {
    //     num = 0
    //   }
    //   const slideshow = document.getElementById('slideshow')
    //   slideshow.style.backgroundImage = 'url(/slideshow/slide00'+num+'.jpg)'
    // }, 5000);
  })
  return (
    <HomeLayout>
      <SEO
        keywords={[`builders`, `property developers`, `extentions`, `refurbishments`]}
        title="Home"
      />

      <section id="slideshow" className="flex items-center justify-center min-h-screen">
        <div className="max-w-2xl font-bold text-center text-white">
          <img className="w-48 mx-auto" src={logo} alt="JG Design and Build Logo" />
          <h1 className="p-4 text-4xl">Complete Building and Property Development Services</h1>
          <h2 className="text-2xl">From Planning to Completion</h2>
        </div>
      </section>
      <section className="justify-between max-w-6xl py-16 mx-auto md:flex">
        <div className="flex-1 px-4">
          <p>
            Welcome to JG Design and Build, a friendly team with <strong>over 20 years experience</strong>. We offer complete building and property development services, from planning to completion. If you are looking for added space and luxury to your existing home, or if you want to undertake a renovation project, we have the reputation, knowledge and experience to get your development underway. You can rest assured knowing that all work undertaken from consultation through to completion is conducted in an efficient and professional manner by our team of builders and skilled craftsmen.
          </p>
          <img src={house} alt="House with blueprints" className="pt-4" />
        </div>
        <div className="flex-1 px-8">
          <p className="pb-4"><strong>Our Range of Building Services includes…</strong></p>
          <ul className="ml-4 list-disc">
            <li>Loft Conversions</li>
            <li>Extensions</li>
            <li>Garage Conversions</li>
            <li>Refurbishments</li>
            <li>Carpentry</li>
            <li>Roofing</li>
            <li>Kitchens</li>
            <li>Bathrooms</li>
            <li>Conservatories</li>
            <li>Wooden Flooring</li>
            <li>Decking</li>
            <li>Wall and Floor Tiling</li>
            <li>Windows and Doors</li>
            <li>Plastering</li>
            <li>External Rendering</li>
            <li>Electrical Work</li>
            <li>Plumbing</li>
            <li>Patios and Driveways</li>
            <li>Planning</li>
          </ul>
        </div>
        <div className="flex-1 px-4">
          <img src={marleyEternit} alt="MarleyEternit cedral weatherboard" className="pb-4" />
          <p className="pb-4">
            <strong>JG Design and Build are your recommended installers of MarleyEternit Cedral Weatherboard.</strong>
          </p>
          <p>
            Fibre cement Cedral Weatherboard external cladding is the ideal low maintenance, rot free alternative to traditional timber weatherboarding. With the visual appeal of natural timber, simplicity of installation and resistance to rot, Cedral Weatherboard is an attractive, low maintenance alternative to PVCu.
          </p>
        </div>
      </section>
    </HomeLayout>
  );
}

export default IndexPage;
