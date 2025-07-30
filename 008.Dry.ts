type Size = '' | 'S' | 'M' | 'XL'

class Product {
    constructor(
        public name: string = " ",
        public price: number = 0,
        public size: Size = ''
    ) {
    }

    isProductReady(): Boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`)
                    break;

                case 'number':
                    if ((<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`)
                    break;
                default:
                    throw Error(`${typeof this[key]} is not valid`)
            }
        }
        return true;
    }

    toString() {
        if (!this.isProductReady()) return;

        return `Nombre ${this.name}`
    }
}

(() => {
    const naranja = new Product("Narajan")
    console.log(naranja.toString())
})()