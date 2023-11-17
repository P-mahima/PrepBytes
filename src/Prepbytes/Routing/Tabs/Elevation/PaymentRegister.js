import React, { useEffect, useState } from 'react'
import './PaymentR.css'
import axios from 'axios'
import TestCardElevation from '../../../../Dashboard/AddToCartElevation'
const PaymentRegister = () => {


    const [mockData, SetMockData] = useState([])

  // url = 
  useEffect(() => {
      axios.get('https://prepbyteclone.onrender.com/user/elevation')
          .then((response) => {
              // console.log(response);
              SetMockData(response.data)
              // setLoading(false);
          })
          .catch((err) => {
              console.log(err);
          })
  }, [])

  return (
    <div>
       <div className='payments'>
          <h3>Payment Plans</h3>
          <h6>Choose a payment plan suiting your needs</h6>
          <div className='Paymentdiv'>
            <h4>Pay Upfront*</h4>
            <h4>Pay Now <br></br> <span className='paymentspan'> ₹ 70,000</span> </h4>
            <hr></hr>
            <h4>EMI Starting at <span className='paymentspan'>₹ 5833/month</span> </h4>
          </div>
          <br></br>
        <br></br>


        {mockData.map((item, ind) => (
                  <TestCardElevation
                  
                   no={item.no} 
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  />
                ))}
          {/* <button className='buttonElevation'>Register</button> */}
        </div>
    </div>
  )
}

export default PaymentRegister
