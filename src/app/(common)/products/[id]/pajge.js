
//server componentler async olabilir
import React from 'react'

//sadece sayfalara page lerde ve route larda {params} kullanıyoruz, react ta componentler async yapılamaz ama next js te server comp async yapılabilir.
const Page = async({params}) => {

  const {id} = (await params)
  //const id = (await params).id;

  //fetch


  return (
    <div> Product Details Page : {id}</div>
  )
}

export default Page