import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import List from '../DynamicCourseList/List';


const Courses = () => {
    return (
        <Container>
            <Row>
                <Col className='lg-4'>
                    <List></List>
                </Col>
                 <Col className='lg-8'>
                    <h1>dsghd
                    </h1>
                 </Col>
            </Row>
        </Container>
    );
};

export default Courses;