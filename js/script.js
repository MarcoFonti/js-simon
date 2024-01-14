// Check 
console.log('JS OK');

//! SCALETTA 
/*
- 1 RECUPERO ELEMENTI 
- 2 VARIBILE CHE CONOSCO
- 3 EVENTO AL CLICK RICOMINCIA 
- 4 FUNZIONI
- 5 EVENTO AL CLICK INZIA
- 6 EVENTO AL CLICK CONFERMA 
*/

//RECUPERO ELEMENTI 
const buttonRestartElement = document.querySelector('.button-restart')
const buttonElement = document.querySelector('.recipe-button');
const wonElement = document.querySelector('.won');
const lostElement = document.querySelector('.lost');
const recipeMainELement = document.querySelector('.recipe-main');
const textPlayElement = document.getElementById('text-play')
const numberElement = document.querySelector('.recipe-number');
const recipeSecondElement = document.querySelector('.recipe-second');
const textSecondElement = document.querySelector('.text-second')
const secondRemainingElement = document.querySelector('.second-remaining');
const recipeHiddenElement = document.querySelector('.recipe-hidden');
const numberFirstField = document.getElementById('number-first');
const numberSecondField = document.getElementById('number-second');
const numberThirdField = document.getElementById('number-third');
const numberFourthField = document.getElementById('number-fourth');
const numberFifthField = document.getElementById('number-fifth');
const recipeConfirmsButton = document.querySelector('.recipe-confirms');

console.log(buttonElement, numberElement, recipeSecondElement, secondRemainingElement, recipeHiddenElement, numberFirstField, numberSecondField, numberThirdField, numberFourthField, numberFifthField, recipeConfirmsButton);

// VARIABILE CHE CONOSCO 
let min = 1
let max = 100
const number = 5
const arrayNumbers = []

// EVENTO AL BOTTONE RICOMINCIA 
buttonRestartElement.addEventListener('click', () => {
    window.location.reload ()
})


//? FUNZIONI 

// FUNZIONE PER GENERARE NUMERI CASUALI 
const getgenerNumbers = (min,max) => {


    while (arrayNumbers.length < number ) {
        const randomNumbers = Math.floor(Math.random()* (max + 1 - min) ) + min
        if (!arrayNumbers.includes(randomNumbers)) {
        arrayNumbers.push(randomNumbers);
        
        }
    }

    return arrayNumbers;

}

// FUNZIONE PER GENERARE LE CASELLE
const getCell = (generNumbers) => {

    const list = document.createElement("div");

    list.classList.add('recipe-number')

    for (let i = 0; i < generNumbers.length; i++) {

        const items = document.createElement("div");

        items.append(`${generNumbers[i]}`);

        list.appendChild(items);
        
    }

    return list;
}


// EVENTO ALL'INZIO
buttonElement.addEventListener('click', () => {

    // DISABILITO BOTTONE
    buttonElement.disabled = true;

    // AGGIUNGO E RIMUOVO LE CLASSI O ID
    textPlayElement.classList.add('d-none');

    textSecondElement.classList.remove('d-none')

    secondRemainingElement.classList.remove('d-none');

    // METTO IL VALORE DEL TEMPO AL CLICK
    let score = 0;
    let scoreTime = score + 's'

    // TOLGO NUMERI CASUALI
    numberElement.innerText = ''

    // RECUOERO LA FUNZIONE GENERA NUMERI
    const generNumbers = getgenerNumbers(min,max)

    console.log(generNumbers);

    // RECUPERO LA FUNZIONE GENERA CASELLE
    const cell = getCell(generNumbers);

    // AGGIUNGO LE CASELLE IN PAGINA
    numberElement.appendChild(cell);

    //METTO IN PAGINA IL TIMER
    secondRemainingElement.innerText = scoreTime

    // CRONOMETRO DI 30S
    setInterval (() => {

        if (score < 3) {
            scoreTime = ++score + 's'
            secondRemainingElement.innerText = scoreTime
        }

        if (score === 3) {
            numberElement.classList.add('d-none');
            recipeSecondElement.classList.add('d-none');
            recipeHiddenElement.classList.remove('d-none');
            buttonElement.classList.add('d-none');
        }

    }, 1000 )

})


// EVENTO AL CLICK CONFERMA
recipeConfirmsButton.addEventListener('click', () => {
    
    // RIMOVIAMO IL TUTTO
    recipeMainELement.classList.add('d-none');

    // RECUPERO VALORI UTENTE
    const inputFirst = numberFirstField.value;
    const inputSecond = numberSecondField.value;
    const inputThird = numberThirdField.value;
    const inputFourth = numberFourthField.value;
    const inputFifth = numberFifthField.value;

    console.log(inputFirst, inputSecond, inputThird, inputFourth, inputFifth);

    // LI METTO IN UN ARRAY
    const arrayUser = [inputFirst, inputSecond, inputThird, inputFourth, inputFifth];

    console.log(arrayUser);

    // CONFRONTO SE I NUMERI DEI DUE ARRAY SONO UGUALI
    const comparison = arrayUser.toString() === arrayNumbers.toString()

    // CONDIZIONE SE SONO UGUALI O DIVERSI
    if (comparison) {
        wonElement.classList.remove('d-none');
    } else {
        lostElement.classList.remove('d-none');
    } 

})



