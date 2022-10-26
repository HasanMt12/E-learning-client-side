import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetailsSingle from '../CourseDetailsSingle/CourseDetailsSingle';
import './ListDetails.css'

const ListDetails = () => {
    const courseDetails = useLoaderData()
    return (
        <div >
            <h1>this is details{courseDetails.length}</h1>
            {
                courseDetails.map(c => <CourseDetailsSingle
                key={c._id}
                c={c}
                ></CourseDetailsSingle>)
            }
        </div>
    );
};

export default ListDetails;