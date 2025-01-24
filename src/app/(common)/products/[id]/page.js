
//server componentler async olabilir

import { PageHeader } from '@/components/page-header'
import  ProductDetails  from '@/components/product-details'
import { notFound } from 'next/navigation'
import React from 'react'

const API_URL =`https://67573dc0c0a427baf94c36b2.mockapi.io/api/v1/products`;

export const generateMetadata = async({params})=> { //dinamik metadata, ürünleri dinamik alacağız
  //fetchData

  const {id}= await params;
  const res = await fetch(`${API_URL}/${id}`);
  const data = await res.json();

  return {
    title :data.title,
    description :data.description,
  }
}


//sadece sayfalara page lerde ve route larda {params} kullanıyoruz, react ta componentler async yapılamaz ama next js te server comp async yapılabilir.
const Page = async({params}) => {

//const id = (await params).id;
  const {id} = await params; //id yi aldık

  if(!id) throw new Error("Product id not found"); //id olmama durumu

  const res = await fetch(`${API_URL}/${id}`);

  const data = await res.json();//gelen requesti json a çevirdik

  if(!res.ok) throw new Error(data.message); //kullanıcıya gösterilmez

  //datanın olmama durumunu kontrol:
  if(!data) notFound();
  

  

  //console.log("Bu sayfa dinamik olarak oluşturuldu");

  //fetch


  return (
    <>
      <PageHeader title={data.title}/>
     
       <ProductDetails product={data} />
       </>
  )
}

export default Page;