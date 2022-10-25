import React, { createContext } from 'react';
import {getAuth, signInWithPopup} from 'firebase/auth'
import app from '../../firebaseConfig/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const popUpLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const user ={displayName:'hasan'}
    const authInfo = {user , popUpLogin}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;