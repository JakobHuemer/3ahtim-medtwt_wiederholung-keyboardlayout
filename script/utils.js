/**
 *
 * @param keyboard KEYBOARD
 * @param layout { string }
 * @param keyData KEY_COLLECTION
 * @param overwriteGlobalMapping { boolean } If the keyboard is the global representation of key input
 * @param keyboardElement { HTMLDivElement } Element where the keyboard gets created on
 */
function displayKeyboard(keyboard, layout, keyData, overwriteGlobalMapping = false, keyboardElement = document.createElement('div')) {
    keyboardElement.classList.add('keyboard');

    // creating the actual keys by passing language data as keyData
    // key bindings for the codes
    const keySet = craftKeySet(keyData);

    // changing order of the keys for a specific layout
    // transform order of the keys
    const craftedLayout = craftLayoutWithKeys(layout, keySet);
    const hostLayout = craftLayoutWithKeys(LAYOUT.Default, keySet);

    // the 2d array of the kb layout with the crafted keys for their own language
    // put the keys on a 2d layout
    let kbLayout = keyboard.withLayout(craftedLayout);
    let hostKbLayout = keyboard.withLayout(hostLayout);
    // also generate keyboard with default layout

    let keyCounter = 0;

    if (overwriteGlobalMapping) {
        MAPPING_TABLE = {};
    }

    for (let i = 0; i < kbLayout.length; i++) {
        let row = kbLayout[i];
        let hostRow = hostKbLayout[i];
        for (let j = 0; j < row.length; j++) {
            const keyLocDim = keyboard.positions[keyCounter];
            const virtualKey = row[j];
            const hostKey = hostRow[j];
            if (overwriteGlobalMapping) {
                MAPPING_TABLE[hostKey.keyCode] = virtualKey.keyCode
            }
            keyboardElement.innerHTML += `
                <div
                    style="
                        position: absolute;
                        top: calc(var(--key-size) * ${ keyLocDim.y } - var(--key-side-padding) / 4); 
                        left: calc(var(--key-size) * ${ keyLocDim.x } - var(--key-side-padding) / 4); 
                        width: calc(var(--key-size) * ${ keyLocDim.width } + var(--key-side-padding) / 2); 
                        height: calc(var(--key-size) * ${ keyLocDim.height } + var(--key-side-padding) / 2)" 
                    class="keyslot"
                    data-keycode="${ hostKey.keyCode }"
                >${ virtualKey.element.innerHTML }</div>`;
            keyCounter++;
        }
    }

    console.log(MAPPING_TABLE)


    // size * 4 + "em"
    keyboardElement.setAttribute('data-size-width', keyboard.width);
    keyboardElement.setAttribute('data-size-height', keyboard.height);


    resizeKeyboardAccordingToItsActualWidth(keyboardElement);

    return keyboardElement;
}

function switchTheme(theme, keyboardElement) {
    if (!theme) {
        console.error('Theme', theme, 'is not there!');
        return;
    }
    for (const [key, color] of Object.entries(theme)) {
        keyboardElement.style.setProperty(key, color);
        console.log('setting', key, 'to', color);
    }
}


function resizeKeyboardAccordingToItsActualWidth(keyboardElement) {


    let keyboardWidth = parseFloat(window.getComputedStyle(keyboardElement).width);

    // width in em with current font size
    let keyboardDataWidth = parseFloat(keyboardElement.getAttribute('data-size-width'));
    let keyboardDataHeight = parseFloat(keyboardElement.getAttribute('data-size-height'));

    console.log(keyboardWidth, keyboardDataWidth, keyboardDataHeight);
    let newFontSize = keyboardWidth / (KEY_SIZE * keyboardDataWidth);

    keyboardElement.style.fontSize = newFontSize + 'px';
    keyboardElement.style.height = newFontSize * KEY_SIZE * keyboardDataHeight + 'px';

    console.log(newFontSize);

}

