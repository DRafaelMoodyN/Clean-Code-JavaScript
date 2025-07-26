
function isRedFruit(fruit: string): boolean {
    const listFruit: string[] = ["manzana", "cereza", "ciruela"]
    return listFruit.includes(fruit)
}

function getFruitsByColor(color: string): string[] {
    switch (color) {
        case "red":
            return ["manzana", "fresas"]
        case "yellow":
            return ["piña", "banana"]
        case " purple":
            return ["moras", "uvas"]
        default:
            throw Error("El color no tiene ninguna concidencia")
    }
}

let isFirstStepWorking: Boolean = true;
let isSecondStepWorking: Boolean = true;
let isThirdStepWorking: Boolean = true;
let isFourthStepWorking: Boolean = true;

function workingSteps(): string {

    if (!isFirstStepWorking) return 'First step broken.'
    if (!isSecondStepWorking) return 'Second step broken.';
    if (!isThirdStepWorking) return 'Third step broken.';
    if (!isFourthStepWorking) return 'Fourth step broken.'

    return 'Working properly!';
}