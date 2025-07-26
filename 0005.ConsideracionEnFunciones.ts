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
// 3. Funciones de una sola linia sin causar una complejidad
// 4. Menos de 20 de lineas de codigo
// 5. Evita el uso del else
// 6. Prioriza el us de la condicion ternaria

const getPayAmount = ({ isDead = false, isSeparted = true, isRetired = false }): number => {
    if (isDead) return 1500

    if (isSeparted) return 2500

    return isRetired ? 3000 : 400
    // 15
}
