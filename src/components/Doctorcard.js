import React from 'react'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Visit from './Visit';

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
                <button type="button" class="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><ChatOutlinedIcon /> درخواست مشاوره </button>
            </div>
        </div>
        <Visit name={props.name} />
    </>
  )
}
