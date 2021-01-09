import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ServicesPage() {
  return (
    <Layout>
      <SEO
        keywords={[`builders`, `property developers`, `extentions`, `refurbishments`]}
        title="Services"
      />
      <section>
        <h1 className="text-4xl font-bold">Services</h1>
        <p>This is where the services will be listed.</p>
      </section>
    </Layout>
  );
}

export default ServicesPage;
