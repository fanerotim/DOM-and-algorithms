function shuffleArray(array) {
    for (let i = 0; i < array.length; i++) {
        const j = Math.floor(Math.random() * (array.length));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
}

shuffleArray(['A', 'B', 'C', 'D', 'E'])