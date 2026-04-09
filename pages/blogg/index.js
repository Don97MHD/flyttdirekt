import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import BlogList from '../../components/BlogList/BlogList';
import Scrollbar from '../../components/scrollbar/scrollbar';
import SEO from '../../components/SEO/SEO';
import JsonLd from '../../components/SEO/JsonLd';
import { BreadcrumbSchema } from '../../components/SEO/StructuredData';

const BlogPage = (props) => {
    const breadcrumbs = BreadcrumbSchema([
        { name: 'Home', url: 'https://www.flyttdirekt.se' },
        { name: 'Blogg', url: 'https://www.flyttdirekt.se/blogg/' },
    ]);

    return (
        <Fragment>
            <SEO
                title="Blogg - Flyttips och Guider | Flyttdirekt.se"
                description="Läs våra senaste blogginlägg fyllda med tips och guider för en enklare och smidigare flytt. Allt från packningstips till checklistor."
                canonical="https://www.flyttdirekt.se/blogg/"
                ogImage="https://www.flyttdirekt.se/images/blog-banner.jpg"
            />
            <JsonLd data={breadcrumbs} />
            <Navbar />
            <PageTitle pageTitle='Vår Blogg' pagesub="Blogg" />
            <BlogList/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogPage;