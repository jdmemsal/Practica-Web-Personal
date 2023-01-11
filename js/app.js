
// AUMENTAR DE TAMAÑO LAS IMAGENES QUE TENEMOS EN LA WEB
const imagenes = document.querySelectorAll('.galeria .contenedor-imagen');
const imagenModal = document.getElementById('imagen-modal'); //toma todos los modales de todas las imagenes

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', () => {
        const ruta = imagen.querySelector('img').src; //por cada imagen que hagan click, accedemos al atributo img y su src para tomar su ruta
        imagenModal.src = ruta; //hace que el modal sea = a la imagen guardada en la ruta que acabamos de recoger del atribut img
    })
});

//Prevenir que el boton enviar -envie- informacion, no quiero que recargue
//porque no hay lugar al que enviar informacion
//const btEnviar = document.querySelector('.btFormulario');
//btEnviar.addEventListener('click', function(e){
//    console.log(e);
//    e.preventDefault();
//    console.log('Enviando formulario');
//});

//Recoger datos del formulario
//para hacerlo asi es importante que los campos en datos = idformulario
const datos = {
    nombre: '',
    correo: '',
    mensaje: ''
}
//links variables con elementos (id y clases)
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const mensaje = document.querySelector('#mensaje');
const validarFormulario = document.querySelector('.formulario');

//eventListeners
nombre.addEventListener('input', datosFormulario);
correo.addEventListener('input', datosFormulario);
mensaje.addEventListener('input', datosFormulario);
//EventListener de Validar correctamente un formulario
validarFormulario.addEventListener('submit', function(evento){
    //para que no recargue la pagina
    evento.preventDefault();
    
    //Validar formulario
    const {nombre, correo, mensaje} = datos;

    if(nombre === '' || correo==='' || mensaje===''){

        alert('El formulario tiene campos no completados. Todos los campos son obligatorios.');
        return; //cortamos la ejecucion del codigo
    }

    //Enviar formulario
    confirmarEnvio('El formulario ha sido enviado. Gracias.');
    //console.log('Validando Formulario');
});

//funciones
function datosFormulario(e){
    datos[e.target.id] = e.target.value;
    //console.log(datos);
}

//Confirmacion de formulario enviado
function confirmarEnvio(formsent){
    const confirm = document.createElement('P');
    confirm.textContent = formsent;
    confirm.classList.add( 'formulario__confirmado' );

    validarFormulario.appendChild(confirm);

    //desaparecera en 5 seg
    setTimeout(()=>{
        confirm.remove();
    }, 5000);
}