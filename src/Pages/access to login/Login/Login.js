import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/Auth/AuthProvider';
import  './Login.css'
import Swal from 'sweetalert2'


const Login = () => {
     const { popUpLogin, checkIn, setLoading } = useContext(AuthContext);
const [error, setError] = useState('');

     const popUpGoogleProvider = new GoogleAuthProvider();
     const popUpGithubProvider = new GithubAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    //  Google login
      const handleGoogleLogin = () => {
      popUpLogin(popUpGoogleProvider)
            .then(result => {
                const user = result.user;
                
                if(user){
                    navigate(from, {replace: true});
                }
            })
            .catch(error => console.error(error))
    }

        // github login
     const handleGithubLogin = () => {
      popUpLogin(popUpGithubProvider)
            .then(result => {
                const user = result.user;
                if(user){
                    navigate(from, {replace: true});
                }
            })
            .catch(error => console.error(error))
    }


    
    // handle submit
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        checkIn(email, password)
            .then(result => {
                const user = result.user;
              
                form.reset();
                setError('');
                if(user.emailVerified){
                    navigate(from, {replace: true});
                }
                else{
                    Swal.fire({
                    title: 'verified your email, please check',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                })
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
                      <p>{error}</p>
                      
                      <p>
                        Not register please <Link to="/register">register</Link>
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