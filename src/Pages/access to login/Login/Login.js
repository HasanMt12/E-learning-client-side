import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/Auth/AuthProvider';
import  './Login.css'


const Login = () => {
     const { popUpLogin, checkIn, setLoading } = useContext(AuthContext);
const [error, setError] = useState('');

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

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        checkIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if(user.emailVerified){
                    navigate(from, {replace: true});
                }
                else{
                    alert('Your email is not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }




    return (
        <div className='main-div'>
            <div className="wrapper">
  <div className="container">
    <div className="col-left">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <p>
            <input name="email" type="email" placeholder="Enter email" required/>
          </p>
          <p>
            <input name="password" type="password" placeholder="Password" required/>
          </p>
          <p>
            <input className="btn" type="submit"  />
          </p>
          <p>
            <a href="">Forget Password?</a>
          </p>
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




export default Login;