import React from 'react'
import Link from 'next/link';
import Layout from './Layout';

const About = () => {
    return (
        <>
            <Layout >
                <h1>About Page</h1>
            </Layout>
            <Link href="/">Back</Link>
        </>
    )
}

export default About
