import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white p-5">
        &copy; {new Date().getFullYear()} Copyright by CosmoShop
    </footer>
  )
}

export default Footer