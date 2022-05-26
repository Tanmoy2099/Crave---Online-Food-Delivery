import { useState, createContext, useContext, useEffect } from 'react'

import { useStore } from '../Store/store'

import { auth, db } from '../firebase/firebase'
import { doc, onSnapshot } from "firebase/firestore"

import { createUserWithEmailAndPassword, 
    onAuthStateChanged,
    signInWithEmailAndPassword, 
    signOut,
    updateProfile, 
    sendPasswordResetEmail, 
    sendEmailVerification 
} from "firebase/auth"

// Make Different component for DB

const AuthContext = createContext()
const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }) {

    const dispatch = useStore()[1]

    const [currentUser, setCurrentUser] = useState(null) //Auth
    const [currentUserData, setCurrentUserData] = useState({}) //db


    // --------------- signup ------------------
    const signUp = (email, password, firstName) => createUserWithEmailAndPassword(auth, email, password).then(async (cred) => {
        await updateProfile(cred.user, { displayName: firstName })
        await sendEmailVerification(cred.user)
    })

    //------------------------- login ------------------
    const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password)



    // ----------------- logOut ----------------------
    const logOut = () => {
        signOut(auth)
        setCurrentUserData({})
    }

    //-------------- Get from DB -----------------------
    const getUserData = email => onSnapshot(doc(db, 'users', auth.currentUser?.uid), (doc) => {
        setCurrentUserData(doc.data())
        dispatch('LOGGED_IN_TRUE')
        setTimeout(() => {
            dispatch('CHANGE_BACKDROP_STATE', false)
        }, 300)
    })
    
    
    const resetPassword = email => sendPasswordResetEmail(auth, email)


    // console.log('user', currentUser?.uid)


    useEffect(() => {
        const unsubscribe = () => onAuthStateChanged(auth, user => {
            if (user) {
            setCurrentUser(user)
            getUserData(user.email)
            }
        })
        return unsubscribe
    }, [auth.currentUser?.email]) // isLoggedIn



    const value = {
        currentUser,
        currentUserData,
        signUp, logIn, logOut,
        resetPassword,
    }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export { useAuth, AuthProvider }
export default AuthContext

