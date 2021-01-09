import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ProjectsPage() {
  return (
    <Layout>
      <SEO
        keywords={[`builders`, `property developers`, `extentions`, `refurbishments`]}
        title="Projects"
      />
      <section>
        <h1 className="text-4xl font-bold">Projects</h1>
        <p>This is where the projects will be listed.</p>
      </section>
    </Layout>
  );
}

export default ProjectsPage;
