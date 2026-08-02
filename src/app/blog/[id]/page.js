import PostDetails from '@/components/Blog/InstituteListingSection';
import React from 'react';

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <PostDetails id={id} />
    </>
  );
}

export default page;