import ContactForm from '@/components/Contact/ContactForm'
import ContactHeader from '@/components/Contact/ContactHeader'
import ContactMap from '@/components/Contact/ContactMap'
import React from 'react'

const page = () => {
  return (
    <>
     <ContactHeader />
     <ContactForm />
     <ContactMap />
    </>
  )
}

export default page
