import React, { Component } from 'react'
import Link from "next/link";
import Layout from "./Layout";

export class Home extends Component {
  static async getInitialProps({ query }) {
    return query
  }
  render() {
    return (
      <>
        <Layout >
          <Post id="vaman" title="vaman" />
          <Post id="vmn-bhuvani" title="vmn bhuvani" />
        </Layout>
      </>
    )
  }
}

const Post = (props) => {
  return (
    <div>
      <Link href={`/Post?title=${props.title}`} as="/post/name">{props.title}</Link>
    </div>
  )
}

export default Home