import React from 'react'
import Navbar from "../components/Navbar"
import Error from '../components/404'

export async function getStaticProps(){
  return {
    props:{
      meta:{
        title:"HBO Watch Party - Watch HBO Max with Your Friends & Family Online",
        description:"HBO Watch Party allows you to watch HBO Max with friends &amp; family from different locations online and chat with each other.",
        keywords:"HBO Watch Party, Watch Party HBO Max, HBO Go Watch Party, HBO Max Watch Party, HBO Party, HBO Max Party",
        pageUrl:"https://www.hbowatchparty.us/",
        featuredImage:"/logo.png"
      }
    }
  }
}
function error() {
  return (
    <div className='error_404 '>
      <div>
        <Navbar/>
      </div>
      <Error/>
    </div>
  )
}

export default error