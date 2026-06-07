import PopularService1 from '@/components/Services/PopularService1'
import ServiceImageSlider from '@/components/Services/ServiceImageSlider'
import ServicesHeader from '@/components/Services/ServicesHeader'
import React from 'react'

const page = () => {
  return (
    <>
     <ServicesHeader />
    <PopularService1 />
    <ServiceImageSlider />
    </>
  )
}

export default page
