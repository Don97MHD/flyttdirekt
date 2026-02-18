import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar';
import ServiceSidebar from '../../components/ServiceSidebar/ServiceSidebar';
import Image from 'next/image';
import Head from 'next/head';
import pImg from '/public/images/service/2.jpg';

const KontorsstadningPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Kontorsstädning Stockholm - Ren Arbetsmiljö | Flyttdirekt</title>
                <meta name="description" content="Professionell kontorsstädning i Stockholm. Vi skapar en trivsam och ren arbetsmiljö för ditt företag. Flexibla städscheman och nöjd-kund-garanti." />
            </Head>
            <Navbar />
            <PageTitle pageTitle={'Kontorsstädning'} pagesub={'Företagstjänster'} />
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <Image src={pImg} alt="Kontorsstädning Stockholm" />
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>Professionell Kontorsstädning för en Bättre Arbetsdag</h2>
                                        <p>En ren arbetsplats är avgörande för trivsel, hälsa och produktivitet. Vi erbjuder <strong>kontorsstädning</strong> av högsta kvalitet för företag i hela Stockholm. Vi anpassar våra städrutiner efter era arbetstider för att inte störa verksamheten.</p>
                                        
                                        <h3>Vad ingår i vår företagsstädning?</h3>
                                        <ul>
                                            <li>Dammsugning och våttorkning av alla golv.</li>
                                            <li>Dammtorkning av fria ytor, skrivbord och hyllor.</li>
                                            <li>Rengöring av kök/pentry och toaletter.</li>
                                            <li>Tömning av papperskorgar och återvinning.</li>
                                        </ul>
                                        <p>Låt oss ta hand om städningen så att ni kan fokusera på er kärnverksamhet.</p>
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
export default KontorsstadningPage;