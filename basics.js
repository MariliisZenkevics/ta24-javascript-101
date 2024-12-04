//Global Scope
const teacherName = "Karl Rauniste";

//DATA TYPES
// string => "See on string väärtus", 'See on samuti string väärtus, `See on ka string väärtus`
// Number (Int, float) => 42
// Boolean => true/false, jah/ei, 1/0
//suurem kui 0 - true
//0 ja miinused - false
//const isMate = false
//const isMate = true
// Array => [] option+7
// Object => {} option+8 hea omaduste lahti kirjutamiseks
// kommentaari märk => kõik blokki ja shift+command+7 
//script viimase body elemendina html sisse

//Ridade liigutamine - option ja noolega alla või üles

//muutujad - nimetus ja väärtus (Muutumatu vs muudetav)
//mutujate niemtus on camelCase and it makes some sense
//const ühekordne väärtus
const fruit = 'Banaan'; //muutuja, mida ei saa enam muuta
let model = "BMW"; //muutuja, mida saab veel muuta
const nullableVariable = null; // Null tähendab, et muutujal ei ole väärtust
const undefinedVariable = undefined; // Ei ole defineeritud


//Koodiblokk => SCOPE (mingid piirid, mille raames mingit projekti tehakse)
//Koodiblokki tähistab {} sümbol (objekti sümbol)
// Scope on {} olev kood
// Global scope jääb sellest välja nt: const teacherName = "Karl Rauniste";
// Koodiblokk on privaatne, seda väljastpoolt keegi ei näe
//Function Scope
const calculateSum = (number1, number2) => {
    const number3 = 256;
    //console.log(teacherName);
    return number1 + number2;
};

calculateSum(1, 2);

// Hoisting on viis kuidas erroreid vältida. Paneb runtime'i ajal blokid ise
// loogiliselt paika, ehk siis scope'id paneb ette poole, nagu olema peaks, et ei tekiks erroreid.

//väljaspoolt koodiblokki ei saa midagi võtta

//Type casting
//Muudame number andmetüübi string andmetüübiks
const castNumber = 123456;
console.log("enne ...on minu tüüp", typeof castNumber);
console.log("peale castimist minu tüüp on", typeof Number(castNumber));
console.log(typeof String(castNumber));
console.log(Boolean(castNumber));

//Array => sümbol on [], toimub indekseerimine, esimene element kohal 0
const characters = ["T", "P", "I", "C", "S", "V", "A", "J", "R"];

// console.log(characters[7]);
// console.log(characters[6]);
// console.log(characters[5]);
// console.log(characters[6]);
// console.log(characters[4]);
// console.log(characters[3]);
// console.log(characters[8]);
// console.log(characters[2]);
// console.log(characters[1]);
// console.log(characters[0]);

// Loopimine => Korduslause. Igast array elemendist minnakse üle ing käiakse läbi script
// For loop
// i ei pea olema i, võib olla, mis tahes täht/nimi vm

for(i = 0; i < characters.length; i++) {
    console.log("For loop: ", characters[i]);
}


// forEach loop
characters.forEach((character) => {
    console.log("For each loop:",character);
});

/**
 * comparison - võrdlus
 * == vs === vs Object.is()
 *  Object.is is the sam ething as ===
 */

// == compares value of both sides. As values they are both equal: 5 or "5".
console.log(5 == "5"); //Returnes true 

// === Compares value and data-type of both sides. Number 5 is not equal to string 5
console.log(5 === "5");  //returnes false

