let MAPPING_TABLE = {};
const DO_NOT_REMAP = 'DONOTREMAP';

function onKey(e) {

    console.log(e);
    if (e.key === DO_NOT_REMAP) {
        if (e.type === 'keydown') {
            document.querySelectorAll(`.key[data-keycode='${ event.code }']`).forEach(e => {
                e.classList.add('pressed');
            });
        } else {
            document.querySelectorAll(`.key[data-keycode='${ event.code }']`).forEach(e => {
                e.classList.remove('pressed');
            });
        }
        return;
    }

    if (Object.keys(MAPPING_TABLE).includes(e.code)) {
        e.preventDefault();
        // trigger a keypress for the whole page as if the user pressed a key but substitute the key code
        // also add recursion protection
        window.dispatchEvent(new KeyboardEvent(e.type, {
            code: MAPPING_TABLE[e.code],
            key: DO_NOT_REMAP,
            isCustom: true,

        }));

    }


}

window.addEventListener('keydown', onKey);
window.addEventListener('keyup', onKey);
document.addEventListener('visibilitychange', e => {
    if (document.visibilityState === 'hidden') {
        document.querySelectorAll(`.key`).forEach(e => {
            e.classList.remove('pressed');
        });
    }
});


function registerMappingTable() {
    console.log('REGISTERING MAPPING TABLE');
    const keySet = craftKeySet(KEY_DATA[globalProps.keyDataChoice].keys);

    let layout = globalProps.layoutChoice === 0 ? LAYOUT.Default
        : KEY_DATA[globalProps.keyDataChoice].layouts[globalProps.layoutChoice - 1];

    const craftedLayout = layout.withKeys(keySet);
    const hostLayout = LAYOUT.Default.withKeys(keySet);


    let keyboard = Object.values(KEYBOARD)[globalProps.keyboardChoice];
    let kbLayout = keyboard.withLayout(craftedLayout);
    let hostKbLayout = keyboard.withLayout(hostLayout);

    MAPPING_TABLE = {};

    for (let i = 0; i < kbLayout.length; i++) {
        let row = kbLayout[i];
        let hostRow = hostKbLayout[i];
        for (let j = 0; j < row.length; j++) {
            const virtualKey = row[j];
            const hostKey = hostRow[j];

            MAPPING_TABLE[hostKey.keyCode] = virtualKey.keyCode;

        }
    }

}