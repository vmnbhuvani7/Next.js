import Link from 'next/link'
import React, { Component } from 'react';
import Layout from '../components/Layout'
import Error from './_error'

export default class about extends Component {
    static async getInitialProps() {
        const res = await fetch("https://api.github.com/users/reedbarger")
        const data = await res.json()

        //if api wrong or not going to then block then exicute status code and display error component
        const statusCode = res.status > 200 ? res.status : false;

        return { user: data, statusCode }
    }

    render() {
        const { user, statusCode } = this.props
        if (statusCode) {
            return <Error statusCode={statusCode} />
        }
        return (
            <Layout title="About" >
                <p>{user.name}</p>
                <Link href="/">Go to home </Link>

                <p>About page</p>
                <img src={user.avatar_url} alt="Reed" height='200px' />
            </Layout>
        )
    }
}