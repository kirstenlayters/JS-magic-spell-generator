const spellArea = document.getElementById('spellArea');
const generateButton = document.getElementById('generateButton');
const resetButton = document.getElementById('resetButton');
const ingredientsList = document.getElementById('ingredientsList');
const defaultText = 'Your spell will appear here.';

function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 50) + 50;
    const lightness = Math.floor(Math.random() * 40) + 40;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function getRandomIngredient() {
    const items = Array.from(ingredientsList.querySelectorAll('li'));
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex].textContent.trim();
}

function showCountdownAndSpell() {
    let count = 3;
    spellArea.textContent = count;
    const countdown = setInterval(() => {
        count -= 1;
        if (count > 0) {
            spellArea.textContent = count;
        } else {
            clearInterval(countdown);
            const ingredient = getRandomIngredient();
            spellArea.textContent = `Your magic ingredient: ${ingredient}`;
            spellArea.style.backgroundColor = getRandomColor();
        }
    }, 1000);
}

function resetSpellArea() {
    spellArea.textContent = defaultText;
    spellArea.style.backgroundColor = '';
}

generateButton.addEventListener('click', () => {
    showCountdownAndSpell();
});

resetButton.addEventListener('click', resetSpellArea);
