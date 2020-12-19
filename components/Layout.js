import Link from "next/link";
import Head from "next/head"
import Router from "next/router"
import NProgress from "nprogress"

Router.onRouteChangeStart = url => {
    console.log(url);
    NProgress.start();
}
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children, title }) => (
    <div>
        <Head>
            <title>NextPortfolio</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"></link>
        </Head>
        <header>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/hireme"><a>Hire Me</a></Link>
            <Link href="/blog"><a>Blog</a></Link>
        </header>

        <h1>{title}</h1>
        {children}
        <footer>&copy; {new Date().getFullYear()}</footer>
        <style jsx>
            {`
            div{
                text-align: center;
            }
            header{
                display:flex;
                justify-content:space-around;
                padding:1em;
                font-style:1.2rem;
                background:indigo;
                text-align:center;
            }
            header a {
                color:darkgrey;
                text-weight:none;
            }
            header a:hover {
                font-weight:bold;
                color:lightgrey;
            }
            `}
        </style>
    </div>
)
export default Layout