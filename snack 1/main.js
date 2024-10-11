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

for (let i = 0; i < biciclette.length; i++) {
    const bici = biciclette[i];
    console.log(bici.nome, bici.peso);

    const markup = `
    <div class="col">
                <div class="card">
                    <p>${bici.peso}</p>
                </div>
            </div>
    `

 

}  
biciRowEl.insertAdjacentElement('afterend', markup)
