import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    // جلب مسار الصفحة الحالي لتمريره إلى المكون
    return { ...initialProps, asPath: ctx.asPath };
  }

  render() {
    // تحديد رابط الموقع الأساسي
    const siteUrl = 'https://www.flyttdirekt.se';
    // بناء الرابط الكامل للصفحة الحالية
    const canonicalUrl = (siteUrl + (this.props.asPath === "/" ? "" : this.props.asPath)).replace(/\/$/, "") + "/";


    return (
      // 1. إضافة سمة اللغة إلى وسم HTML
      <Html lang="sv">
        <Head>
          {/* 2. إضافة وسوم hreflang لتحديد اللغة لمحركات البحث */}
          <link rel="alternate" hrefLang="sv" href={canonicalUrl} />
          <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

          {/* أكوادك الحالية */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
          <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;