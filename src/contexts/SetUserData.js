
import { v4 as uuidv4 } from 'uuid'

import { doc, setDoc } from "firebase/firestore"
// import { useStore } from '../Store/store'
import { db } from '../firebase/firebase';
import { auth } from '../firebase/firebase';

const SetUserData = ({ firstName, lastName, email, address, mystate, zip, phone, news_letter_checked }) => {

    // const { registrationForm } = useStore()[0]
    // const { firstName, lastName, email, address, mystate, zip, phone } = registrationForm

    // const setuserData = () => setDoc(doc(db, 'users', `${email.value}`), {
    const setuserData = setTimeout(() => {
        setDoc(doc(db, 'users', `${auth.currentUser?.uid}`), {
            userId: uuidv4(),
            Email: email.value,
            FirstName: firstName.value,
            LastName: lastName.value,
            FullName: firstName.value + ' ' + lastName.value,
            PhoneNumber: phone.value,
            Addresses: [{
                Address: address.value,
                State: mystate.value,
                ZipCode: zip.value
            }],
            newsLetter: news_letter_checked,
            DisplayPicture: (firstName.value.charAt(0) + lastName.value.charAt(0)).toUpperCase()
        })
    }, 350)
    return setuserData()
}

export default SetUserData
