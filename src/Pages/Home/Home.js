import React from 'react';
import Pdf from "react-to-pdf";
import './Hero.css'
import heroSection from "../../assets/heroSection.json";
import quiz from "../../assets/quiz.json";
import Lottie from "lottie-react";
// const ref = React.createRef();

const Home = () => {
    return (
        <div>
            <div className='hero-container'>
                <div className='hero-left'>
                    <div className='hero-title '>
                        <h2 className='title1 mb-3'>Learn From The Expert</h2>
                        <h2 className='title2 '>Learn 100% online with World-class
                            universities and industry Experts</h2>
                            
                        <a className='me-3 btn btn-outline-secondary w-25 hero-btn' href='/login'>Join for Free</a>
                        <a className='me-3 ms-2 btn btn-outline-secondary w-25 hero-btn' href='/courses'>Our courses</a>
                    </div>
                </div>
                <div className='hero-right'>
                    <div className='w-75 lottie'> <Lottie animationData={heroSection} loop={true}/></div>
                </div>
            </div>
            <div className=" pt-5 ">
                <div className="text-center t"> 
                <div className='text-center text-light fw-bold bg-secondary mx-4 rounded-5 p-3'><h1 className="fw-bold  ">Read stories from the Training Sage community.</h1>
                <p className="pb-2 text-center text-student ">Practice isn’t the thing you do once your good. It’s the thing you do that makes you good.
                </p></div>
            

            <div className="row g-2 p-4">
                <div className="col-12 col-md-6 col-lg-3 ">
                    <div className="border-2 shadow-sm text-center bg-light pb-2 ">
                        <img className="img-fluid pb-1" src="https://i.postimg.cc/rw7nc1bN/depositphotos-5879578-stock-photo-portrait-of-young-businessman-with.webp" alt=""/>
                        <h5>Tonmoy islam</h5>
                        <small>Ruby developer</small><br></br>
                        <small>“Even more important than knowledge is confidence, which I have gained through my learning journey. No matter what you are looking to learn, or gain confidence in, Coursera has something for you.”</small>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="border-2 shadow-sm text-center bg-light pb-2">
                        <img className="img-fluid pb-1" src="https://i.postimg.cc/yYjCVbXX/shutterstock-285785000.jpg" alt=""/>
                        <h5>Mou</h5>
                        <small>Swift Developer</small> <br></br>
                        <small>“Even more important than knowledge is confidence, which I have gained through my learning journey. No matter what you are looking to learn, or gain confidence in, Coursera has something for you.”</small>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="border-2 shadow-sm text-center bg-light pb-2">
                        <img className="img-fluid pb-1" src="https://i.postimg.cc/sD71wszf/Mhgs.jpg" alt=""/>
                        <h5>Saif irfan</h5>
                        <small>data analytics</small> <br></br>
                        <small>“Even more important than knowledge is confidence, which I have gained through my learning journey. No matter what you are looking to learn, or gain confidence in, Coursera has something for you.”</small>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="border-2 shadow-sm text-center bg-light pb-2">
                        <img className="img-fluid pb-1" src="https://i.postimg.cc/yYjCVbXX/shutterstock-285785000.jpg" alt=""/>
                        <h5>Sadia Afreen</h5>
                        <small>Web Developer</small> <br></br>
                        <small>“Even more important than knowledge is confidence, which I have gained through my learning journey. No matter what you are looking to learn, or gain confidence in, Coursera has something for you.”</small>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
    <div className=" pt-5 ">
                <div className="text-center"> 
                <div className='text-center text-light fw-bold bg-secondary rounded-5 mx-4 p-3'><h1 className="fw-bold  ">Practice from the Training Sage community.</h1>
                <p className="pb-2 text-center text-student ">Practice isn’t the thing you do once your good. It’s the thing you do that makes you good.
                </p></div></div></div>

<div className='hero-container'>
                <div className='hero-left'>
                    <div className='hero-title'>
                        <h3 className='title1'> Try to understand your web understanding? </h3><br></br>
                    <small className='title2'>This short quiz will sort you out. Answer a few simple questions to get perfect practice for web career .</small><br></br>
                    <a className='me-3 btn btn-outline-secondary w-25 hero-btn' href='https://whimsical-bunny-1542da.netlify.app/' target="_blank">Start Quiz</a>

                        </div>
                    </div>
                    <div className='hero-right'>
                    <div className='w-75 lottie'> <Lottie animationData={quiz} loop={true}/></div>
                    </div>
            </div>
             <div className=" pt-5 ">
                <div className="text-center"> 
                    <div className='bg-success-students p-3'>
                        <p className='text-light text-center fw-bold bg-secondary rounded-5 mx-4 p-3'>Business 
                        </p>
                    </div>
                    <div className='my-3'><img className='mx-2' src='https://whimsical-bunny-1542da.netlify.app/' alt="" ></img>
                    <img src='https://i.postimg.cc/qvP7WFjk/company-3.png' alt="" ></img>
                    </div>
                </div>
                </div>

        <div>
                           
                           
                           
                            {/* <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
                <div ref={ref}>
                    <h1>Hello CodeSandbox</h1>
                    <h2>Start editing to see some magic happen!</h2>
                </div> */}
            </div>
    </div>
    );
};

export default Home;