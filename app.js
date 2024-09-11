const myForm = document.getElementById('myForm');

myForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const valor = Number(document.getElementById('saludo').value);
  const container = document.getElementById('container');
  container.textContent = '';

  for(let i = 0; i < valor; i++){
    let elemento = document.createElement('h3');
    elemento.textContent = 'Hola';
    container.append(elemento);
  }
})