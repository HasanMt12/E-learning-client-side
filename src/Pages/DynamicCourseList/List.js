import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const List = () => {
     const [lists, setLists] = useState([])
     useEffect(()=>{
        fetch('http://localhost:5000/courses-list')
        .then(res => res.json())
        .then(data => setLists(data));

     },[])
    return (
        <div>
            <h1>course list: {lists.length}</h1>
            {
                lists.map(list =>  <p key={list.id}>
                     <Link to={`/courses/${list.id}`}>{list.course_title}</Link>
                    </p>)
            }
        </div>
    );
};

export default List;