window.addEventListener("load", inicio);

var btn = document.getElementById("btn");
var alumno = {};
var alumnos=[];
var indiceModificar = -1;

function inicio() {
  btn.addEventListener("click", guardar);
}

function guardar() {
  
  var txtNombre = document.getElementById("nom");
  var txtApellido = document.getElementById("ape");
  var txtDni = document.getElementById("dni");
  var txtEdad = document.getElementById("edad");
  var txtForm = document.getElementById("form");
  var txtPago = document.getElementById("pago");
  

  if (txtNombre.value && txtApellido.value && txtDni.value && txtEdad.value && txtForm.value && txtPago.value) {
    
    
    alumno={};
    alumno.nombre = txtNombre.value;
    txtNombre.value = "";
    alumno.apellido = txtApellido.value;
    txtApellido.value = "";
    alumno.dni = txtDni.value;
    txtDni.value = "";
    alumno.edad = txtEdad.value;
    txtEdad.value = "";
    alumno.form = txtForm.value;
    txtForm.value = "";
    alumno.pago = txtPago.value;
    txtPago.value = "";


    if (indiceModificar !== -1) {
      // Si hay un índice almacenado, se modifica el elemento en lugar de agregarlo
      alumnos[indiceModificar] = alumno;
      indiceModificar = -1; // Se resetea el índice modificar
    } else {
      alumnos.push(alumno);
    }
    
    listar();
  } else {
    alert("Por favor, complete todos los campos.");
  }
}

function modificar(indice) {
  var alumnoModificar = alumnos[indice];
  var txtNombre = document.getElementById("nom");
  var txtApellido = document.getElementById("ape");
  var txtDni = document.getElementById("dni");
  var txtEdad = document.getElementById("edad");
  var txtForm = document.getElementById("form");
  var txtPago = document.getElementById("pago");

  txtNombre.value = alumnoModificar.nombre;
  txtApellido.value = alumnoModificar.apellido;
  txtDni.value = alumnoModificar.dni;
  txtEdad.value = alumnoModificar.edad;
  txtForm.value = alumnoModificar.form;
  txtPago.value = alumnoModificar.pago;

  indiceModificar = indice; // Almacenar el índice del elemento a modificar
}

function Eliminar(indice) {
  alumnos.splice(indice, 1);
  listar();
}






function listar() {
    var lista=document.getElementById("lista");

    lista.innerHTML=`<h3 class="titulotabla">Nombre</h3> <h3 class="titulotabla">Apellido</h3><h3 class="titulotabla">Dni</h3><h3 class="titulotabla">Edad</h3><h3 class="titulotabla">Categoria</h3><h3 class="titulotabla">Eliminar</h3><h3 class="titulotabla">Modificar</h3><h3 class="titulotabla">Estado</h3>`;

    for (var n = 0; n < alumnos.length; n++) {
      var cumpleCondicion = alumnos[n].pago >= 23;
  
      var categoria = cumpleCondicion ? "Autorizado" : "No Autorizado";
    lista.innerHTML += `<p class="alumno">${alumnos[n].nombre}</p>
    <p class="alumno">${alumnos[n].apellido}</p>
    <p class="alumno">${alumnos[n].dni}</p>
    <p class="alumno">${alumnos[n].edad}</p>
    <p class="alumno">${alumnos[n].form}</p>
    
    <button class="eliminar-btn" onclick="Eliminar(${n})">Eliminar</button>
    <button class="modificar-btn" onclick="modificar(${n})">Modificar</button>
    <p class="alumno">${categoria}</p>`
                        
    };



  
}



