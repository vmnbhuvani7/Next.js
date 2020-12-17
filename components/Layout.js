import Link from "next/link";

const Layout = ({ children, title }) => (
    <div>
        <header>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/hireme"><a>Hire Me</a></Link>
        </header>
        <h1>{title}</h1>
        {children}
        <footer>&copy; {new Date().getFullYear()}</footer>
        <style jsx>
            {`
            header{
                width:100%;
                display:flex;
                justify-content:space-around;
                padding:1em;
                font-style:1.2rem;
                background:indigo;
                text-align:center
            }
            header a {
                color:darkgrey;
                text-weight:none;
            }
            `}
        </style>
        {/* <style global jsx>
            {`
            body{
                margin :0;
                font-size:110%;
                background:#f0f0f0
            }
            `}
        </style> */}
    </div>
)
export default Layout

// .root{
//     display:flex;
//     justify-content:center;
//     align-item:center;
//     flex-direction:column;
// }
// footer{
//     padding:1em;
// }
// header a:hover{
//     font-weight:bold;
//     color:lightgrey;
// }