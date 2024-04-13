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


/* RECUPERO ELEMENTI */ 
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


/* CONTROLLO RISPOSTA */
console.log(buttonElement, numberElement, recipeSecondElement, secondRemainingElement, recipeHiddenElement, numberFirstField, numberSecondField, numberThirdField, numberFourthField, numberFifthField, recipeConfirmsButton);


/* CREO VARIBILE DA MANIPOLARE  */
let min = 1
let max = 100


/* CREO COSTANTI */
const number = 5
const arrayNumbers = []



/* EVENTO AL CLICK SUL BOTTONE RICOMINCIA  */ 
buttonRestartElement.addEventListener('click', () => {


    /* RICARICA LA PAGINA */
    window.location.reload ();

})


//? FUNZIONI 


/* CREO FUNZIONE PER GENERARE NUMERI CASUALI PASSANDO 2 ARGOMENTI (VARIBILI MIN E MAX) */
const getgenerNumbers = (min,max) => {


    /* FINCHE' LA LUNGEZZA DELL'ARRAY E' MINORE DI NUMBER(5) CONTINUA */
    while (arrayNumbers.length < number ) {


        /* CREO NUMERI RANDOM UTILIZZANDO MAX E MIN COME VALORI */
        const randomNumbers = Math.floor(Math.random()* (max + 1 - min) ) + min


        /* SE NELL'ARRAY NON E' IUNCLUSO IL NUMERO RANDOM */
        if (!arrayNumbers.includes(randomNumbers)) {


            /* AGGIUNGI IL NUMERO */
            arrayNumbers.push(randomNumbers);
        
        }
    }


    /* RESTITUISCO VALORE */
    return arrayNumbers;

}



/* FUNZIONE PER GENERARE LE CASELLE PASSANDO COME ARGOMENTO L'ARRAY CREATO */
const getCell = (generNumbers) => {


    /* CREO UNA VARIBILE E USO IL METODO MANIPOLAZIONE DOM PER CREARE UN DIV */
    const list = document.createElement("div");


    /* AGGIUNGO ALLA VARIBILE LIST UNA CLASSE */
    list.classList.add('recipe-number')


    /* CICLO FOR SULLA LUNGHEZZA DELL'ARRAY(arrayNumbers) E INCREMENTO DI 1  */
    for (let i = 0; i < generNumbers.length; i++) {


        /* CREO UNA VARIBILE E USO IL METODO MANIPOLAZIONE DOM PER CREARE UN DIV */
        const items = document.createElement("div");


        /* ALLA VARIBILE CREATA AGGIUNGO I NUMERI CHE CI SONO DENTRO ALL'ARRAY */
        items.append(`${generNumbers[i]}`);


        /* METTO DENTRO ALLA VARIABILE LIST OGNI SINGILO ITEMS (NODO) */
        list.appendChild(items);
        
    }


    /* RESTITUISCO VALORE */
    return list;
}


/* CREO UN EVENTO AL CLICK SUL BOTTONE INIZIA */
buttonElement.addEventListener('click', () => {

    /* DISABILITO IL BOTTONE */
    buttonElement.disabled = true;


    /* AGGIUNGO LA CLASSE D-NONE (TEXT-PLAY) */
    textPlayElement.classList.add('d-none');


    /* RIMUOVO LA CLASSE D-NONE (TEXT-SECOND) */
    textSecondElement.classList.remove('d-none')


    /* RIMUOVO LA CLASSE D-NONE (second-remaining) */
    secondRemainingElement.classList.remove('d-none');


    /* CREO VARIBILI DA MANIPOLARE  */
    let score = 0;
    let scoreTime = score + 's'


    /* METTO IN UNA VARIBILE LA FUNZIONE CHE GENERA NUMERI RANDOM E GLIPASSO COME ARGOMENTO MIN, MAX */
    const generNumbers = getgenerNumbers(min,max)


    /* CONTROLLO RISPOSTA */
    console.log(generNumbers);

    
    /* METTO IN UNA VARIBILE LA FUNZIONE CHE GENERA LE CASELLE E GLI PASSO COME ARGOMENTO ARRAY CON I NUMERI RANDOM GENERATI */
    const cell = getCell(generNumbers);

    
    /* METTO DENTRO ALLA VARIABILE NUMBERELEMENT OGNI NUMERO CREATO (NODO) */
    numberElement.appendChild(cell);

    
    /* STAMPO IN PAGINA IL TIMER */
    secondRemainingElement.innerText = scoreTime

    
    /* CREO UN CRONOMETRO CHE ARRIVA A TOT SECONDI E SI FERMA */
    setInterval (() => {


        /* SE IL NUMERO DEL TEMPO E MINORE DI 3 */
        if (score < 3) {


            /* INCREMENTO DI 1  */
            scoreTime = ++score + 's'


            /* STAMPO IN PAGINA */
            secondRemainingElement.innerText = scoreTime

        }

        /* SE IL NUMERO DEL TEMPO E IDENTICO A 3 */
        if (score === 3) {


            /* METTO LA CLASSE D-NONE AI NUMERI GENRATI CASUALEMNTE */
            numberElement.classList.add('d-none');


            /* METTO LA CLASSE D-NONE AL RECIPIENTE DEI SECONDI */
            recipeSecondElement.classList.add('d-none');


            /* RIMUOVO LA CLASSE D-NONE AL RECIPIENTE DEGLI INPUT IN MODO CHE L'UTENTE POSSO DARMI LA RISPOSTA */
            recipeHiddenElement.classList.remove('d-none');


            /* METTO LA CLASSE D-NONE AL BOTTONE INIZIA */
            buttonElement.classList.add('d-none');
        }

        /* TEMPO STABILITO DEL CRONOMETRO IN MILLISECONDI  */
    }, 1000 )

})


/* EVENTO AL CLICK SUL BOTTONE CONFERMA */
recipeConfirmsButton.addEventListener('click', () => {
    
    
    /* METTO LA CLASSE D-NONE IN MODO DA NASCONDERE TUTTO IL CONTENUTO */
    recipeMainELement.classList.add('d-none');

    
    /* RECUPERO IL VALORE DELL'UTENTE (I NUEMRI CHE METTE NEL L'INPUT) */
    const inputFirst = numberFirstField.value;
    const inputSecond = numberSecondField.value;
    const inputThird = numberThirdField.value;
    const inputFourth = numberFourthField.value;
    const inputFifth = numberFifthField.value;


    /* CONTROLLO RISPOSTA */
    console.log(inputFirst, inputSecond, inputThird, inputFourth, inputFifth);

    
    /* METTO I VALORI INSERITI DALL'UTENTE IN UN ARRAY */
    const arrayUser = [inputFirst, inputSecond, inputThird, inputFourth, inputFifth];


    /* CONTROLLO RISPOSTA */
    console.log(arrayUser);

    
    /* CONTROLLO SE L'ARRAY DEI NUMERI MESSI DALL'UTENTE SIANO IDENTICI ALL'ARRAY DEI NUMERI RANDOM */
    const comparison = arrayUser.toString() === arrayNumbers.toString()

    
    /* SE LA VARIBILE ESISTE E I DUE ARRAY SONO INDETICI */
    if (comparison) {


        /* RIMUOVO LA CLASSE D-NONE (VINTO) */
        wonElement.classList.remove('d-none');


        /* ALTRIMENTI */
    } else {


        /* RIMUOVO LA CLASSE D-NONE (PERSO) */
        lostElement.classList.remove('d-none');
        
    } 

})



