import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOHead = ({ 
  title = "DcInteriors - Best Interior Designer in Pune Baner | Design Concept Interiors",
  description = "Design Concept Interiors (DcInteriors) - Leading interior designers in Pune Baner. Specializing in residential & commercial interior design, home renovation, office interiors. Located near Kirloskar Brother Ltd, Baner Pune. Call 9975458787",
  keywords = "DcInteriors, Design Concept Interiors, interior designer in Pune, interior designer in Baner, best interior designer Pune Baner, home interior design Pune, office interior design Baner, residential interior design, commercial interior design, home renovation Pune, interior decorator Baner, luxury interior design Pune, modern interiors Baner, Kirloskar Brother Ltd Baner, Egale era office Baner",
  image = "/og-image.jpg",
  canonical
}) => {
  const location = useLocation();
  const siteUrl = "https://dcinteriors-website.onrender.com";
  const fullUrl = canonical || `${siteUrl}${location.pathname}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Design Concept Interiors",
    "alternateName": "DcInteriors",
    "description": "Leading interior designers in Pune Baner specializing in residential and commercial interior design",
    "image": `${siteUrl}/logo.jpg`,
    "telephone": "+919975458787",
    "email": "designconcept.interior.dc@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Egale era Office no -102 near kirloskar brother ltd",
      "addressLocality": "Baner",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN",
      "postalCode": "411045"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.5593",
      "longitude": "73.7824"
    },
    "sameAs": [
      "https://www.instagram.com/designconceptinteriors8787/"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "serviceArea": {
      "@type": "City",
      "name": "Pune"
    },
    "priceRange": "Contact for Quote",
    "url": siteUrl
  };

  useEffect(() => {
    // Update document title
    document.title = title;

    // Remove existing meta tags
    const existingMetas = document.querySelectorAll('meta[data-seo]');
    existingMetas.forEach(meta => meta.remove());

    // Create meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: 'Design Concept Interiors' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1' },
      
      // Geo tags
      { name: 'geo.region', content: 'IN-MH' },
      { name: 'geo.placename', content: 'Baner, Pune' },
      { name: 'geo.position', content: '18.5593;73.7824' },
      { name: 'ICBM', content: '18.5593, 73.7824' },
      
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: `${siteUrl}${image}` },
      { property: 'og:url', content: fullUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Design Concept Interiors' },
      { property: 'og:locale', content: 'en_IN' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${siteUrl}${image}` },
      
      // Additional SEO
      { name: 'theme-color', content: '#6B7280' },
      { name: 'msapplication-TileColor', content: '#6B7280' },
    ];

    // Add meta tags to head
    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.name) meta.setAttribute('name', tag.name);
      if (tag.property) meta.setAttribute('property', tag.property);
      meta.setAttribute('content', tag.content);
      meta.setAttribute('data-seo', 'true');
      document.head.appendChild(meta);
    });

    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // Add structured data
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, image, fullUrl]);

  return null;
};

export default SEOHead;