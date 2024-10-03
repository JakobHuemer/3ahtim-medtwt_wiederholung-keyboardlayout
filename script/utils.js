/**
 *
 * @param keyboard KEYBOARD
 * @param layout LAYOUT
 * @param keyData KEY_COLLECTION
 * @param overwriteGlobalMapping { boolean } If the keyboard is the global representation of key input
 * @param keyboardElement { HTMLDivElement } Element where the keyboard gets created on
 */

function renderCurrentKeyboard() {
    keyboardSlotElement.innerHTML = '';

    let kbElement = displayKeyboard(
        Object.values(KEYBOARD)[globalProps.keyboardChoice],
        globalProps.layoutChoice === 0 ? LAYOUT.Default : KEY_DATA[globalProps.keyDataChoice].layouts[globalProps.layoutChoice - 1],
        KEY_DATA[globalProps.keyDataChoice]
    )
    keyboardSlotElement.appendChild(kbElement)

}

function displayKeyboard(keyboard, layout, keyData, overwriteGlobalMapping = false, keyboardElement = document.createElement('div')) {
    keyboardElement.classList.add('keyboard');

    // creating the actual keys by passing language data as keyData
    // key bindings for the codes
    const keySet = craftKeySet(keyData.keys);

    // changing order of the keys for a specific layout
    // transform order of the keys
    const craftedLayout = layout.withKeys(keySet);
    const hostLayout = LAYOUT.Default.withKeys(keySet);


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


    // size * 4 + "em"
    keyboardElement.setAttribute('data-size-width', keyboard.width);
    keyboardElement.setAttribute('data-size-height', keyboard.height);


    resizeKeyboardAccordingToItsActualWidth(keyboardElement);

    applyTheme(keyboardElement);

    return keyboardElement;
}

function randomKeyboard(overwriteGlobalMapping = false, keyboardElement = document.createElement('div')) {

    let keyboardChoices = Object.values(KEYBOARD);
    console.log(keyboardChoices);
    globalProps.keyboardChoice = Math.floor(Math.random() * keyboardChoices.length);
    let keyboard = keyboardChoices[globalProps.keyboardChoice];

    globalProps.keyDataChoice = Math.floor(Math.random() * KEY_DATA.length);
    let keyData = KEY_DATA[globalProps.keyDataChoice];

    let layoutChoices = [LAYOUT.Default, ...keyData.layouts];
    globalProps.layoutChoice = Math.floor(Math.random() * layoutChoices.length);
    let layout = layoutChoices[globalProps.layoutChoice];


    return displayKeyboard(keyboard, layout, keyData, overwriteGlobalMapping, keyboardElement);

}

function renderTheme() {
    document.querySelectorAll(".keyboard").forEach(keyboardElement => {
        applyTheme(keyboardElement)
    })
}

function applyTheme(kbElement) {
    for (const [key, color] of Object.entries(globalProps.theme)) {
        kbElement.style.setProperty(key, color);
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

function changeProp(button, prop, val) {

    button.parentNode.querySelectorAll("button").forEach(e => e.classList.remove("selected"));
    button.classList.add("selected")
    globalProps[prop] = val;
    if (prop === 'layoutChoice') {
        registerMappingTable();
    }
    renderCurrentKeyboard();
}

function switchStage(stage) {
    document.querySelector('main').style.gridTemplateRows = '6fr 2fr';
    document.querySelector('main > h1').style.display = 'none';
    confElement.setAttribute('data-s', stage);
}

function populateLayoutOptions() {
    let layouts = [LAYOUT.Default, ...KEY_DATA[globalProps.keyDataChoice].layouts];

    for (let i = 0; i < layouts.length; i++) {
        let layout = layouts[i];
        if (i === globalProps.layoutChoice) {
            confLayoutElement.innerHTML += `<button class="selected" onclick="changeProp(this, 'layoutChoice', ${ i })">${ layout.name }</button>`;
        } else {
            confLayoutElement.innerHTML += `<button onclick="changeProp(this, 'layoutChoice', ${ i })">${ layout.name }</button>`;
        }
    }
}

const nav = {

    useThisLayout() {
        this.loadEditor();
    },

    buildYourOwn() {
        switchStage('keyboard');
        globalProps.layoutChoice = 0;
        registerMappingTable()
        renderCurrentKeyboard()
    },

    loadEditor() {
        switchStage('editor');

        // populate key pane with all keys
        let keys = KEY_DATA[globalProps.keyDataChoice].keys;

        for (let i = 0; i < keys.length; i++) {
            confKeyPaneElement.innerHTML += '';
        }
    },

    endScreen() {
        switchStage("end")
        document.querySelector("h1.end-text").style.display = "block"
        document.querySelector('main').style.gridTemplateRows = '3fr 4fr 2fr';
    },
};
