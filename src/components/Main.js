import React from 'react'
import { Button, Container } from "react-bootstrap";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';


import './main.css'

export default function Main() {
  return (
    <>
    <Container className="main-container">
        <div className="doctor-main">
            <div>
                <h1>اراءه خدمات پزشکی در خانه</h1>
                <p>متخصصین پزشکیار در 24 ساعت شبانه روز در اراءه خدمات آماده هستند</p>
                <Button>بیشتر بدانید</Button>
            </div>
            <div>
            <img src="./img/doctor.png" alt="Doctor"/>
            </div>
        </div>
        <div className="Product-main">
            <img src="./img/Lamp.png" />
            <div>
                <h1>برس پاک سازی میوتو</h1>
                <p>دماسنج | تب سنج</p>
                <div>
                    <i><ProductionQuantityLimitsIcon /></i>
                    <h3>650,000</h3>
                </div>
            </div>
        </div>
    </Container>
    </>
  );
}
