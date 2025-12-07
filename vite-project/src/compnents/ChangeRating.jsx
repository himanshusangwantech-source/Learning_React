import { useState } from "react"

const ChangeRating = () =>{
    
const [Movie,SetMovie] = useState({title : "Don",
    rating : 7
})
const ChangeRatin = () =>{
    SetMovie({...Movie,title :"don 2",rating : 8})
}


    return (
         <section>
      <h1>Movie and its Rating</h1>
      <h2>{Movie.title}</h2>
      <h3>{Movie.rating}</h3>
      <button onClick={ChangeRatin}>Change Rating</button>
    </section>
    )
}

export default ChangeRating