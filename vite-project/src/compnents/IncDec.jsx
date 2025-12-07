import { useState } from "react"

const IncDec = () => {
    
const [count, Setcount] = useState(100)
console.log(count)
console.log(Setcount)

const Inc = () => {
    return (
        Setcount(count + 1)
    )
}
const Dec = () => {
    return (
        Setcount(count - 1)
    )
}



    return (
        <div>Increment and decrement counter for Use state
            <h1>count{count}</h1>
            <button onClick={Inc}>+</button>
            <button onClick={Dec}>-</button>

        </div>
    )

}

export default IncDec