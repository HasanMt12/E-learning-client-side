import React from 'react';
import './courseDetails.css'


import { Card } from 'react-bootstrap';

const CourseDetailsSingle = ({c}) => {
    const {img,price,course_title,support,certificates}=c;
    return (
        <div className=''>
            <div></div>

<div className='course-details-container'>
    <div className='left-card'>
        <div >
        <Card >
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{course_title}</Card.Title>
                <Card.Text>
                    {price}
                </Card.Text>
                 
            </Card.Body>
        </Card>
        </div></div>
    
            <div className='right-card'>

                <div className="card " style={{width: '30rem'}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">this course include:</h5>
                        <p className="card-text">  {certificates}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                    <div className="card-body">
                        <button  className="card-link">Card link</button>
                        <button  className="card-link">Another link</button>
                    </div>
                    </div>

                </div>
                </div>
            
            
        </div>
    );
};

export default CourseDetailsSingle;