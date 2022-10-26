import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import List from '../DynamicCourseList/List';
import CourseCard from './CourseCard/CourseCard';
import './Courses.css'




const Courses = () => {
    const courses = useLoaderData();
    
    return (
        <div className='courses-container'>
            
                <div >
                    <List></List>
                </div>
                 <div className='course-card'>
                   {
                    courses.map(course => <CourseCard 
                    key={course._id} course={course}> </CourseCard>)
                   }
                  
                 </div>
           
        </div>
    );
};

export default Courses;