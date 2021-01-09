import PropTypes from "prop-types";
import React from "react";
import { graphql } from 'gatsby'

import Layout from "../components/layout";
import SEO from "../components/seo";

function TestimonialsPage({ data }) {
  return (
    <Layout>
      <SEO
        keywords={[`builders`, `property developers`, `extentions`, `refurbishments`]}
        title="Testimonials"
      />
      <section>
        <h1 className="text-4xl font-bold">Testimonials</h1>
        <div className="box-border md:masonry before:box-inherit after:box-inherit">
          {
            data.dataJson.testimonials.map(testimonial => (
              <div key={testimonial.title} className="p-8 my-6 bg-gray-100 rounded-lg break-inside">
              <p className="text-lg font-bold">{testimonial.text}</p>
                <p className="mt-2 text-sm">{testimonial.author}</p>
              </div>
            ))
          }
        </div>

      </section>
    </Layout>
  );

  
}

export const query = graphql`
  {
    dataJson {
      testimonials {
        title
        text
        author
      }
    }
  }
`

TestimonialsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TestimonialsPage;
