import React from 'react'
import abimg from '/public/images/about.jpg'
import sign from '/public/images/signeture.png'
import Image from 'next/image'
import Link from 'next/link'
const About = (props) => {
    return(
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="wpo-about-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <Image src={abimg} alt="Flyttdirekt team i arbete"/>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-12">
                            <div className="wpo-about-content">
                                <div className="wpo-section-title-s2">
                                    <h2>Över 25 års erfarenhet av flytt- & städtjänster</h2>
                                </div>
                                <div className="wpo-about-content-inner">
                                    <p>Flyttdirekt är mer än bara en flyttfirma. Vi är din kompletta partner som ser till att din övergång till ett nytt hem eller kontor blir så smidig och stressfri som möjligt. Med årtionden av erfarenhet i branschen har vi utvecklat processer och rutiner som garanterar högsta kvalitet i varje led.</p>
                                    <p>Med bas i Stockholm har vi hela Sverige som vår arbetsplats. Vi är särskilt specialiserade på långdistansflyttar till södra Sverige, och är en ofta anlitad <Link href="/flyttfirma-helsingborg/">flyttfirma för flytt till Helsingborg</Link> och hela Skåneregionen.</p>
                                    <div className="signeture">
                                        <h4>Lars Svensson</h4>
                                        <p>VD & Grundare, Flyttdirekt.se</p>
                                        <span><Image src={sign} alt="Lars Svensson signatur"/></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;