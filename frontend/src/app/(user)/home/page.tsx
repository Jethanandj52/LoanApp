import Login from '@/app/(auth)/login/Login'
import AboutUs from '@/app/components/AboutUs'
import CompanyIntro from '@/app/components/CompanyIntro'
import Contact from '@/app/components/Contact'
// import ContactUs from '@/app/components/Contact'
import Flexible from '@/app/components/Flexible'
import Hero from '@/app/components/Hero'
import MainLoad from '@/app/components/MainLoad'
import Nav from '@/app/components/Nav'
import Service from '@/app/components/Service'
import Tursted from '@/app/components/Tursted'
import React from 'react'

const home = () => {
  return (

    <>
    <div className='bg-gray-100'>
    {/* <MainLoad/> */}
      
{/* <Login/> */}
   <Hero/>
  <CompanyIntro/>
  <Service/>
  <Flexible/>
  <Tursted/>
  <AboutUs/>
  <Contact/>
    </div>
    </>
  )
}

export default home