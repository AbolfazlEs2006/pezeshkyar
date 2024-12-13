import React from 'react'
import './Loggin.css'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export default function Loggin() {
  return (
    <>
    <Container className='Container-Login'>
        <div className='Loginpage'>
            <h2>ورود به پورتال</h2>
            <p>لطفا نام کاربری (ایمیل) و رمز عبور خود را جهت ورود به پنل کاربری خود وارد کنید.</p>
            <input placeholder='نام کاربری یا آدرس ایمیل' />
            <input placeholder='گذرواژه' type='password'/>
            <div className='val-check'>
                <div>
                    <input type='checkbox' />
                    <label>مرا به خاطر بسپار</label>
                </div>
                <div>
                    <Link to={'/Forgetpassword'}>رمز خود را فراموش کرده اید؟</Link>
                </div>
            </div>
                <Link to={'/signup'}>ثبت نام نکرده اید؟  ثبت نام</Link>
            <button>ورود</button>
        </div>
        <Link to={'/'} className='BackeHome'>بازگشت به صفحه اصلی</Link>
    </Container>
    </>
  )
}
