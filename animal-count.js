function animalCount(miles){
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityRest10Miles = 100;
    if(miles <= 10) {
        const count = miles * animalDensityFirst10Miles;
        return count;
    }
    else if(miles <= 20){
        const firstDensAnimal = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const secondDenseAnimals = restMiles * animalDensitySecond10Miles;
        const totalAnimals = firstDensAnimal +  secondDenseAnimals;
        return totalAnimals;
    }
    else{ 
        const firstDensAnimal = 10 * animalDensityFirst10Miles;
        const secondDenseAnimals =10 * animalDensitySecond10Miles;
        const restMiles = miles - 20;
        const RestDenseAnimals = restMiles * animalDensityRest10Miles;
        const totalAnimals = firstDensAnimal +secondDenseAnimals + RestDenseAnimals;
        return totalAnimals;

    }
}

const animals= animalCount(25);
console.log(animals);


// Alhadulillah