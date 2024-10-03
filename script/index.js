const KEY_SIZE = parseInt(window.getComputedStyle(document.body).getPropertyValue('--key-root-size'));
const KEY_SIDE_PADDING_EM = window.getComputedStyle(document.body).getPropertyValue('--key-side-padding');

const keyboardSlotElement = document.querySelector('.keyboard-placeholder');
const confElement = document.querySelector('.conf');

const confKeyboardsElement = document.querySelector('.config-keyboards .config-options');
const confLanguageElement = document.querySelector('.config-language .config-options');
const confLayoutElement = document.querySelector('.config-layout .config-options');

const confKeyPaneElement = document.querySelector(".key-pane")
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



const globalProps = {
    // index of choice arrays
    keyboardChoice: 0,
    keyDataChoice: 0,
    layoutChoice: 0,
    theme: THEMES.ADULT_SITE_THEME
};

// let kbElement = displayKeyboard(KEYBOARD.FULL_SIZED, LAYOUT.Default, KEY_DATA[0], false);
const kbElement = randomKeyboard(true);
keyboardSlotElement.appendChild(kbElement);

renderTheme();
// populate config panes with data:

let tempIndex = 0;
let keyboardArray = Object.values(KEYBOARD);
for (let i = 0; i < keyboardArray.length; i++) {
    let kb = keyboardArray[i];
    if (i === globalProps.keyboardChoice) {
        confKeyboardsElement.innerHTML += `<button class="selected" onclick="changeProp(this, 'keyboardChoice', ${ i })">${ kb.displayName }</button>`;
    } else {
        confKeyboardsElement.innerHTML += `<button onclick="changeProp(this, 'keyboardChoice', ${ i })">${ kb.displayName }</button>`;
    }
}

for (let i = 0; i < KEY_DATA.length; i++) {
    let lang = KEY_DATA[i];
    if (i === globalProps.keyDataChoice) {
        confLanguageElement.innerHTML += `<button class="selected" onclick="changeProp(this, 'keyDataChoice', ${ i })">${ lang.displayName }</button>`;
    } else {
        confLanguageElement.innerHTML += `<button onclick="changeProp(this, 'keyDataChoice', ${ i })">${ lang.displayName }</button>`;
    }
}




