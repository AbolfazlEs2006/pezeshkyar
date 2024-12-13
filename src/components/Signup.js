import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

export default function Signup() {
    const [username , setUsername] = useState('')
    const [phoneNum , setPhoneNum] = useState('')
    const [password , setPassword] = useState('')

    function firstNameValue (event) {
        setUsername(() => event.target.value)
    }
    function phoneNumValue (event) {
        setPhoneNum(() => event.target.value)
    }
    function passwordValue (event) {
        setPassword(() => event.target.value)
    }

    function regesterHandeler (event) {
        event.preventDefault()

            let newUser = {
                username,
                phoneNum,
                password
            }
    
            fetch('https://pezeshkyar-9ce61-default-rtdb.asia-southeast1.firebasedatabase.app/user.json', {
                method: 'POST',
                body: JSON.stringify(newUser),
            })
            .then(res => {
                setUsername('')
                setPhoneNum('')
                setPassword('')
            })
            .catch(err => {
                setPassword('')
            })
    }

  return (
    <>
    <Container className='Container-Login'>
        <form onSubmit={(event) => regesterHandeler(event)}>
            <div className='signup'>
                <h2>ثبت نام</h2>
                <p>لطفا نام کاربری (ایمیل) و رمز عبور خود را جهت ورود به پنل کاربری خود وارد کنید.</p>
                <div className='val'>
                    <input placeholder='نام کاربری یا آدرس ایمیل' value={username} onChange={(event) => firstNameValue(event)}/>
                    <input placeholder='شماره تماس' value={phoneNum} onChange={(event => phoneNumValue(event))} />
                    <input placeholder='گذرواژه' type='password' value={password} onChange={(event => passwordValue(event))}/>
                    <input placeholder='تایید گذرواژه خود' type='password' />
                </div>
                <div>
                    <div>
                        <input type='checkbox' />
                        <label>مرا به خاطر بسپار</label>
                    </div>
                </div>
                    <Link to={'/Loggin'}>ورود به پنل کاربری خود</Link>
                <button>ثبت نام</button>
            </div>
        </form>
        <Link to={'/'} className='BackeHome'>بازگشت به صفحه اصلی</Link>
    </Container>
    </>
  )
}
