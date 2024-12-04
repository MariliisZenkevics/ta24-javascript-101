// //Objects 
// objekti tähistab {} koodibloki märgend
// objekt on asi, millel on iseloomulikud tunnused
// objekt koosneb key:value (brand: "Kia")
// objekti seest saame väärtust välj akutisda kasutades punkti ning keyd

const car = {
    brand: "Kia",
    model: "Proceed",
    year: 2024,
    isElectric: false,
    drive: function() {
        console.log("Drive please!")
    },
};

console.log(car.year);

const porche = new car("Porche", "Cayanne");

console.log("Porche".toUpperCase());
console.log(car.drive());

/**
 * typeof operant
 * annab teada, mis andmetüüp on muutuja sisse salvestatud
 * 
 * 
 */


const harrypotter = 4;
console.log(typeof harrypotter)
