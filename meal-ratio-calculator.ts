import { MacronutrientType, Substance } from './constant';

function calculateGrams(substance: Substance): number {
    return (substance.gramOfFood * substance.targetContain) / substance.ratio;
}

// Example usage
const chicken: Substance = {
    typeOfFood: 'chicken',
    typeOfMacronutrient: MacronutrientType.Protein,
    ratio: 31,
    gramOfFood: 100,
    targetContain: 67.33,
};

const rice: Substance = {
    typeOfFood: 'rice',
    typeOfMacronutrient: MacronutrientType.Carbohydrate,
    ratio: 28,
    gramOfFood: 100,
    targetContain: 33.66,
};

const resultChicken = calculateGrams(chicken);
const resultRice = calculateGrams(rice);

console.log(`Approximately ${resultChicken.toFixed(2)} grams of ${chicken.typeOfFood} would contain ${chicken.targetContain} grams of ${chicken.typeOfMacronutrient}.`);
console.log(`Approximately ${resultRice.toFixed(2)} grams of ${rice.typeOfFood} would contain ${rice.targetContain} grams of ${rice.typeOfMacronutrient}.`);
