import React from 'react'
import './send.css'
import { Container } from 'react-bootstrap'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

export default function Send() {
  return (
    <>
    <Container>
        <div className='send-box'>
            <div>
                <LocalGroceryStoreOutlinedIcon />
                <h1>ارسال فوری و رایگان محصولات</h1>
            </div>
            <div>
                <p>به مناسبت ورود شما به سایت پزشکیار ارسال کلیه محصولات تا آخر فروردین رایگان میباشد</p>
            </div>
        </div>
    </Container>
    </>
  )
}
