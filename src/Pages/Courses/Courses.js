import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import List from '../DynamicCourseList/List';
import CourseCard from './CourseCard/CourseCard';


const Courses = () => {
    const courses = useLoaderData();
    
    return (
        <Container>
            <Row>
                <Col className='lg-4'>
                    <List></List>
                </Col>
                 <Col className='lg-8'>
                   {
                    courses.map(course => <CourseCard 
                    key={course.id} course={course}> </CourseCard>)
                   }
                 </Col>
            </Row>
        </Container>
    );
};

export default Courses;