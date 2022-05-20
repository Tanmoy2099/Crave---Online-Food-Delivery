import React from 'react'
import classes from './UserProfile.module.css'
import { useAuth } from '../contexts/AuthContext'


const UserProfile = () => {
    
    const { currentUserData } = useAuth()

    const address = currentUserData?.Addresses.map((addr, index) => {
        return <ul key={index} style={{listStyleType: 'none'}}>
        <li>address: {addr.Address} </li>
        <li>state: {addr.State} </li>
        <li>ZipCode: {addr.ZipCode} </li>
        </ul>
    })



    return <div className={classes.container}>
        <div className={` ${classes.navMask}`} />
        <div className='container d-flex p-2'>
            <input type="text" className={`${classes.dp}`} value={currentUserData?.DisplayPicture} readOnly />
            <h1 className='p-5 mx-3'>Welcome! {currentUserData?.FullName}</h1>
        </div>
        {currentUserData?.FavoriteFood && <div className='container fs-1'>Favorite Orders</div> }
        <div className='container fs-1 '>Address Book</div>
        <div className='container fs-1'>{address}</div>

    </div>

}

export default UserProfile