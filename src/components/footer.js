import React from 'react'
import { MainMenu } from './main-menu'

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white p-5">
        <MainMenu className="d-flex justify-content-center"/>
        &copy; {new Date().getFullYear()} Copyright by CosmoShop
    </footer>
  )
}

export default Footer