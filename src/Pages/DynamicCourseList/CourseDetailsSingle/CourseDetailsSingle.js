import React from 'react';
import './courseDetails.css'
import { FaMedal , FaProjectDiagram,FaHandsHelping, FaDollarSign, FaArrowRight} from 'react-icons/fa';

import Pdf from "react-to-pdf";
import { Link } from 'react-router-dom';
import { FaFileDownload } from 'react-icons/fa';



const ref = React.createRef();
const CourseDetailsSingle = ({c}) => {
    const {price,course_title,support,certificates,projects,resource,thumbnail,id,details}=c;
    return (
        <div>
<div className='course-details-container'>
    <div className='left-card'>
        <div >
            <div className='details' >
                <h2 className='m-3'>{course_title}</h2>
                <small className='m-3'><span className='fw-bold text-decoration-underline '>Details : <br></br></span> <p className='text-semibold m-3'>{details}</p></small>

            </div>
            <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>DownLoad course Details <FaFileDownload></FaFileDownload></button>}
      </Pdf>
        </div>
        </div>
    
            <div className='right-card'>

                <div className="card" style={{width: '30rem'}} ref={ref}>
                    <img src={thumbnail} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title text-style2">This course include:</h3>
                     
                    </div>
                    <ul className="list-group list-group-flush m-4">
                        <li className="list-group-item"><FaMedal></FaMedal> {certificates}</li>
                        <li className="list-group-item"><FaProjectDiagram></FaProjectDiagram>  {projects}</li>
                        <li className="list-group-item"> <FaHandsHelping></FaHandsHelping> {support}</li>
                        <li className="list-group-item">  <FaMedal></FaMedal> {certificates}</li>
                    </ul>
                   
                    <div className="card-body"> <span className='m-4'> Course Rate - <small className='text-success fw-bold fs-2'><FaDollarSign></FaDollarSign>{price}</small></span>
                        <p  className="btn btn-secondary "><Link className='text-light' to={`/checkout/${id}`}>premium <FaArrowRight></FaArrowRight> </Link></p>
                        
                    </div>

                    
                    </div>

                </div>
                </div></div>
            
            
        
    );
};

export default CourseDetailsSingle;