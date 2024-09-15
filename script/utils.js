const keyboardElement = document.querySelector("#keyboard")

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

    keyboardElement.style.width = keyboard.width * 4 + "em"
    keyboardElement.style.height = keyboard.height * 4 + "em"

    let i = 0;
    for (const row of kbLayout) {
        for (const key of row) {
            const keyLocDim = keyboard.positions[i];
            keyboardElement.innerHTML += `
                <div 
                    style="
                        position: absolute;
                        top: calc(var(--key-size) * ${keyLocDim.y}); 
                        left: calc(var(--key-size) * ${keyLocDim.x}); 
                        width: calc(var(--key-size) * ${keyLocDim.width}); 
                        height: calc(var(--key-size) * ${keyLocDim.height})" 
                    class="keyslot"
                    data-keyid="${ key.id }"
                >${ key.element.innerHTML }</div>`;
            i++;
        }
    }


}

function switchTheme(theme) {
    if (!theme) {
        console.error("Theme", theme, "is not there!")
        return
    }
    for (const [key, color] of Object.entries(theme)) {
        document.documentElement.style.setProperty(key, color);
        console.log("setting", key, "to", color);
    }
}

