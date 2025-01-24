import { DashboardProductList } from '@/components/dashboard-product-list';
import React from 'react'

const API_URL = `https://67573dc0c0a427baf94c36b2.mockapi.io/api/v1/products`

const Page = async () => {

  const res = await fetch(API_URL); 
  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  return (
    <DashboardProductList products={data}/>
  )
}

export default Page