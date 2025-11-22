const display = "Hello welocome to my Page"
const today = new Date().toLocaleDateString();
const name = 'himanshu'

const Greeting = () =>{
    return(
        <div>
           <h1>{display}</h1>
           <p>Today date is {today}</p> 
           <p>Hey {name} time is {today}</p>
        </div>
    )


}

export default Greeting;