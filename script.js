let result = document.getElementById('result'); // Obtener el elemento con el ID 'result' y guardarlo en la variable result

function appendValue(value) {
  result.value += value; // Agregar el valor al campo de entrada (input) result
}

function clearResult() {
  result.value = ''; // Borrar el contenido del campo de entrada (input) result
}

function backspace() {
  result.value = result.value.slice(0, -1); // Eliminar el último carácter del contenido del campo de entrada (input) result
}

function calculateResult() {
  try {
    result.value = eval(result.value); // Evaluar la expresión matemática ingresada en el campo de entrada (input) result y asignar el resultado al campo de entrada
  } catch (error) {
    result.value = 'Error'; // Si ocurre un error al evaluar la expresión, mostrar 'Error' en el campo de entrada (input) result
  }
}
