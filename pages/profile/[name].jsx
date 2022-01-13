import Head from 'next/head'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProfileTop from '../../components/ProfileTop'
import ProfileGrid from '../../components/ProfileGrid';
import ProfileStories from '../../components/ProfileStories'

function profile() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll overflow-x-hidden scrollbar-hide">

      <Head>
        <title> galfre.v | Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <ProfileTop />
      <ProfileStories />
      <hr className="mx-4 mt-5 lg:mt-5" />
      <ProfileGrid />

      <Footer />
      

    </div>
  )
}

export default profile
