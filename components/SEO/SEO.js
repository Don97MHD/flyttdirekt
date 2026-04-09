import Head from 'next/head';

export default function SEO({
  title = 'Flyttdirekt.se - Din Partner för en Stressfri Flytt',
  description = 'Flyttdirekt är din pålitlig flyttfirma. Vi erbjuder professionell flytthjälp, flyttstädning med garanti och säker magasinering.',
  canonical = 'https://www.flyttdirekt.se',
  ogTitle,
  ogDescription,
  ogImage = 'https://www.flyttdirekt.se/og-image.jpg',
  ogUrl,
  ogType = 'website',
  twitterHandle = '@flyttdirekt',
  twitterCardType = 'summary_large_image',
  children,
}) {
  const siteUrl = 'https://www.flyttdirekt.se';
  const finalOgUrl = ogUrl || canonical;
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={finalOgUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Flyttdirekt.se" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCardType} />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={ogImage} />
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}

      {/* Language and Region */}
      <meta name="language" content="Swedish" />
      <meta name="geo.region" content="SE" />
      <meta name="geo.placename" content="Sweden" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Flyttdirekt.se" />
      <link rel="alternate" hrefLang="sv" href={canonical} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Any additional children elements */}
      {children}
    </Head>
  );
}
