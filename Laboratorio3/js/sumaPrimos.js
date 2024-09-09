export function sumaPrimos(n) {
    const esPrimo = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    let suma = 0;
    for (let i = 1; i <= n; i++) {
        if (esPrimo(i)) {
            suma += i;
        }
    }
    return suma;
}
