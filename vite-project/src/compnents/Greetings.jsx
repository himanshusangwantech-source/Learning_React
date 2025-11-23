const Greetings = ({timeOfDay}) =>{
    return (
        <div>
            {timeOfDay == 'morning'?
            <h1>Good morning</h1>:timeOfDay == "afternoon"?
        <h1>Good afternoon</h1>:<h1>good evening</h1>}
        </div>
    )
}
export default Greetings