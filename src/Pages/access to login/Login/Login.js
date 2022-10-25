import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/Auth/AuthProvider';
import  './Login.css'


const Login = () => {
     const { popUpLogin } = useContext(AuthContext);
     const popUpGoogleProvider = new GoogleAuthProvider();
      const handleGoogleLogin = () => {
      popUpLogin(popUpGoogleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }




    return (
        <div className='main-div'>
            <div class="wrapper">
  <div class="container">
    <div class="col-left">
      <div class="login-form">
        <h2>Login</h2>
        <form>
          <p>
            <input type="email" placeholder="Email" required/>
          </p>
          <p>
            <input type="password" placeholder="Password" required/>
          </p>
          <p>
            <input class="btn" type="submit" value="Sing In" />
          </p>
          <p>
            <a href="">Forget Password?</a>
          </p>
        </form>
      </div>
    </div>
    <div class="col-right">
      <div class="login-social">
        <h2>Login with</h2>
        <p onClick={handleGoogleLogin} class="btn btn-go" href="">Google</p>
        <p class="btn btn-fb" href="">Facebook</p>
        
      </div>
    </div>
  </div>
  <div class="credit">
    Designed by <a href="https://htmlcodex.com">HTML Codex</a>
  </div>
</div>
            
        </div>
    );
};

export default Login;