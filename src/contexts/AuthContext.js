import { useState, createContext, useContext, useEffect, } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useStore } from '../Store/store'

import { auth, db } from '../firebase/firebase';
import { doc, setDoc, onSnapshot } from "firebase/firestore"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const AuthContext = createContext()
const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState() //Auth
    const [currentUserData, setCurrentUserData] = useState({}) //db
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const { registrationForm } = useStore()[0]
    const { email, firstName, lastName, address, mystate, zip } = registrationForm

    const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password)
        .then(async (cred) => await updateProfile(cred.user, { displayName: firstName.value }))

    const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const logOut = () => {
        signOut(auth)
        setCurrentUserData({})
        setIsLoggedIn(false)
    }

    const setUserData = () => setDoc(doc(db, 'users', `${email.value}`), {
        userId: uuidv4(),
        FirstName: firstName.value,
        LastName: lastName.value,
        FullName: firstName.value + ' ' + lastName.value,
        Addresses: [{
            Address: address.value,
            State: mystate.value,
            ZipCode: zip.value
        }],
        DisplayPicture: (firstName.value.charAt(0) + lastName.value.charAt(0)).toUpperCase()
    })

    const getUserData = mail => onSnapshot(doc(db, 'users', mail), (doc) => setCurrentUserData(doc.data()))

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user => setCurrentUser(user)))
        return unsubscribe
    }, [])

    useEffect(() => {
        setTimeout(() => {
            let unsub
            if (currentUser?.email) {
                unsub = () => getUserData(currentUser.email)
                unsub()
                setIsLoggedIn(true)
            }
            return unsub
        }, 0)
    }, [currentUser?.email])

console.log(currentUser);

    const value = { currentUser, currentUserData, isLoggedIn, setUserData, getUserData, signUp, logIn, logOut }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export { useAuth, AuthProvider }
export default AuthContext;
