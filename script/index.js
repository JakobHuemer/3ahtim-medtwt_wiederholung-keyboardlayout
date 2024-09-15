const keyboardElement = document.querySelector('#keyboard');

const KEY_SIZE = 4;

document.documentElement.style.setProperty('--key-root-size', KEY_SIZE + 'em');


displayKeyboard(KEYBOARD.FULL_SIZED, LAYOUT.QWERTY, KEY_DATA.GERMAN_KEYS);

window.addEventListener('resize', () => {
    resizeKeyboardAccordingToItsActualWidth()
});