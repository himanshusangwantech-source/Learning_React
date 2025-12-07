import { useState } from "react"
const Friends = () => {
   const [Friend,SetFriend] = useState(["Himanshu",'palak'])
   console.log(Friend)
   const AddFriend = () =>{
    
        SetFriend([...Friend,"siya"])
    
   }

    const RemoveFriend = () =>{
    
        SetFriend(Friend.filter((item)=>item !== 'Himanshu'))
    
   }
   const UpdateFriend = () =>{
    
        SetFriend(Friend.map((item)=>item == 'Himanshu'?'himanshu sangwan':item))
    
   }
    return(
        <section>
            Add remove and update Friends
            {Friend.map((item)=>
            <li key={Math.random()}>
                <ul>{item}</ul>
            </li>
            
            )}
            <button onClick={AddFriend}>AddFriend</button>
            <button onClick={RemoveFriend}>RemoveFriend</button>
            <button onClick={UpdateFriend}>Update Friend</button>




        </section>
    )
}

export default Friends