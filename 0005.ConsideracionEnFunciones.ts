// NOMBRES DE FUNCIONES, ARGUMENTOS Y PARAMETROS
// Sabemos que estamos haciendo codigo limpio cuando cada funcion hace examente lo que su nombre indica

// PARAMETROS Y ARGUMENTOS

// Limitar a 3 parametros 
// Parametros
const createUser = (username: string, email: string, password: string) => {
}

// Argumentos
createUser("David", "david@gmail.com", "1234")

// Ejemplos

function getMovieById(id: number): void {
}

function getMovieCastById(id: number): void {
}

function getActorBioById(id: number): void {
}

interface IMovie {
    title: string,
    description: string,
    rating: number,
    cast: string[]
}

function createMovie(movie: IMovie): void {

}

function createActor(fullName: string, birthDate: Date): void {

}

// Otras recomendaciones

// 1. Simplicidad es fundamental
// 2. Funciones de tamaño reducido