// Function to generate random positions within a max range of 500
function getRandomPosition(max) {
    return Math.floor(Math.random() * Math.min(max, 400));
}

// Array of objects within the area
const objects = [
    { id: 'objeto-1', name: 'Chocorramo' },
    { id: 'objeto-2', name: 'Galleta' },
    { id: 'objeto-3', name: 'Teclado' },
    // ...add more objects as needed
];

// Assign random positions to each object
window.addEventListener('DOMContentLoaded', () => {
    objects.forEach(obj => {
        obj.position = {
            x: getRandomPosition(window.innerWidth),
            y: getRandomPosition(window.innerHeight)
        };
    });

    console.log(objects);
});

// Function to assign positions to objects in the DOM
function assignPositions() {
    objects.forEach(obj => {
        const element = document.getElementById(obj.id);
        if (element) {
            element.style.position = 'absolute';
            element.style.left = `${obj.position.x}px`;
            element.style.top = `${obj.position.y}px`;
        }
    });
}

// Assign positions when the DOM is fully loaded
window.addEventListener('DOMContentLoaded', assignPositions);
