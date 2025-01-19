import React from 'react'

const Page = async ({params}) => {

  const {id} =await params;
  return (
    <div>Dashboard Product Details Page: {id}</div>
  )
}

export default Page