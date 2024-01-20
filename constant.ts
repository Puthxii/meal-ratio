export enum ActivityLevel {
    Sedentary = 1.2,
    LightlyActive = 1.375,
    ModeratelyActive = 1.55,
    VeryActive = 1.725,
    ExtremelyActive = 1.9,
}

export enum MacronutrientType {
    Carbohydrate = 'carbohydrate',
    Protein = 'protein',
    Fat = 'fat',
}

export interface Substance {
    typeOfFood: string;
    typeOfMacronutrient: MacronutrientType;
    ratio: number;
    targetContain: number;
    gramOfFood: number;
}

export interface TDEEInput {
    weightKg: number;
    heightCm: number;
    age: number;
    gender: 'male' | 'female';
    activityLevel: ActivityLevel;
    bodyFatPercentage?: number;
    macronutrientProfile?: 'moderateCarb' | 'lowerCarb' | 'higherCarb';
}

export interface MacronutrientDistribution {
    carbohydrate: number;
    protein: number;
    fat: number;
}

export interface TDEEResult {
    tdee: number;
    maintenance: number;
    cutting: number;
    bulking: number;
    macronutrientDistribution?: MacronutrientDistribution;
}