"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constant_1 = require("./constant");
function calculateGrams(substance) {
    return (substance.gramOfFood * substance.targetContain) / substance.ratio;
}
// Example usage
var chicken = {
    typeOfFood: 'chicken',
    typeOfMacronutrient: constant_1.MacronutrientType.Protein,
    ratio: 31,
    gramOfFood: 100,
    targetContain: 67.33,
};
var rice = {
    typeOfFood: 'rice',
    typeOfMacronutrient: constant_1.MacronutrientType.Carbohydrate,
    ratio: 28,
    gramOfFood: 100,
    targetContain: 33.66,
};
var resultChicken = calculateGrams(chicken);
var resultRice = calculateGrams(rice);
console.log("Approximately ".concat(resultChicken.toFixed(2), " grams of ").concat(chicken.typeOfFood, " would contain ").concat(chicken.targetContain, " grams of ").concat(chicken.typeOfMacronutrient, "."));
console.log("Approximately ".concat(resultRice.toFixed(2), " grams of ").concat(rice.typeOfFood, " would contain ").concat(rice.targetContain, " grams of ").concat(rice.typeOfMacronutrient, "."));
