import Head from 'next/head'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProfileTop from '../../components/ProfileTop'
import ProfileGrid from '../../components/ProfileGrid';

function profile({ name = "galfre.v" }) {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">

      <Head>
        <title> {name} | Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <ProfileTop />

      <hr className="mx-4 mt-5 lg:mt-12" />

      <ProfileGrid />

      

    </div>
  )
}

export default profile
