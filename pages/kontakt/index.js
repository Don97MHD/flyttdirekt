import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage'
import Footer from '../../components/footer/Footer.js'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Head from 'next/head';
const ContactPage =() => {
    return(
        <Fragment>
            <Head>
                <title>Kontakta Oss - Få en offert idag | Flyttdirekt.se</title>
                <meta name="description" content="Kontakta Flyttdirekt för frågor om flytt, städning eller magasinering. Vi erbjuder kostnadsfria offerter och snabb service." />
            </Head>
            <Navbar/>
            <PageTitle pageTitle={'Kontakta Oss'} pagesub={'Kontakt'}/> 
            <Contactpage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;