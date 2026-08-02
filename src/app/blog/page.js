import InstituteListingSection from '@/components/Blog/InstituteListingSection'
import LatestPostsSection from '@/components/Blog/LatestPostsSection'
import PopularPostsGrid from '@/components/Blog/PopularPostsGrid'
import React from 'react'

const page = () => {
  return (
    <>
      <LatestPostsSection />
      <PopularPostsGrid />
    </>
  )
}

export default page
