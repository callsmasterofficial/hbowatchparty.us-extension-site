import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Text from '../components/Text'
import Text2 from '../components/Text2'
import Fask_ques from '../components/Fask_ques'
import Footer from '../components/Footer'
import Script from 'next/script'

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title:
          'HBO Watch Party - Watch HBO Max with Your Friends & Family Online',
        description:
          'HBO Watch Party allows you to watch HBO Max with friends & family from different locations online and chat with each other.',
        keywords:
          'HBO Watch Party, Watch Party HBO Max, HBO Go Watch Party, HBO Max Watch Party, HBO Party, HBO Max Party',
        pageUrl: 'https://www.hbowatchparty.us/',
        featuredImage: '/logo.png',
      },
    },
  }
}

const Home = () => {
  return (
    <div>
      <Script src="https://cdn.tailwindcss.com" />

      <Navbar />
      <Banner />
      <Text />
      <Text2 />
      <Fask_ques />
      <Footer />

      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
    </div>
  )
}

export default Home
