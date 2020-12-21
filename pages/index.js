import Link from "next/link"
import Layout from '../components/Layout'

const Index = () => (
  <Layout title="Home">
    
    <Link href="/about"> Go to About</Link>
    <p>Home page</p>
  </Layout>
)
export default Index