import DashBoardMenu from '@/components/dashboard-menu'
import React from 'react'
import { Container } from 'react-bootstrap'

const Layout = ({children}) => {
  return (
    <div>
        <DashBoardMenu/>
        <Container>{children}</Container>
        
        </div>
  )
}

export default Layout;