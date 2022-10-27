import React from 'react';

import { Link } from 'react-router-dom';
import './CourseCard.css'
import { FaArrowRight,  } from 'react-icons/fa';

const CourseCard = ({course}) => {
    const {course_title,time,img,projects}=course;
    return (
        <div >

        <div className='single-card'>
            <img src={img} alt=""></img>
          <div className="course-info">
            <p className="course-name">{course_title}</p>
            <p className='text-dark'>Course Duration : <small className='text-success '>{time}</small></p>
            <p>Projects : <small className='text-success fw-bold'>{projects}</small></p>
            
          </div>
          <div className="btn-info">
            <button  className="btn btn-info mt-5 "> 
            <Link className='text-link' to={`/courses/${course.id}`}>{ course.course_title} <small className='text-dark  fw-semibold'>course details <FaArrowRight></FaArrowRight></small></Link>
            </button>
            </div>
          
          </div>
            
        </div>
        
    );
};

export default CourseCard;