import React from 'react'
import Person4Icon from '@mui/icons-material/Person4';

export default function Visit(props) {
  return (
    <>
          <div class="modal fade modal-doctor" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content ">
                <div class="modal-header close-btn">
                  <h1 class="modal-title fs-5 title-modal" id="staticBackdropLabel">درخواست مشاوره</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex flex-column input-modal">
                  <input className='mb-4 rounded-2 border-1 p-2' placeholder='نام و نام خانوادگی' />
                  <input className='mb-4 rounded-2 border-1 p-2' placeholder='شماره تماس' />
                  <input className='mb-4 rounded-2 border-1 p-2' placeholder='نوع بیمه درمانی' />
                  <span className='name-doctor-modal'>دکتر {props.name} <Person4Icon /></span>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary w-100">ثبت نوبت شما</button>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
