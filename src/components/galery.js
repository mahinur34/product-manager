import Image from 'next/image'
import React from 'react'

const Galery = () => {
  return (
    <div>

        <Image src="/images/iwatch.png" width={622} height={421} alt="..."
        className='img-fluid'/>

       <Image src="/images/nature.jpg" width={622} height={421} alt="..."
        className='img-fluid'/>
    </div>
  )
}

export default Galery