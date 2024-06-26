function insertionSort(arr) {
    const n = arr.length;
    
    for (let i = 1; i < n; i++) {
        let current = arr[i]; // élément à insérer dans la séquence triée
        let j = i - 1; // commence par le dernier élément de la séquence triée
        
        // Déplace les éléments de la séquence triée qui sont plus grands que l'élément courant
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // déplace l'élément vers la droite
            j--;
        }
        
        arr[j + 1] = current; // insère l'élément courant dans la bonne position
    }
    
    return arr;
}

// Exemple d'utilisation
const array = [5, 2, 4, 6, 1, 3];
console.log("Avant le tri :", array);

insertionSort(array);

console.log("Après le tri par insertion :", array);
