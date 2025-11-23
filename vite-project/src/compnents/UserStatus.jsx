const UserStatus = ({loggedIn,IsAdmin}) =>{
    return (
        <div>
            {loggedIn && IsAdmin &&<h1>welcome admin</h1>}
               {loggedIn && !IsAdmin &&<h1>welcome user</h1>}
        </div>
    )
}

export default UserStatus