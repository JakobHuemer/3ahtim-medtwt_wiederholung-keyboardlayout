const keyboardElement = document.querySelector("#keyboard")

function displayKeyboard(keyboard, layout) {
    const keyboardElement = document.querySelector('#keyboard');
    console.log("layout", layout)
    let kbLayout = keyboard.withLayout(layout);
    console.log("kbLayout", kbLayout)

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

    for (const [key, color] of Object.entries(theme)) {
        document.documentElement.style.setProperty(key, color)
        console.log("setting", key, "to", color)
    }
}