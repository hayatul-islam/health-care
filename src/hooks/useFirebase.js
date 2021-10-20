import { useEffect, useState } from "react"
import firebaseApp from "../Firebase/firebaseApp";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


firebaseApp();


const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('health.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }


    const createNewUser = e => {
        e.preventDefault();
        registerNewUser(email, password)
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const userEmail = e => {
        setEmail(e.target.value);
    }

    const userPassword = e => {
        setPassword(e.target.value);
    }

    const signInEmailAndPassword = e => {
        e.preventDefault()
        signInUser(email, password)

    }

    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)

            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    return {
        user,
        error,
        signInUsingGoogle,
        createNewUser,
        userEmail,
        userPassword,
        signInEmailAndPassword,
        logOut,
        services,
        setUser,
    }
}

export default useFirebase;