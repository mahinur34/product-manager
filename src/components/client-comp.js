"use client";
import { testAction } from '@/actions/test-action';
import React from 'react'
import { Button } from 'react-bootstrap';

export const ClientComp = ({children}) => {

  const handleClick = () => {
    testAction(15); //burada göründü, consolda
  }
  return (
    <div>ClientComp
      {children}

      <Button onClick={handleClick}>Delete</Button> {/* client side componenti bile serverda çalışan fonksiyona bağlayabiliriz */}
    </div>
  )
}
//server console.log ları burdan takip edebilirz
