
const message = ()=>{
    alert("Hola Amigo mío 😇")
}


const Button = ()=>{
    return(
        <button onClick={()=>message()}>¡Presioname!</button>
    )
}

export default Button;