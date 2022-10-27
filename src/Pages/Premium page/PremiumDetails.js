import React,{useContext} from 'react';
import { AuthContext } from '../../Context/Auth/AuthProvider';

const PremiumDetails = ({pd}) => {
    const {user}= useContext(AuthContext);
    const {price,id} = pd;
    
    return (
        <div>
            <div>
                <div>
            
                            {user?.displayName }      

                </div>
                <div></div>
            </div>
            
        </div>
    );
};

export default PremiumDetails;