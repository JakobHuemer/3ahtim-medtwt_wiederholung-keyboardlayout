const KEY_SIZE = parseInt(window.getComputedStyle(document.body).getPropertyValue('--key-root-size'));
const KEY_SIDE_PADDING_EM = window.getComputedStyle(document.body).getPropertyValue('--key-side-padding');

// DOM management code for general that runs all times

window.addEventListener('resize', () => {
    document.querySelectorAll('.keyboard').forEach(e => {
        resizeKeyboardAccordingToItsActualWidth(e);
    });
});


// resizes all keyboards if a new one added to the DOM
(new MutationObserver((mutations, observer) => {
    for (const mutation of mutations) {
        if (mutation.type === 'childList') {
            document.querySelectorAll('.keyboard').forEach(e => {
                resizeKeyboardAccordingToItsActualWidth(e);
            });
        }
    }

})).observe(document.body, { attributes: true, childList: true, subtree: true });






const kbElement = displayKeyboard(KEYBOARD.FULL_SIZED, LAYOUT.Default, KEY_DATA.RUSSIAN_KEYS, true);
document.body.appendChild(kbElement);

switchTheme(THEMES.CATPPUCCIN_MOCHA, kbElement);

// const otherKbElement = displayKeyboard(KEYBOARD.SIXTY_PERCENT, LAYOUT.Dvorak, KEY_DATA.GERMAN_KEYS);
// otherKbElement.classList.add("something-else-keyboard")
// document.querySelector('main .some-content').appendChild(otherKbElement);


