import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CourseCard = ({course}) => {
    const {course_title,price,img}=course;
    return (
        <div>
            <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{course_title}</Card.Title>
                <Card.Text>
                    {price}
                </Card.Text>
                  <Link to={`/courses/${course.id}`}>{course.course_title}</Link>
            </Card.Body>
        </Card>
            
        </div>
    );
};

export default CourseCard;