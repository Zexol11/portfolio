import React from "react";

const StructuredData = () => {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ed Kenneth",
    jobTitle: "Full-Stack Software Engineer",
    sameAs: [
      "https://github.com/ed-kenneth", // Placeholder
      "https://linkedin.com/in/edkenneth", // Placeholder
    ],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ed Kenneth | Full-Stack Software Engineer",
    url: "https://edkenneth.com",
    description: "Portfolio of Ed Kenneth, a Full-Stack Software Engineer specializing in React, ASP.NET, and TypeScript.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
};

export default StructuredData;
