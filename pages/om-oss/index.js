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
import SEO from '../../components/SEO/SEO';
import JsonLd from '../../components/SEO/JsonLd';
import { OrganizationSchema, BreadcrumbSchema } from '../../components/SEO/StructuredData';

const AboutPage = () => {
    const breadcrumbs = BreadcrumbSchema([
        { name: 'Home', url: 'https://www.flyttdirekt.se' },
        { name: 'Om Oss', url: 'https://www.flyttdirekt.se/om-oss/' },
    ]);

    return (
        <Fragment>
            <SEO
                title="Om Oss - Vilka är Flyttdirekt? | Flyttdirekt.se"
                description="Läs mer om Flyttdirekt, din pålitlig flyttfirma. Vi har lång erfarenhet av flytt och städ i Stockholm och hela Sverige."
                canonical="https://www.flyttdirekt.se/om-oss/"
                ogImage="https://www.flyttdirekt.se/images/about-banner.jpg"
            />
            <JsonLd data={OrganizationSchema} />
            <JsonLd data={breadcrumbs} />
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