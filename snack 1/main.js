// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.



const biciclette = [
    {
        "nome": "Mountain Bike Pro",
        "peso": 13
    },
    {
        "nome": "Bici da Corsa Ultra",
        "peso": 7.5
    },
    {
        "nome": "Bici Elettrica City",
        "peso": 24
    }]




let biciPeso = 13
let biciPesoMinore = []
const key = 'peso'

for (let i = 0; i < biciclette.length; i++) {
    const bici = biciclette[i];
    
    if (bici.peso < biciPeso ) {
        biciPesoMinore = biciclette[i]
    }




 }
//  const markup = `
// //      <div class="row">
// //                  <div class="col">
// //                      <div class="card">
// //                          <p>${biciPesoMinore}</p>
// //                      </div>
// //                  </div>
// //              </div>
// //      `

//      biciRowEl.insertAdjacentHTML('afterend', markup)
  
console.log(biciPesoMinore);

const divEl = document.getElementById('bici')
divEl.innerHTML = biciPesoMinore[key]