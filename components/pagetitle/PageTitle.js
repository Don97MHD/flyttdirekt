import React from 'react'
import Link from "next/link";

const PageTitle = (props) => {
    return(
        <section className="wpo-page-title">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-breadcumb-wrap">
                            <h1>{props.pageTitle}</h1>
                            <ol className="wpo-breadcumb-wrap">
                                <li><Link href="/">Home</Link></li>
                                <li><span>{props.pagesub}</span></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;