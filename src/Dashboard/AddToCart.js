// import React from "react";
// import { useDispatch } from "react-redux";
// import { add } from "../ReDux/CartSlice";


// const AddToCart = ({ item }) => {
//   const dispatch = useDispatch();
//   const token = localStorage.getItem("token");

//   const handleCart = (item) => {
//     if (token) {
//       dispatch(add(item));
//     } else {
//       window.alert("Please login first");
//     }
//   };
//   return (
//     <div>
//       <div className="MockTestCard__bottom">
//         <button className="bottom--button" onClick={()=> handleCart(item)}>Test Now</button>
//       </div>
//     </div>
//   );
// };

// export default AddToCart;


/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
// import "./AddtoCart.css"
import { add } from "../ReDux/CartSlice";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
// import { Link } from 'react-router-dom';


const TestCard2 = (props) => {
  const { no, image, title, price, pip, date, date1, part, time, due } = props








  const [verified, setVerified] = useState(false);
  const dispatch = useDispatch();
  const select = useSelector((state) => state.cart.data)

  // console.log(select);

  // Token Verification for the user is valid or not
  useEffect(() => {
    const token = localStorage.getItem('token');
    // console.log("This is Token ",token)

    axios.get('http://localhost:3005/dashboard', {
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
      .then((response) => {
        console.log(response.data);
        setVerified(true);
      })
      .catch((err) => {
        console.log("error is authorization : " + err)
      });
  }, [])


  const makePayment = async (no, image, title, price, pip, date, date1, part, time, due) => {
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
          pip: pip, date: date, date1: date1, part: part, time: time, due: due
        },
      ],
    };
    const headers = {
      "content-type": "application/json",
    };

    const response = await fetch(
      "http://localhost:3005/api/create-checkout-session",
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
  const handleCart = (no, image, title, pip, date, date1, part, time, due) => {
    if (token) {
      dispatch(
        add({
          no: no,
          title: title,
          image: image, pip: pip, date: date, date1: date1, part: part, time: time, due: due

        })
      );
    } else {
      window.alert("Please login first");
    }
  };


  return (
    <div className='FeaturedPastContainer'>
      <div className="TopicMockTestCard" key={no}>
        <div className="CardIm">
          <img src={image} alt="/" />
        </div>
        <p className="FutureCard-Heading1">{title}</p>
        <div className="FuturedCard-MiddlePart">
          <div className="MiddlePart-left">
            <p className="leftPart-top">{date}</p>
            <p className="leftPart-bottom">{date1}</p>
          </div>
          <hr className="amHR" />
          <div className="MiddlePart-Center">
            <p className="midPart-top">{pip}</p>
            <p className="midPart-bottom">{part}</p>
          </div>
          <hr className="amHR" />
          <div className="RightPart-right">
            <p className="leftPart-top">{time}</p>
            <p className="leftPart-bottom">{due}</p>
          </div>
        </div>

        <div className="TopicMockTestCard__bottom">

          <button className='TopicMockTestCard__bottom--button' onClick={() => { makePayment(no, image, title, price, pip, date, date1, part, time, due); handleCart(no, image, title, pip, date, date1, part, time, due) }} >Test Now</button>

        </div>
      </div>
    </div>
  )
}

export default TestCard2