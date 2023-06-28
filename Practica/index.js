const miBoton = document.getElementyById(`miBoton`);
function handleClick(){
    alert( ` Hola haz hecho click en el boton.`);
}
miBoton.addEventListener(`click`, handleClick);

const form = document.getElementById (`myForm`);

form.addEventListener(`submit`, function(event){
  event.preventDefault();
  validateForm();
});

function validateEmail (email) {
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
  return regex.test(email)
}

function validateForm() {
  const emailInput = document.getElementById(`email`);
  const email = emailInput.ariaValueMax;

  if (validateEmail(email)) {
    alert (`por favor ingrese un correo electronico valido.` );
  } else {
    alert (`correo electronico enviado correctamente.`);
  }
}