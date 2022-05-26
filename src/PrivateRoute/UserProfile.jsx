import React from 'react'
import classes from './UserProfile.module.css'
import { useAuth } from '../contexts/AuthContext'


const UserProfile = () => {

    const { currentUserData, currentUser } = useAuth()

    const address = currentUserData?.Addresses.map((addr, index) => {
        return <ul key={index} className={` ${classes.address} mb-2`}>
            <li>address: {addr.Address} </li>
            <li>state: {addr.State} </li>
            <li>ZipCode: {addr.ZipCode} </li>
        </ul>
    })



    return <div className={classes.container}>

        <div className={` ${classes.navMask}`} />
        <div className={`container ${classes.details}`}>

            <div className={` d-flex p-2 `}>

                <input type="text" className={`${classes.dp}`} value={currentUserData?.DisplayPicture} readOnly />

                <div>
                    <h1 className='p-3 mx-3'>Welcome! {currentUserData?.FullName}</h1>
                    <h3 className='mx-5'>Contact Details: {currentUserData?.PhoneNumber}</h3>
                    <h3 className='mx-5'>Email: {currentUser?.email}
                        {currentUser?.emailVerified ?
                            <span className={`${classes.verified}`}> Verified</span>
                            :
                            <span className={`${classes.NotVerified}`} > Not Verified</span>}

                    </h3>
                </div>

            </div>
            {currentUserData?.FavoriteFood && <div className='container fs-1'>Favorite Orders</div>
            }

            <div style={{ fontFamily: "'Dancing Script', cursive", fontSize: "4rem", fontWeight: 800 }}>Address Book</div>
            <ol className={` fs-2 `}>{address}</ol>
        </div>
    </div>

}

export default UserProfile