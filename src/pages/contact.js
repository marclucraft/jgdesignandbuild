import React, { useState } from "react"
import axios from "axios"
import Layout from "../components/layout"
import SEO from "../components/seo"

import house from '../images/house.jpg'

function ContactPage() {
  const [, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/0dbcaaec-6193-432d-aede-c7731ac6c2c4",
      data: new FormData(form)
    })
      .then(() => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <Layout>
      <SEO
        keywords={[`builders`, `property developers`, `extentions`, `refurbishments`, `contact`]}
        title="Contact"
      />
      <section>

        <div className="relative h-0 max-w-full mb-12 overflow-hidden pb-80"><iframe className="absolute top-0 left-0 w-full h-full" src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.021056947787!2d0.5654527000000068!3d51.5678475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8c4cd114218a9%3A0x776a824b9f33eb1b!2s33+Spencer+Rd%2C+Benfleet%2C+Essex+SS7!5e0!3m2!1sen!2suk!4v1432848664195' width='600' height='450' frameBorder='0'></iframe></div>

        <h1 className="pb-8 text-4xl font-bold">Arrange your free, no-obligation consultation...</h1>
        <div className="md:flex">
          <div>
            <p>
              <strong>Office:</strong> 01268 754581<br />
              <strong>Mobile:</strong> 07989 960973<br />
              <strong>Email:</strong> <a className="text-jg-green" href="john@jgdesignandbuild.co.uk">john@jgdesignandbuild.co.uk</a>
            </p>
            <img src={house} className="mt-8 w-60" />
          </div>
          <form className="flex-1 md:ml-12" onSubmit={handleOnSubmit}>
            <label
              className="block mb-2 text-xs font-bold uppercase"
              htmlFor="name"
            >
              Name
          </label>

            <input
              className="w-full mb-6 border-gray-800 rounded-md"
              name="name"
              placeholder="Joe Bloggs"
              type="text"
            />

            <label
              className="block mb-2 text-xs font-bold uppercase"
              htmlFor="Email"
            >
              Email
          </label>

            <input
              className="w-full mb-6 border-gray-800 rounded-md"
              name="email"
              placeholder="joe.bloggs@email.com"
              type="email"
            />

            <label
              className="block mb-2 text-xs font-bold uppercase"
              htmlFor="message"
            >
              Message
          </label>

            <textarea
              className="w-full mb-6 border-gray-800 rounded-md"
              name="message"
              placeholder="Say something..."
              rows="8"
            />

            <button className="px-8 py-3 text-white uppercase bg-jg-green">
              Submit
          </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
