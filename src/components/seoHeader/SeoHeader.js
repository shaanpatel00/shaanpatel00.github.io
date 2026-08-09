import React from "react";
import { Helmet } from "react-helmet";
import {
  greeting,
  seo,
  socialMediaLinks,
  experience,
  contactPageData,
  certifications,
} from "../../portfolio.js";

function SeoHeader() {
  let sameAs = [];
  socialMediaLinks
    .filter(
      (media) =>
        !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
    )
    .forEach((media) => {
      sameAs.push(media.link);
    });

  let mail = socialMediaLinks
    .find((media) => media.link.startsWith("mailto"))
    .link.substring("mailto:".length);
  let job = experience.sections
    ?.find((section) => section.work)
    ?.experiences?.at(0) ||
    experience.sections?.[0]?.experiences?.[0] || {
      title: "Computer Engineer",
      company: "Georgia Tech",
    };

  let credentials = [];
  certifications.certifications.forEach((certification) => {
    credentials.push({
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalCredential",
      url: certification.certificate_link,
      name: certification.title,
      description: certification.subtitle,
    });
  });
  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: greeting.title,
    url: seo?.og?.url,
    email: mail,
    telephone: contactPageData.phoneSection?.subtitle,
    sameAs: sameAs,
    jobTitle: job?.title || "Computer Engineer",
    worksFor: {
      "@type": "Organization",
      name: job?.company || "Georgia Tech",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: contactPageData.addressSection?.locality,
      addressRegion: contactPageData.addressSection?.region,
      addressCountry: contactPageData.addressSection?.country,
      postalCode: contactPageData.addressSection?.postalCode,
      streetAddress: contactPageData.addressSection?.streetAddress,
    },
    hasCredential: credentials,
  };
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo?.og?.title} />
      <meta property="og:type" content={seo?.og?.type} />
      <meta property="og:url" content={seo?.og?.url} />
      <meta
        property="og:image"
        content="https://shaanpatel00.github.io/icons/desc.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://shaanpatel00.github.io/icons/desc.png"
      />
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;
