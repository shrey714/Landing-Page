const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DardiBook",
  url: "https://dardibook.in",
  description:
    "Healthcare practice management platform for appointments, patient records, prescriptions, diagnostics, and follow-ups.",
  sameAs: ["https://dardibook.in"],
};

const software = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DardiBook",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  url: "https://dardibook.in",
  description:
    "DardiBook helps doctors and clinic teams manage appointments, patient records, prescriptions, lab requests, and follow-ups from one workspace.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organization, software]),
      }}
    />
  );
}
