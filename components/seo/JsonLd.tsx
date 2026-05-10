"use client";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tiny Tummies",
    url: "https://tinytummies.com",
    logo: "https://tinytummies.com/images/logo-full.png",
    description: "Fresh, balanced meals for children delivered to schools and homes across Bengaluru.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@tinytummies.com",
      telephone: "+917975465679",
      areaServed: "IN",
      availableLanguage: ["English", "Kannada"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/tinytummies",
      "https://www.facebook.com/tinytummies",
    ],
  };
  return <JsonLd data={schema} />;
}

export function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tiny Tummies Kids Meal Service",
    description: "Healthy, freshly prepared meal boxes for children (2-6 years) delivered to schools and homes in Bengaluru.",
    provider: {
      "@type": "Organization",
      name: "Tiny Tummies",
      url: "https://tinytummies.com",
    },
    areaServed: {
      "@type": "City",
      name: "Bengaluru",
    },
    serviceType: "Children's Meal Delivery",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Meal Plans",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Starter Munch Plan",
          price: "599",
          priceCurrency: "INR",
          unitCode: "WEEK",
        },
        {
          "@type": "Offer",
          name: "Growth Munch Plan",
          price: "1499",
          priceCurrency: "INR",
          unitCode: "MONTH",
        },
        {
          "@type": "Offer",
          name: "Super Munch Plan",
          price: "2499",
          priceCurrency: "INR",
          unitCode: "MONTH",
        },
      ],
    },
  };
  return <JsonLd data={schema} />;
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I pause or skip my subscription?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can pause, skip or reschedule meals from your account or by contacting support.",
        },
      },
      {
        "@type": "Question",
        name: "What time are meals delivered?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Meals are delivered every morning before school meal time based on your area.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver on weekends?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard school plans run on working days. Weekend options can be arranged for select plans.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if you deliver to my area?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use delivery checker or WhatsApp us your PIN code. We currently cover Bengaluru and nearby areas.",
        },
      },
    ],
  };
  return <JsonLd data={schema} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <JsonLd data={schema} />;
}