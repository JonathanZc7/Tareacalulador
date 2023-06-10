const fs = require('fs');

// Función para guardar la operación en un archivo
function saveOperation(operation) {
  fs.appendFile('operaciones.txt', operation + '\n', (err) => {
    if (err) {
      console.error('Error al guardar la operación:', err);
    } else {
      console.log('Operación guardada correctamente.');
    }
  });
}

// Ejemplo de uso
const operation = '2 + 2 = 4';
saveOperation(operation);