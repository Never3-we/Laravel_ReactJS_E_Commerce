import React from 'react'
import Billboard from '../components/ui/Billboard'
import ClientHolder from '../components/ui/ClientHolder'
import Feature from '../components/ui/Feature'
import BestSelling from '../components/ui/BestSelling'
import Popular from '../components/ui/Popular'
import Quotation from '../components/ui/Quotation'
import SpecialOffer from '../components/ui/SpecialOffer'
import Subscribe from '../components/ui/Subscribe'
import LastBlog from '../components/ui/LastBlog'

export default function Home() {
  return (
    <div>
        <Billboard />
        <ClientHolder />
        <Feature />
        <BestSelling />
        <Popular />
        <Quotation />
        <SpecialOffer />
        <Subscribe />
        <LastBlog />
    </div>
  )
}
