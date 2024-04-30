var selectedRow = null;

// Mostrar alertas
function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// Clear All Fields
function clearFields() {
    document.querySelector("#nombres").value = "";
    document.querySelector("#apellidos").value = "";
    document.querySelector("#telefonos").value = "";
    document.querySelector("#direccion").value = "";
}

// Add Data

document.querySelector("#operadores-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    // Get Form Values
    const nombres = document.querySelector("#nombres").value;
    const apellidos = document.querySelector("#apellidos").value;
    const telefono = document.querySelector("#telefono").value;
    const direccion = document.querySelector("#direccion").value;


    
    // Validate
    if (firstName == "" || lastName == "" || rollNo == "") {
        showAlert("Por favor completa todos los campos", "danger");
    } 
    else {
        if (selectedRow == null) {
            const list = document.querySelector("#operadores-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${nombres}</td>
                <td>${apellidos}</td>
                <td>${telefono}</td>
                <td>${direccion}</td>
                <td>
                    <a href="#" class="btn btn-warning btn-sm edit">Editar</a>
                    <a href="#" class="btn btn-danger btn-sm delete">Borrar</a>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Operador agregado", "success");
        } 
        else {
            selectedRow.children[0].textContent = nombres;
            selectedRow.children[1].textContent = apellidos;
            selectedRow.children[3].textContent = telefono;
            selectedRow.children[4].textContent = direccion;
            selectedRow = null;
            showAlert("Información del estudiante editada", "info");
        }

        if (selectedRow) { // Actualizar estudiante existente si selectedRow no es null
            const updatedNombres = document.querySelector("#nombres").value;
            const updatedApellidos = document.querySelector("#apellidos").value;
            const updatedTelefono = document.querySelector("#telefono").value;
            const updatedDireccion = document.querySelector("#direccion").value;
        
            // Actualizar los datos en la fila seleccionada
            selectedRow.children[0].textContent = updatedNombres;
            selectedRow.children[1].textContent = updatedApellidos;
            selectedRow.children[3].textContent = updatedTelefono;
            selectedRow.children[4].textContent = updatedDireccion;
        
            // Restablecer selectedRow y el texto del botón (opcional)
            selectedRow = null;
            document.querySelector("#student-form button").textContent = "Agregar";
        }

        clearFields();

        
    }
});

// Edit Data

document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("edit")) {
      selectedRow = target.parentElement.parentElement; // Obtener la fila de la tabla
      document.querySelector("#nombres").value = selectedRow.children[0].textContent;
      document.querySelector("#apellidos").value = selectedRow.children[1].textContent;
      document.querySelector("#telefono").value = selectedRow.children[2].textContent;
      document.querySelector("#coreo").value = selectedRow.children[3].textContent;
      document.querySelector("#direccion").value = selectedRow.children[4].textContent;
  
      
    }
  });


// Delete Data 

document.querySelector("#student-list").addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("delete") && target.parentElement) {
      target.parentElement.parentElement.remove(); // Eliminar solo si parentElement existe
      showAlert("Información del estudiante eliminada", "danger");
    }
  });

  // crear dataBase
  