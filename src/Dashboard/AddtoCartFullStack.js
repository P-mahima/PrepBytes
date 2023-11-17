import React, { useEffect, useState } from 'react'
import "./Demo.css"
import { add } from "../ReDux/CartSlice";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { Link } from 'react-router-dom';


const TestCardFullstack = (props) => {
  const { no, image, title, price } = props








  const [verified, setVerified] = useState(false);
  const dispatch = useDispatch();
  const select = useSelector((state) => state.cart.data)

  // console.log(select);

  // Token Verification for the user is valid or not
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
    
  //   axios.get('https://prepbyteclone-server.onrender.com/dashboard', {
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response.data);
  //       setVerified(true);
  //     })
  //     .catch((err) => {
  //       console.log("error is authorization : " + err)
  //     });
  // }, [])


  const makePayment = async (no, image, title, price) => {
    const stripe = await loadStripe(
      "pk_test_51O9j0iSBNg9h8aKNCfdZO8ihhHuvF7ZcePQHioZy6ve6hIIeMLQeogKF6YVgLy6FXSgf2N5Hn3NWXUpWhX4aDEJ700EvP7zW1g"
    )

    const body = {
      products: [
        {
          id: no,
          name: title,
          price: price,
          img: image,
          quantity: 1,
          
        },
      ],
    };
    const headers = {
      "content-type": "application/json",
    };

    const response = await fetch(
      "https://prepbyteclone.onrender.com/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  };

  const token = localStorage.getItem('token');
  const handleCart = (no, image, title, ) => {
    if (token) {
      dispatch(
        add({
          no: no,
          title: title,
          image: image,

        })
      );
    } else {
      window.alert("Please login first");
    }
  };


  return (
    <div className='FeaturedPastContainer'>
      <div className="TopicMockTestCard" key={no}>
   
       
        <div className='Enroll_Fees'>₹ {price}</div>
            <div className='Enroll_Now_Batch'>
              {/* <div className='Enroll_Now_Batch_Button'>Enroll Now</div> */}
              {/* <div className='Enroll_Now_Batch_Button_One'>Try for free</div> */}
            </div>
        <div className="TopicMockTestCard__bottom">


        {/* {
                        verified ?
                            (<button className='PastMockTestCard__bottom--button' onClick={() => { makePayment(no, image, title); handleCart(no, image, title) }} >Test Now</button>)
                            :
                            (<Link to={"/login"} onClick={() => { window.scroll(0, 0) }}><button className='PastMockTestCard__bottom--button'>Test Now</button></Link>)
                    } */}

          <button className='Enroll_Now_Batch_Button' onClick={() => { makePayment(no, image, title, price, ); handleCart(no, image, title,) }} >Enroll Now</button>

        </div>
      </div>
    </div>
  )
}

export default TestCardFullstack