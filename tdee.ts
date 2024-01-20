import { ActivityLevel, MacronutrientDistribution, TDEEInput, TDEEResult } from './constant';

function calculateTDEE(input: TDEEInput): TDEEResult {
  const { weightKg, heightCm, age, gender, activityLevel, bodyFatPercentage, macronutrientProfile } = input;

  // Calculate BMR based on body fat percentage using the Katch-McArdle Equation
  const leanBodyMass = bodyFatPercentage
      ? weightKg * (1 - bodyFatPercentage / 100)
      : weightKg;

  const bmr = gender === 'male'
      ? 88.362 + (13.397 * leanBodyMass) + (4.799 * heightCm) - (5.677 * age)
      : 447.593 + (9.247 * leanBodyMass) + (3.098 * heightCm) - (4.330 * age);

  // TDEE calculation based on BMR and activity level
  const tdee = bmr * activityLevel;

  // Suggested calorie intake for maintenance, cutting, and bulking
  const maintenance = tdee;
  const cutting = tdee * 0.8; // Suggested 20% caloric deficit for cutting
  const bulking = tdee * 1.2; // Suggested 20% caloric surplus for bulking

  let macronutrientDistribution: MacronutrientDistribution | undefined;

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

  return { tdee, maintenance, cutting, bulking, macronutrientDistribution };
}
// Example usage with macronutrient profile
const userInputWithMacronutrientProfile: TDEEInput = {
    weightKg: 62,
    heightCm: 170,
    age: 25,
    gender: 'male',
    activityLevel: ActivityLevel.VeryActive,
    bodyFatPercentage: 18,
    macronutrientProfile: 'lowerCarb',
};

const result = calculateTDEE(userInputWithMacronutrientProfile);

console.log(`Your Total Daily Energy Expenditure (TDEE) is approximately ${result.tdee.toFixed(2)} calories per day.`);
console.log(`Suggested calories for maintenance: ${result.maintenance.toFixed(2)} calories per day.`);
console.log(`Suggested calories for cutting: ${result.cutting.toFixed(2)} calories per day.`);
console.log(`Suggested calories for bulking: ${result.bulking.toFixed(2)} calories per day.`);

if (result.macronutrientDistribution) {
    console.log(`Macronutrient distribution: Carbohydrate: ${result.macronutrientDistribution.carbohydrate.toFixed(2)}g, Protein: ${result.macronutrientDistribution.protein.toFixed(2)}g, Fat: ${result.macronutrientDistribution.fat.toFixed(2)}g`);
}
