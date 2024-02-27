import React from 'react'

const Navbar = () => {
    const isLoggedIn = true;
    const userList = ['Bukitkit', 'Lukaykay', 'Kurdapya']
  return (
    <div>
        <h1>Welcome {isLoggedIn ? 'User' : 'Guest'}!</h1>
        <ul>
            {userList.map((user) => (
                <li key={user}>{user}</li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar