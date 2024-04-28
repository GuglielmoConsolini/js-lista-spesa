let listaSpesa = ["latte","uova","pasta","passata di pomodoro","frutta","verdura"];
console.log(listaSpesa);

const listaHtml = document.querySelector("ul");

let i = 0;
while ( i < listaSpesa.length) {
   let elementiLista = listaSpesa[i];
   console.log(elementiLista,i);
   i++;

   listaHtml.innerHTML += `<li>${elementiLista}</li>`;
}