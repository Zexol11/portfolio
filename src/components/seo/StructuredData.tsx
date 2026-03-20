import React from "react";

const StructuredData = () => {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ed Kenneth",
    jobTitle: "Full-Stack Software Engineer",
    sameAs: [
      "https://github.com/Zexol11", 
      "https://linkedin.com/in/ed-kenneth-g", 
    ],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ed Kenneth | Full-Stack Software Engineer",
    url: "https://edkenneth.vercel.app",
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
