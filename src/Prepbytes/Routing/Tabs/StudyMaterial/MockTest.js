import React from "react";

import "./MockTest.css";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// import AddToCart from "../../../../Dashboard/AddToCart";
import Layout from "../../../Layout";
import TestCard2 from "../../../../Dashboard/AddToCart";
// import { Link } from "react-router-dom";




function MockTest() {
  const [loading, setLoading] = useState(true)
  const [mockData, SetMockData] = useState([])

  // url = 
  useEffect(() => {
      axios.get('http://localhost:3005/user/data')
          .then((response) => {
              // console.log(response);
              SetMockData(response.data)
              setLoading(false);
          })
          .catch((err) => {
              console.log(err);
          })
  }, [])

  console.log(mockData)



  return (
    <Layout>
    <div>
     
      <section className="MockHead">
        <section className="MockHeadData">
          <div className="MockCenter">
            <h2 className="MockHeadingPart">Mock Test</h2>
            <p className="MockPara">
              Technical and Aptitude Test is a very important process of most of
              the placement tests. Crack your next placement with series of
              PrepBytes practice and mock tests. Practice subject-wise and
              company-wise tests. Take real-time mock tests with other students
              and test your preparation.
            </p>
          </div>
        </section>
      </section>
      <section className="FeaturedList">
        <section className="FeaturedMain">
          <p className="FeaturedHeading">Featured Mock Tests</p>
          <section className="FeaturedContainer">
            <section className="FeaturedPast">
              <p className="FeaturePastPara">Past Mock Tests</p>
              <section className="FeaturedPastContainer">
                {mockData.map((item, ind) => (
                  <TestCard2
                  
                   no={item.no} 
                  image={item.image}
                  title={item.title} 
                  date={item.date}
                  date1={item.date1}
                  pip={item.pip}
                  part={item.part}
                  time={item.time}
                  due={item.due}
                  price={item.price}
                  />
                ))}
              </section>
            </section>
          </section>
        </section>
      </section>
    </div>
    </Layout>
  );
}

export default MockTest;


{/* <Link to={`/NextPage/${cat.title}`} state={cat}>
<div className='headingTwoWomen'>{cat.title}</div>
</Link> */}