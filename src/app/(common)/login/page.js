import { PageHeader } from '@/components/page-header'
import React from 'react'

export const metadata ={
  title:"Login",
  description :"High quality products",
}

const Page = () => {

  //throw new Error("Login Error");
  return (
    <div>
      <PageHeader title="Login" />
    </div>
  )
}

export default Page;