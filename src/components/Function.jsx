const message = () => {
  alert('Hola Amigo mío 😇');
};

function Button() {
  return (
    <button type="submit" onClick={() => message()}>¡Presioname!</button>

  );
}

export default Button;
