import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'


const About = () => {

    return (
        <Layout title="About" >
            <Link href="/">Go to home </Link>
            <p>About page</p>
            <img src="/js.png" alt="javascript" />
        </Layout>
    )
}

export default About
{/* <Image
                src="/js.png"
                alt="Picture of the author"
                width={500}
                height={500}
            /> */}