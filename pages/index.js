import Header from 'components/header'
import Layout from 'components/layout'
import Hero from 'components/hero'
import Footer from 'components/footer'
const Home = () => {
  return (
    <>
      <Header />

      <main>
        <Layout>
          <Hero />
        </Layout>
      </main>

      <Footer />
    </>
  )
}
export default Home
