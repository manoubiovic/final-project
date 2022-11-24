import React from 'react'
import { useSelector } from 'react-redux'
function Profile() {
    const user = useSelector((store) => store.user?.user);
    console.log(user)
  return (
    <div style={{marginTop:"150px"}}>
       <h1>{user.name}</h1>
    </div>
  )
}

export default Profile