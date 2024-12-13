import React from 'react'
import './Footer.css'
import { Container } from 'react-bootstrap'
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

export default function Footer() {
  return (
    <>
        <div className='footer'>
          <Container>
            <div className='footer-dis'>
              
          <div className='hed-footer'>
            <div>
              <div>
                <h3>پزشکیار کلینیک تخصصی درمانی</h3>
                <h4>RTL_Theme</h4>
              </div>
              <div className='about-footer'>
                <div>
                <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم 
                از صنعت چاپ، و با استفاده از طراحان 
                گرافیک است، چاپگرها و متون بلکه روزنامه
                 و مجله در ستون و سطرآنچنان که لازم
                 است، و برای شرایط فعلی تکنولوژی مورد
                 نیاز، و کاربردهای متنوع با هدف بهبود
                 ابزارهای کاربردی می باشد، کتابهای
                 زیادی در شصت و سه درصد گذشته حال و
                 آینده، شناخت فراوان جامعه و متخصصان
                 را می طلبد، تا با نرم افزارها شناخت
                 بیشتری را برای طراحان رایانه ای علی 
                الخصوص طراحان خلاقی، و فرهنگ پیشرو
                 در زبان فارسی ایجاد کرد، در این
                 صورت می توان امید داشت که تمام و
                 دشواری موجود در ارائه راهکارها،
                </p>
                </div>
                <div>
                  <img src='./img/mark-logo-1.png' />
                  <img src='./img/mark-logo-2.png' />
                  <img src='./img/mark-logo-3.png' />
                  <img src='./img/mark-logo-1.png' />
                  <img src='./img/mark-logo-2.png' />
                  <img src='./img/mark-logo-3.png' />
                </div>
              </div>
              <div className='end-footer'>
                <div>
                  <h5>دریافت آخرین اطلاعیه و تخفیف ها </h5>
                </div>
                <div>
                  <input placeholder='شماره تماس یا ایمیل خود را وارد کنید' />
                  <button>ثبت +</button>
                </div>
              </div>
            </div>
          </div>
          <div className='ul-footer'>
            <div>
              <ul>
                سرویس ها
                <li>دندان پزشکی</li>
                <li>زیبایی و مزوتراپی</li>
                <li>قلب و عروق</li>
                <li>گوش، حلق و بینی</li>
                <li>درمان در خانه</li>
              </ul>
            </div>
            <div>
              <ul>
                سرویس ها
                <li>دندان پزشکی</li>
                <li>زیبایی و مزوتراپی</li>
                <li>قلب و عروق</li>
                <li>گوش، حلق و بینی</li>
                <li>درمان در خانه</li>
              </ul>
            </div>
            <div>
              <ul>
                سرویس ها
                <li>دندان پزشکی</li>
                <li>زیبایی و مزوتراپی</li>
                <li>قلب و عروق</li>
                <li>گوش، حلق و بینی</li>
                <li>درمان در خانه</li>
              </ul>
            </div>
          </div>
          <div className='contact-us-footer'>
            <h3>با ما همراه باشید!</h3>
            <span>021_64582 <HeadphonesOutlinedIcon /></span>
            <span>Support [ @abolfazl-es Theme] <AlternateEmailOutlinedIcon /></span>
            <span>تهران، قیطریه کنار پارک قیطریه ساختمان محمدی پلاک 93 <LocationOnOutlinedIcon /></span>
            <span> ساعت 08:00 الی 17:00 از شنبه تا پنج شنبه<WatchLaterOutlinedIcon /></span>
            <button>
              <i class="bi bi-facebook"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-telegram"></i>
            </button>
          </div>
          </div>
          <hr />
          <div className='copy-right-footer'>
            <h5>تمامی حقوق این وبسایت برای پزشکیار محفوظ است و کپی  برداری از آن پیگرد قانونی دارد &copy; </h5>
            <h5>ساخته شده توسط ابوالفضل استیری ❣️</h5>
          </div>

          </Container>
        </div>
    </>
  )
}
