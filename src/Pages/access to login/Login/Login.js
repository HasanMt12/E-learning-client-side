import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/Auth/AuthProvider';
import  './Login.css'


const Login = () => {
     const { popUpLogin } = useContext(AuthContext);
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



    return (
        <div className='main-div'>
            <div className="wrapper">
  <div className="container">
    <div className="col-left">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <p>
            <input type="email" placeholder="Email" required/>
          </p>
          <p>
            <input type="password" placeholder="Password" required/>
          </p>
          <p>
            <input className="btn" type="submit" value="Sing In" />
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