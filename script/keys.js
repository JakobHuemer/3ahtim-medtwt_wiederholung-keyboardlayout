class Key {
    constructor(keyCode, keyHint, [
        primary,
        secondary,
        extraTop,
        extraBottom,
    ]) {
        this.keyCode = keyCode;
        this.primary = primary;
        this.secondary = secondary;
        this.extraTop = extraTop;
        this.extraBottom = extraBottom;
        this.keyHint = keyHint;

        this.showKeyHint = false;
        this.isLittleFont = false;

        this.element = document.createElement('div');

        this.render();
    }


    enableKeycode() {
        this.showKeyHint = true;
        this.render();
        return this;
    }

    render() {
        /*
        * main-column
        *   secondary
        *   primary
        * right-colum
        *   extra-top
        *   extra-bottom
        */

        let keyTopHtml = `
            <div class="key-top_main-column">
        `;

        if (this.secondary) {
            keyTopHtml += `<span class="key-top_main-column-secondary">${ this.secondary }</span>`;
        }

        keyTopHtml += `<span class="key-top_main-column-primary">${ this.primary }</span>
            </div>`;

        if (this.extraBottom || this.extraTop) {
            keyTopHtml += `
            <div class="key-top_extra-column">
                <span class="key-top_extra-column-top">${ this.extraTop ?? ' ' }</span>            
                <span class="key-top_extra-column-bottom">${ this.extraBottom ?? ' ' }</span>            
            </div>
            `;
        }


        // a bisserl scuffed, wird sowiso nimma touched
        this.element.innerHTML = `
            <div class="key"
                data-keycode="${ this.keyCode }"
                ${ this.keyElement ? `style="${ this.keyElement.getAttribute('style') }"` : '' }
                >
                
                <div class="bg">
                    <div class="bg-item bg-left-top"></div>
                    <div class="bg-item bg-right-top"></div>
                    <div class="bg-item bg-left-bottom"></div>
                    <div class="bg-item bg-right-bottom"></div>
                </div>
                
                <div 
                    style="${ this.labelLocation !== 0 ? `justify-content: end;` : '' } 
                            ${ this.isLittleFont !== 0 ? `font-size: 80%;` : '' }"
                    class="key-top">
                      ${ keyTopHtml }
                </div>
                   
                ${ this.showKeyHint ?
            `<div class="keycode" style="font-size: .9em">${ this.keyHint }</div>` : '' }
                    </div>
                        
        `.replace(/(?<=>)\s*/g, ''); // remove every whitespace between spans

        this.keyElement = this.element.querySelector('.key');

    }

    littleFont() {
        this.isLittleFont = true;
        this.render();
        return this;
    }

}

const KEYCODE = {
    // Function Keys
    F1: 'F1', F2: 'F2', F3: 'F3', F4: 'F4', F5: 'F5',
    F6: 'F6', F7: 'F7', F8: 'F8', F9: 'F9', F10: 'F10',
    F11: 'F11', F12: 'F12',

    // Number Keys
    ONE: 'Digit1', TWO: 'Digit2', THREE: 'Digit3', FOUR: 'Digit4', FIVE: 'Digit5', SIX: 'Digit6',
    SEVEN: 'Digit7', EIGHT: 'Digit8', NINE: 'Digit9', ZERO: 'Digit0',

    // Alphabet Keys
    A: 'KeyA', B: 'KeyB', C: 'KeyC', D: 'KeyD', E: 'KeyE', F: 'KeyF', G: 'KeyG', H: 'KeyH',
    I: 'KeyI', J: 'KeyJ', K: 'KeyK', L: 'KeyL', M: 'KeyM', N: 'KeyN', O: 'KeyO', P: 'KeyP',
    Q: 'KeyQ', R: 'KeyR', S: 'KeyS', T: 'KeyT', U: 'KeyU', V: 'KeyV', W: 'KeyW', X: 'KeyX',
    Y: 'KeyY', Z: 'KeyZ',

    // Special Keys
    ESC: 'Escape', TAB: 'Tab', CAPITAL: 'CapsLock', LSHIFT: 'ShiftLeft', RSHIFT: 'ShiftRight',
    LCONTROL: 'ControlLeft', RCONTROL: 'ControlRight', LALT: 'AltLeft', RALT: 'AltRight',
    LWIN: 'MetaLeft', RWIN: 'MetaRight', MENU: 'ContextMenu', SPACE: 'Space', ENTER: 'Enter',
    BACKSPACE: 'Backspace', TILDE: 'Backquote', MINUS: 'Minus', EQUALS: 'Equal',
    LBRACKET: 'BracketLeft', RBRACKET: 'BracketRight', BACKSLASH: 'Backslash',
    SEMICOLON: 'Semicolon', APOSTROPHE: 'Quote', COMMA: 'Comma', PERIOD: 'Period', SLASH: 'Slash',

    // Arrow Keys
    UP: 'ArrowUp', DOWN: 'ArrowDown', LEFT: 'ArrowLeft', RIGHT: 'ArrowRight',

    // Navigation Cluster
    PRINTSCREEN: 'PrintScreen', SCROLLLOCK: 'ScrollLock', PAUSE: 'Pause', INSERT: 'Insert',
    HOME: 'Home', PAGEUP: 'PageUp', DELETE: 'Delete', END: 'End', PAGEDOWN: 'PageDown',

    // Numpad
    NUMLOCK: 'NumLock', NUMPAD0: 'Numpad0', NUMPAD1: 'Numpad1', NUMPAD2: 'Numpad2',
    NUMPAD3: 'Numpad3', NUMPAD4: 'Numpad4', NUMPAD5: 'Numpad5', NUMPAD6: 'Numpad6',
    NUMPAD7: 'Numpad7', NUMPAD8: 'Numpad8', NUMPAD9: 'Numpad9', DIVIDE: 'NumpadDivide',
    MULTIPLY: 'NumpadMultiply', SUBTRACT: 'NumpadSubtract', ADD: 'NumpadAdd',
    DECIMAL: 'NumpadDecimal', NUMPADENTER: 'NumpadEnter',

    // Placeholder key
    GENERIC: 'Unidentified',
};

const availableKeyData = {};

// public
// select which key bindings to use.
const KEY_DATA = [
    {
        displayName: 'US',
        keys: US_KEYS,
        layouts: [
            LAYOUT.Dvorak,
            LAYOUT.Workman,
            LAYOUT.Colemak,
        ],
    },
    {
        displayName: 'German',
        keys: GERMAN_KEYS,
        layouts: [
            LAYOUT.Neo,
            LAYOUT.BEPO,
        ],
    },
    {
        displayName: 'French',
        keys: FRENCH_KEYS,
        layouts: [
            LAYOUT.FRENCH_BEPO,
            LAYOUT.Lafayette,
        ],

    },
    {
        displayName: 'Japanese',
        keys: JAPANESE_KEYS,
        layouts: [
            LAYOUT.Tron,
            LAYOUT.NICOLA,
        ],
    },
    {
        displayName: 'Russian',
        keys: RUSSIAN_KEYS,
        layouts: [
            LAYOUT.Dictor,
            LAYOUT.Zamarashkina,
        ],
    },
];

/**
 *
 * @param keyData KEY_DATA
 */
function craftKeySet(keyData) {

    let currentLayout = keyData;

    return {
        // Function Keys
        F1: new Key(KEYCODE.F1, 'F1', currentLayout.F1),
        F2: new Key(KEYCODE.F2, 'F2', currentLayout.F2),
        F3: new Key(KEYCODE.F3, 'F3', currentLayout.F3),
        F4: new Key(KEYCODE.F4, 'F4', currentLayout.F4),
        F5: new Key(KEYCODE.F5, 'F5', currentLayout.F5),
        F6: new Key(KEYCODE.F6, 'F6', currentLayout.F6),
        F7: new Key(KEYCODE.F7, 'F7', currentLayout.F7),
        F8: new Key(KEYCODE.F8, 'F8', currentLayout.F8),
        F9: new Key(KEYCODE.F9, 'F9', currentLayout.F9),
        F10: new Key(KEYCODE.F10, 'F10', currentLayout.F10),
        F11: new Key(KEYCODE.F11, 'F11', currentLayout.F11),
        F12: new Key(KEYCODE.F12, 'F12', currentLayout.F12),

        // Number Keys
        ONE: new Key(KEYCODE.ONE, '1', currentLayout.ONE),
        TWO: new Key(KEYCODE.TWO, '2', currentLayout.TWO),
        THREE: new Key(KEYCODE.THREE, '3', currentLayout.THREE),
        FOUR: new Key(KEYCODE.FOUR, '4', currentLayout.FOUR),
        FIVE: new Key(KEYCODE.FIVE, '5', currentLayout.FIVE),
        SIX: new Key(KEYCODE.SIX, '6', currentLayout.SIX),
        SEVEN: new Key(KEYCODE.SEVEN, '7', currentLayout.SEVEN),
        EIGHT: new Key(KEYCODE.EIGHT, '8', currentLayout.EIGHT),
        NINE: new Key(KEYCODE.NINE, '9', currentLayout.NINE),
        ZERO: new Key(KEYCODE.ZERO, '0', currentLayout.ZERO),

        // Alphabet Keys
        A: new Key(KEYCODE.A, 'A', currentLayout.A),
        B: new Key(KEYCODE.B, 'B', currentLayout.B),
        C: new Key(KEYCODE.C, 'C', currentLayout.C),
        D: new Key(KEYCODE.D, 'D', currentLayout.D),
        E: new Key(KEYCODE.E, 'E', currentLayout.E),
        F: new Key(KEYCODE.F, 'F', currentLayout.F),
        G: new Key(KEYCODE.G, 'G', currentLayout.G),
        H: new Key(KEYCODE.H, 'H', currentLayout.H),
        I: new Key(KEYCODE.I, 'I', currentLayout.I),
        J: new Key(KEYCODE.J, 'J', currentLayout.J),
        K: new Key(KEYCODE.K, 'K', currentLayout.K),
        L: new Key(KEYCODE.L, 'L', currentLayout.L),
        M: new Key(KEYCODE.M, 'M', currentLayout.M),
        N: new Key(KEYCODE.N, 'N', currentLayout.N),
        O: new Key(KEYCODE.O, 'O', currentLayout.O),
        P: new Key(KEYCODE.P, 'P', currentLayout.P),
        Q: new Key(KEYCODE.Q, 'Q', currentLayout.Q),
        R: new Key(KEYCODE.R, 'R', currentLayout.R),
        S: new Key(KEYCODE.S, 'S', currentLayout.S),
        T: new Key(KEYCODE.T, 'T', currentLayout.T),
        U: new Key(KEYCODE.U, 'U', currentLayout.U),
        V: new Key(KEYCODE.V, 'V', currentLayout.V),
        W: new Key(KEYCODE.W, 'W', currentLayout.W),
        X: new Key(KEYCODE.X, 'X', currentLayout.X),
        Y: new Key(KEYCODE.Y, 'Y', currentLayout.Y),
        Z: new Key(KEYCODE.Z, 'Z', currentLayout.Z),

        // Special Keys
        ESC: new Key(KEYCODE.ESC, 'APE', currentLayout.ESC),
        TAB: new Key(KEYCODE.TAB, 'TAB', currentLayout.TAB),
        CAPITAL: new Key(KEYCODE.CAPITAL, 'CAPSLOCK', currentLayout.CAPITAL),
        LSHIFT: new Key(KEYCODE.LSHIFT, 'LEFT', currentLayout.LSHIFT).littleFont().enableKeycode(),
        RSHIFT: new Key(KEYCODE.RSHIFT, 'RIGHT', currentLayout.RSHIFT).littleFont().enableKeycode(),
        LCONTROL: new Key(KEYCODE.LCONTROL, 'LEFT', currentLayout.LCONTROL).enableKeycode(),
        RCONTROL: new Key(KEYCODE.RCONTROL, 'RIGHT', currentLayout.RCONTROL).enableKeycode(),
        LALT: new Key(KEYCODE.LALT, 'LEFT', currentLayout.LALT).enableKeycode(),
        RALT: new Key(KEYCODE.RALT, 'RIGHT', currentLayout.RALT).enableKeycode(),
        LWIN: new Key(KEYCODE.LWIN, 'LEFT', currentLayout.LWIN).enableKeycode(),
        RWIN: new Key(KEYCODE.RWIN, 'RIGHT', currentLayout.RWIN).enableKeycode(),
        MENU: new Key(KEYCODE.MENU, 'MENU', currentLayout.MENU),
        SPACE: new Key(KEYCODE.SPACE, 'SPACE', currentLayout.SPACE).enableKeycode(),
        ENTER: new Key(KEYCODE.ENTER, 'ENTER', currentLayout.ENTER).littleFont(),
        BACKSPACE: new Key(KEYCODE.BACKSPACE, 'BACKSPACE', currentLayout.BACKSPACE).littleFont().enableKeycode(),
        TILDE: new Key(KEYCODE.TILDE, 'GRAVE', currentLayout.TILDE),
        MINUS: new Key(KEYCODE.MINUS, 'MINUS', currentLayout.MINUS),
        EQUALS: new Key(KEYCODE.EQUALS, 'EQUALS', currentLayout.EQUALS),
        LBRACKET: new Key(KEYCODE.LBRACKET, 'LEFTBRACKET', currentLayout.LBRACKET),
        RBRACKET: new Key(KEYCODE.RBRACKET, 'RIGHTBRACKET', currentLayout.RBRACKET),
        BACKSLASH: new Key(KEYCODE.BACKSLASH, 'BACKSLASH', currentLayout.BACKSLASH),
        SEMICOLON: new Key(KEYCODE.SEMICOLON, 'SEMICOLON', currentLayout.SEMICOLON),
        APOSTROPHE: new Key(KEYCODE.APOSTROPHE, 'APOSTROPHE', currentLayout.APOSTROPHE),
        COMMA: new Key(KEYCODE.COMMA, 'COMMA', currentLayout.COMMA),
        PERIOD: new Key(KEYCODE.PERIOD, 'PERIOD', currentLayout.PERIOD),
        SLASH: new Key(KEYCODE.SLASH, 'SLASH', currentLayout.SLASH),

        // Arrow Keys
        UP: new Key(KEYCODE.UP, 'UP', currentLayout.UP),
        DOWN: new Key(KEYCODE.DOWN, 'DOWN', currentLayout.DOWN),
        LEFT: new Key(KEYCODE.LEFT, 'LEFT', currentLayout.LEFT),
        RIGHT: new Key(KEYCODE.RIGHT, 'RIGHT', currentLayout.RIGHT),

        // Navigation Cluster
        PRINTSCREEN: new Key(KEYCODE.PRINTSCREEN, 'NTSCREEN', currentLayout.PRINTSCREEN).littleFont(),
        SCROLLLOCK: new Key(KEYCODE.SCROLLLOCK, 'SCROLLLOCK', currentLayout.SCROLLLOCK).littleFont(),
        PAUSE: new Key(KEYCODE.PAUSE, 'PAUSE', currentLayout.PAUSE).littleFont(),
        INSERT: new Key(KEYCODE.INSERT, 'INSERT', currentLayout.INSERT).littleFont(),
        HOME: new Key(KEYCODE.HOME, 'HOME', currentLayout.HOME),
        PAGEUP: new Key(KEYCODE.PAGEUP, 'PAGEUP', currentLayout.PAGEUP),
        DELETE: new Key(KEYCODE.DELETE, 'DELETE', currentLayout.DELETE).littleFont().enableKeycode(),
        END: new Key(KEYCODE.END, 'END', currentLayout.END),
        PAGEDOWN: new Key(KEYCODE.PAGEDOWN, 'PAGEDOWN', currentLayout.PAGEDOWN),

        // Numpad
        NUMLOCK: new Key(KEYCODE.NUMLOCK, 'NUMLOCK', currentLayout.NUMLOCK),
        NUMPAD0: new Key(KEYCODE.NUMPAD0, 'NUMPAD', currentLayout.NUMPAD0).enableKeycode(),
        NUMPAD1: new Key(KEYCODE.NUMPAD1, 'NUMPAD', currentLayout.NUMPAD1).enableKeycode(),
        NUMPAD2: new Key(KEYCODE.NUMPAD2, 'NUMPAD', currentLayout.NUMPAD2).enableKeycode(),
        NUMPAD3: new Key(KEYCODE.NUMPAD3, 'NUMPAD', currentLayout.NUMPAD3).enableKeycode(),
        NUMPAD4: new Key(KEYCODE.NUMPAD4, 'NUMPAD', currentLayout.NUMPAD4).enableKeycode(),
        NUMPAD5: new Key(KEYCODE.NUMPAD5, 'NUMPAD', currentLayout.NUMPAD5).enableKeycode(),
        NUMPAD6: new Key(KEYCODE.NUMPAD6, 'NUMPAD', currentLayout.NUMPAD6).enableKeycode(),
        NUMPAD7: new Key(KEYCODE.NUMPAD7, 'NUMPAD', currentLayout.NUMPAD7).enableKeycode(),
        NUMPAD8: new Key(KEYCODE.NUMPAD8, 'NUMPAD', currentLayout.NUMPAD8).enableKeycode(),
        NUMPAD9: new Key(KEYCODE.NUMPAD9, 'NUMPAD', currentLayout.NUMPAD9).enableKeycode(),
        DIVIDE: new Key(KEYCODE.DIVIDE, 'DIVIDE', currentLayout.DIVIDE),
        MULTIPLY: new Key(KEYCODE.MULTIPLY, 'MULTIPLY', currentLayout.MULTIPLY),
        SUBTRACT: new Key(KEYCODE.SUBTRACT, 'SUBTRACT', currentLayout.SUBTRACT),
        ADD: new Key(KEYCODE.ADD, 'ADD', currentLayout.ADD),
        DECIMAL: new Key(KEYCODE.DECIMAL, 'DECIMAL', currentLayout.DECIMAL),
        NUMPADENTER: new Key(KEYCODE.NUMPADENTER, 'NUMPAD', currentLayout.NUMPADENTER).littleFont().enableKeycode(),
    };

}

const GLOBAL_KEY = {
    GENERIC_KEY: new Key(KEYCODE.GENERIC_KEY, 'NUMPAD', ['']),
    GLOBE: new Key(KEYCODE.GENERIC, 'GLOBE', ['🌐', EMPTY, 'fn']),
    FINGERPRINT: (() => {
        let fingerPrintKey = new Key(KEYCODE.GENERIC, 'FINGERPRINT', [EMPTY]);

        let Kel = fingerPrintKey.element;

        const fpElement = document.createElement('div');
        fpElement.classList.add('keys-custom_fingerprint-circle');
        const keyTop = Kel.querySelector('.key-top');

        keyTop.innerHTML = '';

        keyTop.appendChild(fpElement);

        return fingerPrintKey;
    })(),
    HALF_ARROW_UP: (() => {
        let up_key = new Key(KEYCODE.UP, 'UP', ['▲']);
        up_key.element.querySelector('.key-top').style.height = '60%';

        return up_key;
    })(),

    HALF_ARROW_DOWN: (() => {
        let down_key = new Key(KEYCODE.DOWN, 'DOWN', ['▼']);
        down_key.element.querySelector('.key-top').style.height = '60%';

        return down_key;
    })(),
};