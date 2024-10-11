// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.



const biciclette = [
    {
        "nome": "Mountain Bike Pro",
        "peso": "13 kg"
    },
    {
        "nome": "Bici da Corsa Ultra",
        "peso": "7.5 kg"
    },
    {
        "nome": "Bici Elettrica City",
        "peso": "24 kg"
    }
]


const biciRowEl = document.querySelector('.row')
console.log(biciRowEl);

const biciPesoMinore = 13

for (let i = 0; i < biciclette.length; i++) {
    const bici = biciclette[i];
    if (biciPesoMinore < bici ) {
        console.log('true');      
    }
    // console.log(bici.nome, bici.peso);


    // const markup = `
    // <div class="row">
    //             <div class="col">
    //                 <div class="card">
    //                     <p>${bici.peso}</p>
    //                 </div>
    //             </div>
    //         </div>
    // `

    // biciRowEl.insertAdjacentHTML('afterend', markup)

}

