import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CourseCard.css'

const CourseCard = ({course}) => {
    const {course_title,price,img}=course;
    return (
        <div >

        <div className='single-card'>
            <img src={img} alt=""></img>
          <div className="exercise-info">
            <p className="exercise-name">{course_title}</p>
            <p>Time {price}</p>
            
          </div>
          <div className="btn-info">
            <button  className="btn-common"> 
            <Link className='text-link' to={`/courses/${course.id}`}>{course.course_title}</Link>
            </button>
            </div>
          
          </div>
            
        </div>
        
    );
};

export default CourseCard;