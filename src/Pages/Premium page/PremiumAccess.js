import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PremiumDetails from './PremiumDetails';

const PremiumAccess = () => {
    const premium = useLoaderData()
    // const [data , setData] = useState([])
    // 
  
    
   
    return (
        <div> 
                {
                    premium.map(pd=> <PremiumDetails
                    
                    pd={pd}
                    >
                     
                    </PremiumDetails>)
                }
                
           
           
        </div>
    );
};

export default PremiumAccess;