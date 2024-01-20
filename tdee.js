"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constant_1 = require("./constant");
function calculateTDEE(input) {
    var weightKg = input.weightKg, heightCm = input.heightCm, age = input.age, gender = input.gender, activityLevel = input.activityLevel, bodyFatPercentage = input.bodyFatPercentage, macronutrientProfile = input.macronutrientProfile;
    // Calculate BMR based on body fat percentage using the Katch-McArdle Equation
    var leanBodyMass = bodyFatPercentage
        ? weightKg * (1 - bodyFatPercentage / 100)
        : weightKg;
    var bmr = gender === 'male'
        ? 88.362 + (13.397 * leanBodyMass) + (4.799 * heightCm) - (5.677 * age)
        : 447.593 + (9.247 * leanBodyMass) + (3.098 * heightCm) - (4.330 * age);
    // TDEE calculation based on BMR and activity level
    var tdee = bmr * activityLevel;
    // Suggested calorie intake for maintenance, cutting, and bulking
    var maintenance = tdee;
    var cutting = tdee * 0.8; // Suggested 20% caloric deficit for cutting
    var bulking = tdee * 1.2; // Suggested 20% caloric surplus for bulking
    var macronutrientDistribution;
    switch (macronutrientProfile) {
        case 'moderateCarb':
            macronutrientDistribution = {
                carbohydrate: 0.35 * maintenance / 4, // 4 calories per gram of carbohydrate
                protein: 0.30 * maintenance / 4, // 4 calories per gram of protein
                fat: 0.35 * maintenance / 9, // 9 calories per gram of fat
            };
            break;
        case 'lowerCarb':
            macronutrientDistribution = {
                carbohydrate: 0.20 * maintenance / 4,
                protein: 0.40 * maintenance / 4,
                fat: 0.40 * maintenance / 9,
            };
            break;
        case 'higherCarb':
            macronutrientDistribution = {
                carbohydrate: 0.50 * maintenance / 4,
                protein: 0.20 * maintenance / 4,
                fat: 0.30 * maintenance / 9,
            };
            break;
        default:
            // Default to moderateCarb if no profile is specified
            macronutrientDistribution = {
                carbohydrate: 0.35 * maintenance / 4,
                protein: 0.30 * maintenance / 4,
                fat: 0.35 * maintenance / 9,
            };
    }
    return { tdee: tdee, maintenance: maintenance, cutting: cutting, bulking: bulking, macronutrientDistribution: macronutrientDistribution };
}
// Example usage with macronutrient profile
var userInputWithMacronutrientProfile = {
    weightKg: 62,
    heightCm: 170,
    age: 25,
    gender: 'male',
    activityLevel: constant_1.ActivityLevel.VeryActive,
    bodyFatPercentage: 18,
    macronutrientProfile: 'lowerCarb',
};
var result = calculateTDEE(userInputWithMacronutrientProfile);
console.log("Your Total Daily Energy Expenditure (TDEE) is approximately ".concat(result.tdee.toFixed(2), " calories per day."));
console.log("Suggested calories for maintenance: ".concat(result.maintenance.toFixed(2), " calories per day."));
console.log("Suggested calories for cutting: ".concat(result.cutting.toFixed(2), " calories per day."));
console.log("Suggested calories for bulking: ".concat(result.bulking.toFixed(2), " calories per day."));
if (result.macronutrientDistribution) {
    console.log("Macronutrient distribution: Carbohydrate: ".concat(result.macronutrientDistribution.carbohydrate.toFixed(2), "g, Protein: ").concat(result.macronutrientDistribution.protein.toFixed(2), "g, Fat: ").concat(result.macronutrientDistribution.fat.toFixed(2), "g"));
}
