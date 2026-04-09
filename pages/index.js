
import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/hero/Hero';
import Scrollbar from '../components/scrollbar/scrollbar';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import LocationSection from '../components/LocationSection/LocationSection'; // استيراد المكون الجديد
import WorkSection from '../components/WorkSection/WorkSection';
import Appointment from '../components/Appointment/Appointment';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import TeamSection from '../components/TeamSection/TeamSection';
import Testimonial from '../components/Testimonial/Testimonial';
import BlogSection from '../components/BlogSection/BlogSection.js';
import PartnerSection from '../components/PartnerSection/PartnerSection';
import Footer from '../components/footer/Footer.js';
import SEO from '../components/SEO/SEO';
import JsonLd from '../components/SEO/JsonLd';
import { LocalBusinessSchema, OrganizationSchema } from '../components/SEO/StructuredData';
import SEOContent from '../components/SEOContent';

const HomePage = () => {
    const localBusinessSchema = LocalBusinessSchema({
        name: 'Flyttdirekt',
        telephone: '+46701234567',
        email: 'info@flyttdirekt.se',
        address: {
            street: 'Storgatan 1',
            locality: 'Stockholm',
            postalCode: '10120',
            country: 'SE',
        },
    });

    return (
        <Fragment>
            <SEO
                title="Flyttfirma Stockholm | Flytthjälp & Flyttstädning | Flyttdirekt"
                description="Flyttdirekt är din pålitlig flyttfirma i Stockholm. Vi erbjuder professionell flytthjälp, flyttstädning med garanti, och säker magasinering. Få en kostnadsfri offert!"
                canonical="https://www.flyttdirekt.se"
                ogImage="https://www.flyttdirekt.se/images/hero-banner.jpg"
            />
            <JsonLd data={localBusinessSchema} />
            <JsonLd data={OrganizationSchema} />
            <Navbar />
            <Hero />
            <ServiceSection />
            <LocationSection /> {/* إضافة المكون الجديد هنا */}
            <WorkSection />
            <Appointment />
            <ProjectSection />
            <TeamSection />
            <Testimonial />
            <BlogSection/>
            <PartnerSection />
            <SEOContent />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage;