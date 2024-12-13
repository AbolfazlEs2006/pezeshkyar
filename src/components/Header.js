import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './Header.css'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from 'react-router-dom';

export default function Header({children}) {
  return (
    <>
    <Navbar expand="lg">
      <Container style={{justifyContent: 'space-between', width: '100%'}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="/" className='Nav-logo'><img src='../img/logo.png' /></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="Nav-sm">
            <Link to={'/'}>صفحه اصلی</Link>
            <Link to={'/services'}>خدمات</Link>
            <Link to={'/product'}>فروشگاه</Link>
            <Link to={'/contactUs'}>تماس با ما</Link>
          </Nav>
        </Navbar.Collapse>
        <div className='Nav'>
        <button className='btn-reserve'><span> درخواست نوبت <i><CottageOutlinedIcon /></i></span></button>
        <Link to='/Myaccount'>
          <button className='btn-person'><i><PersonOutlineOutlinedIcon /></i></button>
        </Link>
        {children}
            </div>
      </Container>
    </Navbar>
    <h1 className='gray-line'></h1>
    </>
  )
}
