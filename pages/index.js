import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Text from '../components/Text'
import Text2 from '../components/Text2'
import Fask_ques from '../components/Fask_ques'
import Footer from '../components/Footer'
import Script from 'next/script'
import { getAllmeta, getHome } from '../locale/index'

export async function getStaticProps({ locale }) {
  const home = getHome(locale)
  const allmeta = getAllmeta(locale)
  return {
    props: {
      home,
      allmeta,
      meta: {
        title: allmeta.homeMetaTitle,
        description: allmeta.homeMetadescription,
        keywords: allmeta.homeMetakeywords,
        pageUrl: 'https://www.hbowatchparty.us/',
        featuredImage: '/logo.png',
      },
    },
  }
}

const Home = ({ home }) => {
  return (
    <div>
      <Script src="https://cdn.tailwindcss.com" />

      <Navbar installBtn={home.header.installBtn} />
      <Banner heading={home.header.navBarHeading} />
      <Text installBtn={home.header.installBtn} home={home} />
      <Text2 installBtn={home.header.installBtn} home={home} />
      <Fask_ques home={home} />
      <Footer installBtn={home.header.installBtn} footer={home.footer} />

      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
    </div>
  )
}

export default Home
