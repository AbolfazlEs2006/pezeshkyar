import React from 'react'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

export default function CardDoctor (props) {
  return (
    <>
        <div className='card-doctor'>
            <div className='img-doctor-card'>
                <img src={props.img} />
            </div>
            <div className='about-doctor-card'>
                <h3>دکتر  {props.name}</h3>
                <p>{props.des}</p>
                <button><ChatOutlinedIcon /> درخواست مشاوره </button>
            </div>
        </div>
    </>
  )
}
