export const checkEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    const emailValid = regex.test(email);
    return emailValid
}

export const handleSubmit = (event) => {
    event.preventDefault();
    const e = event.target
    const emailValid = checkEmail(e.email.value)
    console.log(emailValid);
    if (!emailValid) {
        alert('😬 Invalid email')
        return
    }
    const data = {
        firstName: e.fName.value,
        lastName: e.lName.value,
        username: e.username.value,
        email: e.email.value,
    }

    console.table(data)
    return data
}

export const Form = () => {
    const style = {
        display: "flex",
        justifyContent: "space-between",
        gap: "10px"
    }

    return (
        <form onSubmit={handleSubmit}>
            <label style={style}>First Name:
                <input type="text" defaultValue="Nombre" name="fName" />
            </label><br />
            <label style={style}>Last Name:
                <input type="text" defaultValue="Apellido" name="lName" />
            </label><br />
            <label style={style}>Username:
                <input type="text" defaultValue="Nombre de usuario" name="username" />
            </label><br />
            <label style={style}>E-mail:
                <input type="email" defaultValue="myUser@inove.com.ar" name="email" />
            </label><br />
            <input type="submit" value="Update profile" />
        </form>
    )


}