import React,{useContext} from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { AuthContext } from '../../Context/Auth/AuthProvider';
import './Premium.css'


import { FaFileDownload } from 'react-icons/fa';




const PremiumDetails = ({pd}) => {
    const {user}= useContext(AuthContext);
    const {price,id,course_title,premium,details,img} = pd;
    console.log(user)
    
    return (
        <div>
            <div className='premium-container'>
                <div className='m-3'>
                           
                        

        <Card className="text-center">

      <Card.Body> 
        <Image data-tip data-for="registerTip"
                                    style={{ height: '50px' ,margin:'2px'}}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                <Card.Header>{user?.displayName }</Card.Header>
        <Card.Title><h4>{user?.email}</h4></Card.Title>
        <Card.Text>
        
        </Card.Text>
     
      </Card.Body>
   
    </Card>
                </div>
                <div className=' pdf-container'>
                  <h3 className='text-center m-2'>{premium}</h3> <div className="pdfFile">
     
      
    </div>
                    <Card className="r m-3">
      <Card.Header className='text-center' >{course_title}</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
           {details}
        </Card.Text>
        <img className='w-25 h-50' src={img} alt=""></img>
        
      </Card.Body>
     
    </Card>

    

                </div>
            </div>
             
            
        </div>
    );
};

export default PremiumDetails;