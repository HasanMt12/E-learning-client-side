import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './List.css'

const List = () => {
     const [lists, setLists] = useState([])
     useEffect(()=>{
        fetch('https://p-hero-assignment10.vercel.app/courses-list')
        .then(res => res.json())
        .then(data => setLists(data));

     },[])
    return (
        <div className='list-container pb-5 ms-2'>
            <h3 className='fw-bold text-center text-bg-secondary text-white rounded-3'>course list: {lists.length}</h3>
            {
                lists.map(list =>  <p className='btn btn-secondary w-75 ms-4 ' key={list.id}>
                     <Link to={`/courses/${list.id}`}>{list.course_title}</Link>
                    </p>)
            }
           
        </div>
    );
};

export default List;