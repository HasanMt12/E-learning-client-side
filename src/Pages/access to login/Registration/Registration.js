import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Auth/AuthProvider';
import './Registration.css'


const Registration = () => {
    const { popUpLogin , generateUser, restoreUserProfile, verifyEmail} = useContext(AuthContext);
       const [error, setError] = useState('');
    // const [accepted, setAccepted] = useState(false);
     const popUpGoogleProvider = new GoogleAuthProvider();
     const popUpGithubProvider = new GithubAuthProvider();


      const handleGoogleLogin = () => {
      popUpLogin(popUpGoogleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

     const handleGithubLogin = () => {
      popUpLogin(popUpGithubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        generateUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleRestoreUserProfile(name, photoURL);
                handleEmailVerification();
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleRestoreUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        restoreUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleEmailVerification  = () => {
        verifyEmail()
        .then(() =>{})
        .catch(error => console.error(error));
    }

    // const handleAccepted = event => {
    //     setAccepted(event.target.checked)
    // }

 
    return (
        <div className='main-div'>
            <div className="wrapper">
  <div className="container">
    <div className="col-left">
      <div className="login-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <p>
            <input name="name" type="text" placeholder="Your Name" />
          </p>
                <p>
            <input name="photoURL" type="text" placeholder="Phot URL" />
          </p>
         
          <p>
            <input name="email" type="email" placeholder="Enter email"/>
          </p>
          <p>
            <input name="password" type="password" placeholder="Password" required/>
          </p>
          <Button variant="primary" type="submit" >
                Register
            </Button>
          
        </form>
      </div>
    </div>
    <div className="col-right">
      <div className="login-social">
        <h2>Login with</h2>
        <p onClick={handleGoogleLogin} className="btn btn-go" href="">Google</p>
        <p onClick={handleGithubLogin} className="btn btn-fb" href="">Github</p>
       
      </div>
    </div>
  </div>
  
</div>
            
        </div>


    );
};




 

export default Registration;