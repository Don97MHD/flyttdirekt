import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar';
import ServiceSidebar from '../../components/ServiceSidebar/ServiceSidebar';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

// استخدام صور احترافية من المجلد الموجود عندك
import serviceImg from '/public/images/service/1.jpg'; 
import serviceImg2 from '/public/images/service-single/2.jpg';

const StockholmGoteborgPage = () => {
    const canonicalUrl = "https://www.flyttdirekt.se/flyttfirma-stockholm-goteborg/";

    return (
        <Fragment>
            <Head>
                {/* استهداف الكلمة المفتاحية بدقة في العنوان */}
                <title>Flyttfirma Stockholm Göteborg - Fast Pris & Trygg Flytt</title>
                <meta name="description" content="Ska du flytta mellan Stockholm och Göteborg? Vi är en erfaren flyttfirma som erbjuder fasta priser, full försäkring och smidig långdistansflytt. Begär offert!" />
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            <Navbar />
            <PageTitle pageTitle={'Flyttfirma Stockholm Göteborg'} pagesub={'Långdistansflytt'} />
            
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <Image src={serviceImg} alt="Flyttfirma Stockholm Göteborg - Långdistansflytt" />
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>Din expert på flytt mellan Stockholm و Göteborg</h2>
                                        <p>
                                            Att flytta mellan Sveriges två största städer kräver planering و logistik. Som en ledande <strong>flyttfirma Stockholm Göteborg</strong>, har vi specialiserat oss på just denna rutt. Vi kör varje vecka och kan därför erbjuda både samlastning och dedikerade flyttbilar till mycket konkurrenskraftiga priser.
                                        </p>

                                        <h3>Varför välja oss för din flytt till Göteborg?</h3>
                                        <ul>
                                            <li><strong>Fast pris:</strong> Inga dolda avgifter för restid eller drivmedel.</li>
                                            <li><strong>Samlastning:</strong> Ett billigare alternativ för dig med mindre bohag.</li>
                                            <li><strong>Trygghet:</strong> Fullt försäkrade transporter via Trygg-Hansa.</li>
                                            <li><strong>Helhetslösning:</strong> Vi kan även hjälpa till med <Link href="/flyttstadning/">flyttstädning</Link> på båda orterna.</li>
                                        </ul>

                                        <div className="wpo-service-single-sub-img" style={{marginTop: '30px'}}>
                                            <Image src={serviceImg2} alt="Packning för långdistansflytt" />
                                        </div>

                                        <h3>Pris för flyttfirma Stockholm Göteborg</h3>
                                        <p>
                                            Priset baseras på volymen (antal kubikmeter) och om du väljer en dedikerad bil eller samlastning. Genom att använda <strong>RUT-avdraget</strong> kan du halvera arbetskostnaden, vilket gör din flytt mellan Stockholm och Göteborg mycket prisvärd.
                                        </p>
                                        
                                        <div className="cta-widget" style={{backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '5px', textAlign: 'center', margin: '40px 0', border: '1px solid #eee'}}>
                                            <h3>Få en gratis offert för din långflytt</h3>
                                            <p>Vi återkommer med ett prisförslag inom 24 timmar.</p>
                                            <Link href="/kontakt" className="theme-btn">Begär Pris Nu</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ServiceSidebar />
                    </div>
                </div>
            </section>

            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default StockholmGoteborgPage;