import React from 'react'
import './layout.scss'
import { Header } from './Header'
import { Footer } from './Footer'

const Layout = () => {
  return (
    <div className="container">
      <div className="layout">
        <Header/>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout
