import React, { Fragment } from 'react';
// import { useRouter } from 'next/router'; // لم نعد بحاجة لهذا لجلب البيانات
import blogs from '../../api/blogs';
import Link from 'next/link';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import BlogSidebar from '../../components/BlogSidebar/BlogSidebar';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Image from 'next/image';
import Head from 'next/head';
import blog6 from '/public/images/blog-details/author.jpg';

// استيراد المكتبة الجديدة
import parse, { domToReact } from 'html-react-parser';

const submitHandler = (e) => {
    e.preventDefault();
};

// --- دالة مساعدة لإنشاء ID فريد من النص ---
const slugify = (text) => {
    if (!text) return '';
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-') 
        .replace(/[åä]/g, 'a') 
        .replace(/ö/g, 'o') 
        .replace(/[^\w\-]+/g, '') 
        .replace(/\-\-+/g, '-'); 
};

const BlogSingle = ({ BlogDetails, blRight, blLeft }) => { // استقبال البيانات كـ props

    // Fallback في حال كانت الصفحة غير موجودة (مع fallback: blocking لن تظهر هذه الحالة عادةً)
    if (!BlogDetails) {
        return (
            <Fragment>
                <Navbar />
                <section className="error-404-section section-padding">
                     <div className="container">
                        <div className="row">
                            <div className="col col-xs-12">
                                <div className="content clearfix">
                                    <div className="error-message">
                                        <h3>Hoppsan! Blogginlägget kunde inte hittas.</h3>
                                        <p>Vi kan inte hitta artikeln du letar efter. Den kan ha flyttats eller tagits bort.</p>
                                        <Link href="/blogg" className="theme-btn"><i className='fi flaticon-house'></i> Tillbaka till bloggen</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </Fragment>
        );
    }

    // --- هنا تتم معالجة المحتوى لإنشاء جدول المحتويات ---
    const headings = [];
    // نتأكد من وجود fullContent قبل المعالجة لتجنب الأخطاء
    const contentToParse = BlogDetails.fullContent || ''; 
    
    const contentWithIds = parse(contentToParse, {
        replace: (domNode) => {
            if (domNode.type === 'tag' && (domNode.name === 'h2' || domNode.name === 'h3')) {
                // استخلاص النص من الوسم
                const text = domNode.children.map(child => child.data || '').join('');
                const id = slugify(text);

                // التأكد من عدم وجود تكرار في الـ IDs
                let uniqueId = id;
                let counter = 1;
                while (headings.some(h => h.id === uniqueId)) {
                    uniqueId = `${id}-${counter}`;
                    counter++;
                }
                
                headings.push({
                    id: uniqueId,
                    text: text,
                    level: domNode.name, // 'h2' or 'h3'
                });

                // تعديل الوسم الأصلي لإضافة الـ id وإنشاء نسخة جديدة منه
                const newProps = { ...domNode.attribs, id: uniqueId };
                return React.createElement(domNode.name, newProps, domToReact(domNode.children));
            }
        },
    });

    // --- مكون جدول المحتويات ---
    const TableOfContents = () => (
        <div className="table-of-contents">
            <h4>I den här artikeln:</h4>
            <ol>
                {headings.map((heading) => (
                    <li key={heading.id} className={`toc-level-${heading.level}`}>
                        <a href={`#${heading.id}`}>{heading.text}</a>
                    </li>
                ))}
            </ol>
        </div>
    );

    return (
        <Fragment>
            <Head>
                <title>{BlogDetails.title} | Flyttdirekt Blogg</title>
                <meta name="description" content={BlogDetails.description} />
            </Head>
            <Navbar />
            <PageTitle pageTitle={BlogDetails.title} pagesub={BlogDetails.title} />
            <section className="wpo-blog-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className={`col col-lg-8 col-12 ${blRight}`}>
                            <div className="wpo-blog-content">
                                <div className="post format-standard-image">
                                    <div className="entry-media">
                                        <Image src={BlogDetails.blogSingleImg} alt={BlogDetails.title} />
                                    </div>
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="fi flaticon-user"></i> Av <Link href="/om-oss">{BlogDetails.author}</Link></li>
                                            <li><i className="fi flaticon-comment-white-oval-bubble"></i> Kommentarer {BlogDetails.comment}</li>
                                            <li><i className="fi flaticon-calendar"></i> {BlogDetails.create_at}</li>
                                        </ul>
                                    </div>
                                    
                                    {headings.length > 0 && <TableOfContents />}

                                    <div>{contentWithIds}</div>

                                </div>

                                <div className="tag-share clearfix">
                                    <div className="tag">
                                        <span>Dela: </span>
                                        <ul>
                                            <li><Link href="/"><i className="ti-facebook"></i></Link></li>
                                            <li><Link href="/"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link href="/"><i className="ti-linkedin"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="author-box">
                                    <div className="author-avatar">
                                        <Link href="/" target="_blank"><Image src={BlogDetails.authorImg || blog6} alt={BlogDetails.author} /></Link>
                                    </div>
                                    <div className="author-content">
                                        <Link href="/" className="author-name">Skribent: {BlogDetails.author}</Link>
                                        <p>En av våra experter på Flyttdirekt med lång erfarenhet inom {BlogDetails.authorTitle.toLowerCase()}.</p>
                                    </div>
                                </div>

                                <div className="comments-area">
                                    <div className="comments-section">
                                        <h3 className="comments-title">{BlogDetails.comments && BlogDetails.comments.length > 0 ? 'Kommentarer' : 'Inga kommentarer ännu'}</h3>
                                        {BlogDetails.comments && BlogDetails.comments.length > 0 && (
                                            <ol className="comments">
                                                {BlogDetails.comments.map((comment, i) => (
                                                    <li className="comment" id={`comment-${i+1}`} key={i}>
                                                        <div className="comment-main-area">
                                                            <div className="comment-wrapper">
                                                                <div className="comments-meta">
                                                                    <h4>{comment.author} <span className="comments-date">{comment.date}</span></h4>
                                                                </div>
                                                                <div className="comment-area">
                                                                    <p>{comment.text}</p>
                                                                    <div className="comments-reply">
                                                                        <Link className="comment-reply-link" href="#"><span>Svara</span></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ol>
                                        )}
                                    </div>
                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">Lämna en kommentar</h3>
                                        <form onSubmit={submitHandler} id="commentform" className="comment-form">
                                            <div className="form-textarea">
                                                <textarea id="comment" placeholder="Skriv din kommentar..."></textarea>
                                            </div>
                                            <div className="form-inputs">
                                                <input placeholder="Ditt namn" type="text" />
                                                <input placeholder="Din e-post" type="email" />
                                                <input placeholder="Hemsida (frivilligt)" type="url" />
                                            </div>
                                            <div className="form-submit">
                                                <input id="submit" value="Skicka kommentar" type="submit" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BlogSidebar blLeft={blLeft} />
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

// --- إعداد SEO الثابت (SSG) ---

export async function getStaticPaths() {
    const paths = blogs.map((blog) => ({
        params: { slug: blog.slug },
    }));

    // fallback: blocking يعني أن الصفحات الجديدة ستولد عند الطلب الأول بدلاً من إعطاء 404
    return { paths, fallback: 'blocking' }; 
}

export async function getStaticProps({ params }) {
    const BlogDetails = blogs.find((item) => item.slug === params.slug);

    if (!BlogDetails) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            BlogDetails,
        },
        revalidate: 60, // تحديث الصفحة كل 60 ثانية (ISR)
    };
}

export default BlogSingle;