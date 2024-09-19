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

