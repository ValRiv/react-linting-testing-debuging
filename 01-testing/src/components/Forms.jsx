const Form = () => {
    const style = {
        display: "flex",
        justifyContent: "space-between",
        gap: "10px"
    }
    
    return (
        <form onSubmit={(e) => console.table(e.target)}>
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
                <input type="email" defaultValue="myUser@inove.com.ar" name="fname" />
            </label><br />
            <input type="submit" value="Update profile" />
        </form>
    )


}

export default Form;