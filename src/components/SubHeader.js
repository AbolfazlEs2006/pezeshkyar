import React from 'react'
import { Navbar , Container } from 'react-bootstrap'
import './SubHeader.css'
import Swipers from "./Swipers"


export default function SubHeader() {
  return (
    <>
      <Navbar expand="lg d-flex">
        <Container className='sub-container'>
          <Navbar.Brand href="/" className='Nav-logo me-0'><img src='./img/article.png' /></Navbar.Brand>
          <Swipers />
          <input className='sub-search' placeholder='جستجوی سرویس مورد نظرتان...' type='search'></input>
        </Container>
    </Navbar>
    </>
  )
}
