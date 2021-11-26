import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    // Google Sign in
    const signInUsingGoogle = () => {
        // setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
    }

    // Observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    // Logout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {})
        .finally(() => setIsLoading(false));
        
    }

    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
    }
}

export default useFirebase;