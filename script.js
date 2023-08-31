/*
numeri random: 
generare 10 numeri random 
(con un for o con un while) 
attraverso una funzione (copiamola da w3schools) 
e stamparli a schermo
*/

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// const randomNumber = getRndInteger(1, 10);
// console.log(getRndInteger(1, 10));
// console.log(randomNumber);

for (let i=0; i<10; i++) {
    const randomNumber = getRndInteger(1, 10);
    console.log(randomNumber);
}