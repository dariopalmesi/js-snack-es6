// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const squadre = [
    {
        nome: "Palermo",
        puntiFatti: squadreCalcioRandom(0, 100),
        falliSubiti: squadreCalcioRandom(0, 150)
    },
    {
        nome: "Milan",
        puntiFatti: squadreCalcioRandom(0, 100),
        falliSubiti: squadreCalcioRandom(0, 150)
    },
    {
        nome: "Inter",
        puntiFatti: squadreCalcioRandom(0, 100),
        falliSubiti: squadreCalcioRandom(0, 150)
    }
];

function squadreCalcioRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}
 console.log(squadre);