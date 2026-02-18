import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar';
import ServiceSidebar from '../../components/ServiceSidebar/ServiceSidebar';
import Image from 'next/image';
import Head from 'next/head';
import pImg from '/public/images/service/6.jpg';

const TungaLyftPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Tunga Lyft & Specialtransport Stockholm | Flyttdirekt</title>
                <meta name="description" content="Vi utför tunga lyft av kassaskåp, maskiner och pianon i Stockholm. Certifierad personal och rätt utrustning för säkra specialtransporter." />
            </Head>
            <Navbar />
            <PageTitle pageTitle={'Tunga Lyft & Specialtransport'} pagesub={'Våra Tjänster'} />
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <Image src={pImg} alt="Tunga lyft och transport" />
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>Experter på Tunga Lyft och Komplicerade Flyttar</h2>
                                        <p>Vissa föremål kräver mer än bara styrka; de kräver teknik, erfarenhet och rätt utrustning. Vi på Flyttdirekt är specialister på <strong>tunga lyft</strong>. Oavsett om det gäller ett tungt kassaskåp, en värmepump eller industriella maskiner, har vi lösningen.</p>
                                        
                                        <h3>Vi hanterar bland annat:</h3>
                                        <ul>
                                            <li>Kassaskåp och vapenskåp.</li>
                                            <li>Stora servrar och teknisk utrustning.</li>
                                            <li>Industrimaskiner och kopieringsmaskiner.</li>
                                            <li>Skrymmande konstverk och skulpturer.</li>
                                        </ul>
                                        <p>Säkerheten kommer alltid först. Vi använder godkänd utrustning och bärselar för att skydda både personal, gods och fastighet.</p>
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
export default TungaLyftPage;