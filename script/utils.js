/**
 *
 * @param keyboard KEYBOARD
 * @param layout {string}
 * @param keyData KEY_COLLECTION
 * @param keyboardElement Element where the keyboard gets created on
 */
function displayKeyboard(keyboard, layout, keyData, keyboardElement = document.createElement('div')) {
    keyboardElement.classList.add('keyboard');

    // creating the actual keys by passing language data as keyData
    const keySet = craftKeySet(keyData);

    // changing order of the keys for a specific layout
    const craftedLayout = craftLayoutWithKeys(layout, keySet);

    // the 2d array of the kb layout with the crafted keys for their own language
    let kbLayout = keyboard.withLayout(craftedLayout);


    let i = 0;
    for (const row of kbLayout) {
        for (const key of row) {
            const keyLocDim = keyboard.positions[i];
            keyboardElement.innerHTML += `
                <div 
                    style="
                        position: absolute;
                        top: calc(var(--key-size) * ${ keyLocDim.y } - var(--key-side-padding) / 2); 
                        left: calc(var(--key-size) * ${ keyLocDim.x } - var(--key-side-padding) / 2); 
                        width: calc(var(--key-size) * ${ keyLocDim.width } + var(--key-side-padding) / 2); 
                        height: calc(var(--key-size) * ${ keyLocDim.height } + var(--key-side-padding) / 2)" 
                    class="keyslot"
                    data-keyid="${ key.id }"
                >${ key.element.innerHTML }</div>`;
            i++;
        }
    }

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

