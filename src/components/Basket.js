import React, {useState} from 'react'
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import Allproduct from './Allproduct'
import { useParams } from 'react-router-dom'
import './Basket.css'




export default function Basket ({mystate}) {
  const [basket, setBasket] = useState(false)

  let params = useParams()  

  let mainproduct = Allproduct.filter(product => {
    return product.id === params.productID
  })
  
  function showBasket () {
    setBasket(!basket)
  }

  return (
    <>
        <button onClick={() => showBasket()} className='btn-add-product'><i><ProductionQuantityLimitsOutlinedIcon /></i></button>
        {basket ? (
          <div className='user-basket'>
            <img src={mainproduct[0].imgg} />
            <div>
              <h5>{mainproduct[0].title}</h5>
              <span>قیمت محصول: {mainproduct[0].price}</span>
              <div>
                  <button>مراحل تکمیل خرید</button>
              </div>
            </div>
          </div>
        ) : false}
    </>
  )
}
