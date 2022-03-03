import React from 'react'
import { useSelector } from 'react-redux'
// add any needed imports here

function Users() {
  const users = useSelector((state) => state.users)
  const userCount = useSelector((state) => state.users.length)
  // console.log(users)

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.username}>{user.username}</li>
        ))}
      </ul>
      Total Users: {userCount}
    </div>
  )
}

export default Users
