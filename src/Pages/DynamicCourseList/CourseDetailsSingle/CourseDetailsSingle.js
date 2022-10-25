import React from 'react';
import { Card } from 'react-bootstrap';

const CourseDetailsSingle = ({c}) => {
    const {img,price,course_title}=c;
    return (
        <div>
            <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{course_title}</Card.Title>
                <Card.Text>
                    {price}
                </Card.Text>
                 
            </Card.Body>
        </Card>
            
        </div>
    );
};

export default CourseDetailsSingle;