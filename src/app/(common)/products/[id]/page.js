
//server componentler async olabilir

import { PageHeader } from '@/components/page-header'
import { notFound } from 'next/navigation'
import React from 'react'

export const generateMetadata = ()=> { //dinamik metadata, ürünleri dinamik alacağız
  //fetchData
  return {
    title :"?????",
    description :"???????"
  }
}


//sadece sayfalara page lerde ve route larda {params} kullanıyoruz, react ta componentler async yapılamaz ama next js te server comp async yapılabilir.
const Page = async({params}) => {

  const {id} = (await params)
  //const id = (await params).id;

  if(id==="100") notFound();

  console.log("Bu sayfa dinamik olarak oluşturuldu");

  //fetch


  return (
    <div>
      <PageHeader title="Product Details"/>
     
       Product Details Page : {id}</div>
  )
}

export default Page