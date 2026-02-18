import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar';
import ServiceSidebar from '../../components/ServiceSidebar/ServiceSidebar';
import Image from 'next/image';
import Head from 'next/head';
import pImg from '/public/images/service-single/2.jpg';

const BohagsflyttPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Bohagsflytt Stockholm - Trygg Flytt av Ditt Hem | Flyttdirekt</title>
                <meta name="description" content="Vi är experter på bohagsflytt i Stockholm. Låt oss ta hand om hela ditt bohag med säker transport, packhjälp och försäkring. Få offert nu!" />
            </Head>
            <Navbar />
            <PageTitle pageTitle={'Bohagsflytt'} pagesub={'Våra Tjänster'} />
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <Image src={pImg} alt="Bohagsflytt Stockholm" />
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>Trygg Bohagsflytt för Dig och Din Familj</h2>
                                        <p>En <strong>bohagsflytt</strong> är mer än bara transport av möbler; det är början på ett nytt kapitel. Vi på Flyttdirekt förstår vikten av att dina personliga ägodelar hanteras med största omsorg och respekt.</p>
                                        
                                        <h3>Vi skräddarsyr din flytt</h3>
                                        <p>Oavsett om du bor i en liten lägenhet i innerstaden eller en stor villa i förorten, anpassar vi oss efter dina behov. Vår tjänst för bohagsflytt inkluderar:</p>
                                        <ul>
                                            <li>Kostnadsfri besiktning och offert.</li>
                                            <li>Professionell packning (om önskas).</li>
                                            <li>Demontering och montering av större möbler.</li>
                                            <li>Säker transport i anpassade flyttbilar.</li>
                                        </ul>
                                        <p>Kontakta oss idag för en smidig flyttupplevelse där du kan känna dig helt trygg.</p>
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
export default BohagsflyttPage;