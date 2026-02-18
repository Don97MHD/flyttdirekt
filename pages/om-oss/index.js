import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import WorkSection from '../../components/WorkSection/WorkSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import FunFact from '../../components/FunFact/FunFact';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer.js'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Head from 'next/head';
const AboutPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Om Oss - Vilka är Flyttdirekt? | Flyttdirekt.se</title>
                <meta name="description" content="Läs mer om Flyttdirekt, din pålitliga flyttfirma. Vi har lång erfarenhet av flytt och städ i Stockholm och hela Sverige." />
            </Head>
            <Navbar/>
            <PageTitle pageTitle={'Om Oss'} pagesub={'Om Oss'} />
            <About />
            <ServiceSection />
            <WorkSection />
            <TeamSection />
            <Testimonial />
            <FunFact fClass={'wpo-fun-fact-section-s2'}/>
            <PartnerSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default AboutPage;