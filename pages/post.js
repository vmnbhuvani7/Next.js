import React from 'react'
import Layout from '../components/Layout'

const Post = ({ url }) => (
    <Layout title={url.query.title}>

        <p>JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc.</p>
    </Layout>
)

export default Post
