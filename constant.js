"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacronutrientType = exports.ActivityLevel = void 0;
var ActivityLevel;
(function (ActivityLevel) {
    ActivityLevel[ActivityLevel["Sedentary"] = 1.2] = "Sedentary";
    ActivityLevel[ActivityLevel["LightlyActive"] = 1.375] = "LightlyActive";
    ActivityLevel[ActivityLevel["ModeratelyActive"] = 1.55] = "ModeratelyActive";
    ActivityLevel[ActivityLevel["VeryActive"] = 1.725] = "VeryActive";
    ActivityLevel[ActivityLevel["ExtremelyActive"] = 1.9] = "ExtremelyActive";
})(ActivityLevel || (exports.ActivityLevel = ActivityLevel = {}));
var MacronutrientType;
(function (MacronutrientType) {
    MacronutrientType["Carbohydrate"] = "carbohydrate";
    MacronutrientType["Protein"] = "protein";
    MacronutrientType["Fat"] = "fat";
})(MacronutrientType || (exports.MacronutrientType = MacronutrientType = {}));
