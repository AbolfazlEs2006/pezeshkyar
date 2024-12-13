import React from 'react'
import './title.css'
import { Container } from 'react-bootstrap'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Link } from 'react-router-dom';

export default function Title(props) {
  return (
    <Container>
        <>
            <div className="container-title">
                <div className='title-title'>{props.title}</div>
                <div className="line"></div>
                <Link to={props.link}>
                  <button>مشاهده بیشتر <NavigateBeforeIcon /></button>
                </Link>
            </div>
        </>
    </Container>
  )
}
