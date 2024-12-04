/**
 * FUNCTIONS
 * funktsioone kasutame korduvate tegevuste automatiseerimiseks.
 * funktsioon võtab sulgude vahele parameetrid. (placeholders)
 * keyword return tagastab misiganes peale teda tuleb;
 * kui tahame palju asju tagastada, teeme seda koodiblokina
 */

function sum(num1, num2) {
    return num1 +  num2;
}

/**
 * IIFE - funktsioon, mis kutsutakse otse välja.
 * 
 * 
*/
(() => {
    console.log("IIFE");
})();






/**
 * Arrow function
 * 
 * 
 */

const fullName = (firstName, lastName) => {
    return firstName + ' ' +  lastName;
    // või
    return `${firstName} ${lastName}`; 
}



const summaryOfTwoNumbers = sum(4,6);
console.log(fullName("Mariliis", "Zenkevics"));