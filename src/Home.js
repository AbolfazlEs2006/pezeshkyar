import React from 'react'
import SubHeader from './components/SubHeader'
import Main from './components/Main'
import Header from './components/Header'
import Services from './components/Services'
import Doctor from './components/Doctor'
import Product from './components/Product'
import Send from './components/Send'
import Footer from './components/Footer'
import Titleline from './components/Titleline'


export default function Home() {
  return (
    <>
    <Header />
    <SubHeader />
    <Main />
    <Titleline title='خدمات پزشکیار'/>
    <Services />
    <Titleline title='متخصصین پزشکیار' />
    <Doctor />
    <Titleline title='محصولات ما' link='product'/>
    <Product />
    <Send />
    <Footer />
    </>
  )
}
