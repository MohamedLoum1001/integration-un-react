import React from 'react'
import testiImg1 from "../Assets/team1.jpg";
import testiImg2 from "../Assets/team2.jpg";
import testiImg3 from "../Assets/team3.jpg";

const Testemonials = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };
  return (
  <section id="testimonials" className="testimonials  mt-5">
     <div className="container-fluid ">
         <div className="TITRE">
            <h1 className='text-center mt-5'>CLIENTS TESTIMONIALS</h1>
          </div>
            <div className="row">
              <div className="CONTAINER">
                <div className="row col-12 ">
                  <div className='d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-evenly align-items-md-center mt-3'>
                    <div className="item text-center mx-auto">
                      <img src={ testiImg1 } alt="testiImg1" className='rounded-circle img-fluid mx-auto'/>
                      <p>We put our trust in Sunnyside and they <br />
                      delivered, marking our needs were met <br />
                      and deadlines were always hit.</p>
                      <h2>Emily R.</h2>
                      <p className='p'>Marketing Director</p>
                    </div>

                    <div className="item text-center mx-auto">
                      <img src={ testiImg2 } alt="testiImg2" className='rounded-circle img-fluid mx-auto'/>
                      <p>Suunyside's enthousiam couped whth their<br />
                      keen interest in our brand's succes made it<br />
                      a satisfying and enjoyable experience.</p>
                      <h2>Thomas S.</h2>
                      <p className='p'>Chief Operating Officier</p>
                    </div>

                    <div className="item text-center mx-auto">
                      <img src={ testiImg3 } alt="testiImg3" className='rounded-circle img-fluid mx-auto'/>
                      <p>Incredible en result! Our sales Increased<br />
                      over 400% when we worked with Sunnyside.<br />
                      Highly recommended.</p>
                      <h2>Jennie F.</h2>
                      <p className='p'>Business Owner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
  </section>
  )
}

export default Testemonials
