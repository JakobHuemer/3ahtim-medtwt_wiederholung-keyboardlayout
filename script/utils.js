/**
 *
 * @param keyboard KEYBOARD
 * @param layout LAYOUT
 * @param keyData KEY_COLLECTION
 * @param overwriteGlobalMapping { boolean } If the keyboard is the global representation of key input
 * @param keyboardElement { HTMLDivElement } Element where the keyboard gets created on
 */
function displayKeyboard(keyboard, layout, keyData, overwriteGlobalMapping = false, keyboardElement = document.createElement('div')) {
    keyboardElement.classList.add('keyboard');

    // creating the actual keys by passing language data as keyData
    // key bindings for the codes
    console.log(keyData)
    const keySet = craftKeySet(keyData.keys);

    // changing order of the keys for a specific layout
    // transform order of the keys
    const craftedLayout = layout.withKeys(keySet);
    const hostLayout = LAYOUT.Default.withKeys(keySet);

    console.log(craftedLayout);

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
            console.log("_-------------------------")
            console.log(i, j);
            console.log(row)
            console.log(hostRow);
            console.log(virtualKey)
            if (overwriteGlobalMapping) {
                MAPPING_TABLE[hostKey.keyCode] = virtualKey.keyCode;
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

    console.log(MAPPING_TABLE);


    // size * 4 + "em"
    keyboardElement.setAttribute('data-size-width', keyboard.width);
    keyboardElement.setAttribute('data-size-height', keyboard.height);


    resizeKeyboardAccordingToItsActualWidth(keyboardElement);

    return keyboardElement;
}

function randomKeyboard(overwriteGlobalMapping = false, keyboardElement = document.createElement('div')) {

    let keyboardChoices = Object.values(KEYBOARD);
    let keyboard = keyboardChoices[Math.floor(Math.random() * keyboardChoices.length)];

    let keyData = KEY_DATA[Math.floor(Math.random() * KEY_DATA.length)];

    let layoutChoices = [LAYOUT.Default, ...keyData.layouts];
    let layout = layoutChoices[Math.floor(Math.random() * layoutChoices.length)];

    console.log(keyboard);
    console.log('-----------------------');
    console.log(keyData);
    console.log('-----------------------');
    console.log(layout);

    return displayKeyboard(keyboard, layout, keyData, overwriteGlobalMapping, keyboardElement);

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
    let keyboardHeight = parseFloat(window.getComputedStyle(keyboardElement).height);
    let keyboardDataWidth = parseFloat(keyboardElement.getAttribute('data-size-width'));
    let keyboardDataHeight = parseFloat(keyboardElement.getAttribute('data-size-height'));

    let newFontSize;

    if (keyboardWidth) {
        newFontSize = keyboardWidth / (KEY_SIZE * keyboardDataWidth);
        keyboardElement.style.height = newFontSize * KEY_SIZE * keyboardDataHeight + 'px';
    } else {
        newFontSize = keyboardHeight / (KEY_SIZE * keyboardDataHeight);
        keyboardElement.style.width = newFontSize * KEY_SIZE * keyboardDataWidth + 'px';
    }
    // width in em with current font size


    keyboardElement.style.fontSize = newFontSize + 'px';


}

