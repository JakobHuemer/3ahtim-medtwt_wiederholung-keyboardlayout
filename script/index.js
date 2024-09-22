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





// select a keyboard to give a form
// select a language (keyset) for the binding of the keys -> keys.js (KEY_DATA)
// select an order in which the keys are used in this language -> layouts.json (LAYOUT)
const kbElement = displayKeyboard(KEYBOARD.MACBOOK, KEY_DATA[1].layouts[0], KEY_DATA[1].keys, true);
document.body.appendChild(kbElement);

switchTheme(THEMES.CATPPUCCIN_MOCHA, kbElement);


