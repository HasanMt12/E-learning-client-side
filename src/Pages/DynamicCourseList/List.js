import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './List.css'

const List = () => {
     const [lists, setLists] = useState([])
     useEffect(()=>{
        fetch('http://localhost:5000/courses-list')
        .then(res => res.json())
        .then(data => setLists(data));

     },[])
    return (
        <div className='list-container'>
            <h1>course list: {lists.length}</h1>
            {
                lists.map(list =>  <p className='btn-list' key={list.id}>
                     <Link to={`/courses/${list.id}`}>{list.course_title}</Link>
                    </p>)
            }
            <h1>sd</h1>
        </div>
    );
};

export default List;