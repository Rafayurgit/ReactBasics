import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import { use } from 'react';

function Profile() {
    const {user}= useContext(UserContext);

    if(!user) return <div>Enter values first</div>

    return <div>Hello {user.userName}</div>
  
}

export default Profile
