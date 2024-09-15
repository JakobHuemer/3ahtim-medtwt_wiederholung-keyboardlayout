/**
 *
 * @param keyboard KEYBOARD
 * @param layout {string}
 * @param keyData KEY_COLLECTION
 */
function displayKeyboard(keyboard, layout, keyData) {

    const keyboardElement = document.querySelector('#keyboard');

    // creating the actual keys by passing language data as keyData
    const keySet = craftKeySet(keyData);

    // changing order of the keys for a specific layout
    const craftedLayout = craftLayoutWithKeys(layout, keySet);

    // the 2d array of the kb layout with the crafted keys for their own language
    let kbLayout = keyboard.withLayout(craftedLayout);

    let fontSize = parseInt(window.getComputedStyle(keyboardElement, null).fontSize);

    // pixel * scopeFontSize = em
    // pixel * scopeFontSize * KEY_SIZE = 4xem // is perfect key size ratio zu schrift

    // keyboardElement.style.width = keyboard.width * KEY_SIZE * fontSize + 'px';
    // keyboardElement.style.height = keyboard.height * KEY_SIZE * fontSize + 'px';


    let i = 0;
    for (const row of kbLayout) {
        for (const key of row) {
            const keyLocDim = keyboard.positions[i];
            keyboardElement.innerHTML += `
                <div 
                    style="
                        position: absolute;
                        top: calc(var(--key-size) * ${ keyLocDim.y }); 
                        left: calc(var(--key-size) * ${ keyLocDim.x }); 
                        width: calc(var(--key-size) * ${ keyLocDim.width }); 
                        height: calc(var(--key-size) * ${ keyLocDim.height })" 
                    class="keyslot"
                    data-keyid="${ key.id }"
                >${ key.element.innerHTML }</div>`;
            i++;
        }
    }

    // size * 4 + "em"
    keyboardElement.setAttribute('data-size-width', keyboard.width);
    keyboardElement.setAttribute('data-size-height', keyboard.height);


    resizeKeyboardAccordingToItsActualWidth();
}

function switchTheme(theme) {
    if (!theme) {
        console.error('Theme', theme, 'is not there!');
        return;
    }
    for (const [key, color] of Object.entries(theme)) {
        document.documentElement.style.setProperty(key, color);
        console.log('setting', key, 'to', color);
    }
}


function resizeKeyboardAccordingToItsActualWidth() {
    // read computed width of keyboard e.g. 60rem and set aspect ratio of keyboard
    let keyboardWidth = parseInt(window.getComputedStyle(keyboardElement, null).width);

    // width in em with current font size
    let keyboardDataWidth = parseFloat(keyboardElement.getAttribute('data-size-width'));
    let keyboardDataHeight = parseFloat(keyboardElement.getAttribute('data-size-height'));

    let newFontSize = keyboardWidth / (KEY_SIZE * keyboardDataWidth);

    keyboardElement.style.fontSize = newFontSize + "px"
    keyboardElement.style.height = newFontSize * KEY_SIZE * keyboardDataHeight + "px"


}
