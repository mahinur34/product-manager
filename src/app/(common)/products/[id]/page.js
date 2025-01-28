
//server componentler async olabilir

import { PageHeader } from '@/components/page-header'
import  ProductDetails  from '@/components/product-details'
import { RelatedProducts } from '@/components/related-products';
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

  const fetchProduct =  (await fetch(`${API_URL}/${id}`)).json(); //baştaki awaitleri kaldırınca direk getirecek ürürnleri, json un awaiti yok
  const fetchReleatedProducts =  (await fetch(`${API_URL}`)).json();

  //buradan toplu almış olduk, paralel fetching
  const [product, relatedProducts] = await Promise.all([ //aynı anda iki isteği almış oluyor
		fetchProduct,
		fetchReleatedProducts,
	]);

  //const data = await res.json();//gelen requesti json a çevirdik

  //if(!product.ok) throw new Error(product.message); //kullanıcıya gösterilmez

  //datanın olmama durumunu kontrol:
  if(!product) notFound();
  

  

  //console.log("Bu sayfa dinamik olarak oluşturuldu");

  //fetch


  return (
    <>
      <PageHeader title={product.title}/>
       <ProductDetails data={product} />
       <RelatedProducts data={relatedProducts} />
       </>
  )
}

export default Page;


///burada aynı adrese iki tane fetch yapıldı fakat performans kaybına neden olmaz çünkü request memorization
//buna olanak sağlıyor. Birden fazla request için request memorization tekrar tekrar data cache e veya data source ye gitmez.

//request memorization un kapasitesi düşük ama çok hızlı, ve remde dir.