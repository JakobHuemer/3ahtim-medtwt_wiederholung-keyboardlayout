const EMPTY = ' ';

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

        this.showKeycode = false;
        this.isLittleFont = false;

        this.element = document.createElement('div');

        this.render();
        this.keyElement.id = 'key-' + this.id;

    }


    enableKeycode() {
        this.showKeycode = true;
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

        console.log(this.extraBottom)

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
                   
                ${ this.showKeycode ?
            `<span class="keycode" style="font-size: .9em">${ this.keyHint }</span>` : '' }
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
    F1: 112, F2: 113, F3: 114, F4: 115, F5: 116,
    F6: 117, F7: 118, F8: 119, F9: 120, F10: 121,
    F11: 122, F12: 123,

    // Number Keys
    ONE: 49, TWO: 50, THREE: 51, FOUR: 52, FIVE: 53, SIX: 54,
    SEVEN: 55, EIGHT: 56, NINE: 57, ZERO: 48,

    // Alphabet Keys
    A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76,
    M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88,
    Y: 89, Z: 90,

    // Special Keys
    ESC: 27, TAB: 9, CAPITAL: 20, LSHIFT: 16, RSHIFT: 16, LCONTROL: 17, RCONTROL: 17, LALT: 18,
    RALT: 18, LWIN: 91, RWIN: 92, MENU: 93, SPACE: 32, ENTER: 13, BACKSPACE: 8, TILDE: 192,
    MINUS: 189, EQUALS: 187, LBRACKET: 219, RBRACKET: 221, BACKSLASH: 220, SEMICOLON: 186,
    APOSTROPHE: 222, COMMA: 188, PERIOD: 190, SLASH: 191,

    // Arrow Keys
    UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39,

    // Navigation Cluster
    PRINTSCREEN: 44, SCROLLLOCK: 145, PAUSE: 19, INSERT: 45, HOME: 36, PAGEUP: 33,
    DELETE: 46, END: 35, PAGEDOWN: 34,

    // Numpad
    NUMLOCK: 144, NUMPAD0: 96, NUMPAD1: 97, NUMPAD2: 98, NUMPAD3: 99, NUMPAD4: 100,
    NUMPAD5: 101, NUMPAD6: 102, NUMPAD7: 103, NUMPAD8: 104, NUMPAD9: 105, DIVIDE: 111,
    MULTIPLY: 106, SUBTRACT: 109, ADD: 107, DECIMAL: 110, NUMPADENTER: 13,

    // Placeholder key
    GENERIC: -1,
};


// Define the US layout
const US_KEYS = {
    // Function Keys
    F1: ['F1'],
    F2: ['F2'],
    F3: ['F3'],
    F4: ['F4'],
    F5: ['F5'],
    F6: ['F6'],
    F7: ['F7'],
    F8: ['F8'],
    F9: ['F9'],
    F10: ['F10'],
    F11: ['F11'],
    F12: ['F12'],

    // Number Keys
    ONE: ['1', '!'],
    TWO: ['2', '@'],
    THREE: ['3', '#'],
    FOUR: ['4', '$'],
    FIVE: ['5', '%'],
    SIX: ['6', '^'],
    SEVEN: ['7', '&'],
    EIGHT: ['8', '*'],
    NINE: ['9', '('],
    ZERO: ['0', ')'],

    // Alphabet Keys
    A: ['A'],
    B: ['B'],
    C: ['C'],
    D: ['D'],
    E: ['E'],
    F: ['F'],
    G: ['G'],
    H: ['H'],
    I: ['I'],
    J: ['J'],
    K: ['K'],
    L: ['L'],
    M: ['M'],
    N: ['N'],
    O: ['O'],
    P: ['P'],
    Q: ['Q'],
    R: ['R'],
    S: ['S'],
    T: ['T'],
    U: ['U'],
    V: ['V'],
    W: ['W'],
    X: ['X'],
    Y: ['Y'],
    Z: ['Z'],

    // Special Keys
    ESC: ['Esc', EMPTY, EMPTY],
    TAB: ['Tab', EMPTY, EMPTY],
    CAPITAL: ['Caps Lock', EMPTY, EMPTY],
    LSHIFT: ['Shift', EMPTY, EMPTY],
    RSHIFT: [EMPTY, EMPTY, EMPTY, 'Shift'],
    LCONTROL: ['CTRL', EMPTY, EMPTY],
    RCONTROL: [EMPTY, EMPTY, EMPTY, 'CTRL'],
    LALT: ['ALT', EMPTY, EMPTY],
    RALT: [EMPTY, EMPTY, EMPTY, 'ALT'],
    LWIN: ['WIN', EMPTY, EMPTY],
    RWIN: [EMPTY, EMPTY, EMPTY, 'WIN'],
    MENU: [EMPTY, EMPTY, EMPTY, 'MENU'],
    SPACE: [' '],
    ENTER: [EMPTY, EMPTY, EMPTY, 'Return'],
    BACKSPACE: [EMPTY, EMPTY, EMPTY, 'Delete'],
    TILDE: ['`', '~'],
    MINUS: ['-', '_'],
    EQUALS: ['=', '+'],
    LBRACKET: ['[', '{'],
    RBRACKET: [']', '}'],
    BACKSLASH: ['\\', '|'],
    SEMICOLON: [';', ':'],
    APOSTROPHE: ['\'', '"'],
    COMMA: [',', '<'],
    PERIOD: ['.', '>'],
    SLASH: ['/', '?'],

    // Arrow Keys
    UP: ['↑'],
    DOWN: ['↓'],
    LEFT: ['←'],
    RIGHT: ['→'],

    // Navigation Cluster
    PRINTSCREEN: ['Print Screen'],
    SCROLLLOCK: ['Scroll Lock'],
    PAUSE: ['Pause'],
    INSERT: ['Insert'],
    HOME: ['Home'],
    PAGEUP: ['Page Up'],
    DELETE: ['Delete'],
    END: ['End'],
    PAGEDOWN: ['Page Down'],

    // Numpad
    NUMLOCK: ['Num Lock'],
    NUMPAD0: ['0'],
    NUMPAD1: ['1'],
    NUMPAD2: ['2'],
    NUMPAD3: ['3'],
    NUMPAD4: ['4'],
    NUMPAD5: ['5'],
    NUMPAD6: ['6'],
    NUMPAD7: ['7'],
    NUMPAD8: ['8'],
    NUMPAD9: ['9'],
    DIVIDE: ['/'],
    MULTIPLY: ['*'],
    SUBTRACT: ['-'],
    ADD: ['+'],
    DECIMAL: ['.'],
    NUMPADENTER: ['Enter'],

    GENERIC: [''], // placeholder key
};

const GERMAN_KEYS = {
    // Function Keys (unchanged)
    F1: ['F1'],
    F2: ['F2'],
    F3: ['F3'],
    F4: ['F4'],
    F5: ['F5'],
    F6: ['F6'],
    F7: ['F7'],
    F8: ['F8'],
    F9: ['F9'],
    F10: ['F10'],
    F11: ['F11'],
    F12: ['F12'],

    // Number Keys
    ONE: ['1', '!'],
    TWO: ['2', '"'],
    THREE: ['3', '§'],
    FOUR: ['4', '$'],
    FIVE: ['5', '%'],
    SIX: ['6', '&'],
    SEVEN: ['7', '/'],
    EIGHT: ['8', '('],
    NINE: ['9', ')'],
    ZERO: ['0', '='],

    // Alphabet Keys (unchanged)
    A: ['A'],
    B: ['B'],
    C: ['C'],
    D: ['D'],
    E: ['E'],
    F: ['F'],
    G: ['G'],
    H: ['H'],
    I: ['I'],
    J: ['J'],
    K: ['K'],
    L: ['L'],
    M: ['M'],
    N: ['N'],
    O: ['O'],
    P: ['P'],
    Q: ['Q'],
    R: ['R'],
    S: ['S'],
    T: ['T'],
    U: ['U'],
    V: ['V'],
    W: ['W'],
    X: ['X'],
    Y: ['Z'], // Note: Y and Z are swapped in German layout
    Z: ['Y'], // Note: Y and Z are swapped in German layout

    // Special Keys
    ESC: ['Esc', EMPTY, EMPTY],
    TAB: ['Tab', EMPTY, EMPTY],
    CAPITAL: ['Caps Lock', EMPTY, EMPTY],
    LSHIFT: ['Shift', EMPTY, EMPTY],
    RSHIFT: [EMPTY, EMPTY, EMPTY, 'Shift'],
    LCONTROL: ['CTRL', EMPTY, EMPTY],
    RCONTROL: [EMPTY, EMPTY, EMPTY, 'CTRL'],
    LALT: ['ALT', EMPTY, EMPTY],
    RALT: [EMPTY, EMPTY, EMPTY, 'ALT'],
    LWIN: ['WIN', EMPTY, EMPTY],
    RWIN: [EMPTY, EMPTY, EMPTY, 'WIN'],
    MENU: [EMPTY, EMPTY, EMPTY, 'MENU'],
    SPACE: [' '],
    ENTER: [EMPTY, EMPTY, EMPTY, 'Return'],
    BACKSPACE: [EMPTY, EMPTY, EMPTY, 'Delete'],
    TILDE: ['^', '°'],
    MINUS: ['ß', '?'],
    EQUALS: ['´', '`'],
    LBRACKET: ['ü', 'Ü'],
    RBRACKET: ['+', '*'],
    BACKSLASH: ['#', '\''],
    SEMICOLON: ['ö', 'Ö'],
    APOSTROPHE: ['ä', 'Ä'],
    COMMA: [',', ';'],
    PERIOD: ['.', ':'],
    SLASH: ['-', '_'],

    // Arrow Keys (unchanged)
    UP: ['↑'],
    DOWN: ['↓'],
    LEFT: ['←'],
    RIGHT: ['→'],

    // Navigation Cluster
    PRINTSCREEN: ['Druck'], // Changed to German
    SCROLLLOCK: ['Rollen'], // Changed to German
    PAUSE: ['Pause'], // Often the same in German
    INSERT: ['Einfg'], // Changed to German abbreviation
    HOME: ['Pos 1'], // Changed to German
    PAGEUP: ['Bild ↑'], // Changed to German
    DELETE: ['Entf'], // Changed to German abbreviation
    END: ['Ende'], // Changed to German
    PAGEDOWN: ['Bild ↓'], // Changed to German

    // Numpad (mostly unchanged, but added German labels where applicable)
    NUMLOCK: ['Num'], // Often abbreviated in German keyboards
    NUMPAD0: ['0'],
    NUMPAD1: ['1'],
    NUMPAD2: ['2'],
    NUMPAD3: ['3'],
    NUMPAD4: ['4'],
    NUMPAD5: ['5'],
    NUMPAD6: ['6'],
    NUMPAD7: ['7'],
    NUMPAD8: ['8'],
    NUMPAD9: ['9'],
    DIVIDE: ['/'],
    MULTIPLY: ['*'],
    SUBTRACT: ['-'],
    ADD: ['+'],
    DECIMAL: [','], // Changed to comma for German decimal separator
    NUMPADENTER: ['Enter'],
};

const RUSSIAN_KEYS = {
    // Function Keys (same as US layout)
    F1: ['F1'],
    F2: ['F2'],
    F3: ['F3'],
    F4: ['F4'],
    F5: ['F5'],
    F6: ['F6'],
    F7: ['F7'],
    F8: ['F8'],
    F9: ['F9'],
    F10: ['F10'],
    F11: ['F11'],
    F12: ['F12'],

    // Number Keys
    ONE: ['1', '!'],
    TWO: ['2', '"'],
    THREE: ['3', '№'],
    FOUR: ['4', ';'],
    FIVE: ['5', '%'],
    SIX: ['6', ':'],
    SEVEN: ['7', '?'],
    EIGHT: ['8', '*'],
    NINE: ['9', '('],
    ZERO: ['0', ')'],

    // Top Row
    TILDE: ['ё', 'Ё'],
    MINUS: ['-', '_'],
    EQUALS: ['=', '+'],

    // Alphabet Keys (QWERTY order for reference)
    Q: ['й', 'Й'],
    W: ['ц', 'Ц'],
    E: ['у', 'У'],
    R: ['к', 'К'],
    T: ['е', 'Е'],
    Y: ['н', 'Н'],
    U: ['г', 'Г'],
    I: ['ш', 'Ш'],
    O: ['щ', 'Щ'],
    P: ['з', 'З'],
    LBRACKET: ['х', 'Х'],
    RBRACKET: ['ъ', 'Ъ'],

    A: ['ф', 'Ф'],
    S: ['ы', 'Ы'],
    D: ['в', 'В'],
    F: ['а', 'А'],
    G: ['п', 'П'],
    H: ['р', 'Р'],
    J: ['о', 'О'],
    K: ['л', 'Л'],
    L: ['д', 'Д'],
    SEMICOLON: ['ж', 'Ж'],
    APOSTROPHE: ['э', 'Э'],
    BACKSLASH: ['\\', '/'],

    Z: ['я', 'Я'],
    X: ['ч', 'Ч'],
    C: ['с', 'С'],
    V: ['м', 'М'],
    B: ['и', 'И'],
    N: ['т', 'Т'],
    M: ['ь', 'Ь'],
    COMMA: ['б', 'Б'],
    PERIOD: ['ю', 'Ю'],
    SLASH: ['.', ','],

    // Special Keys (same as US layout)
    ESC: ['Esc', EMPTY, EMPTY],
    TAB: ['Tab', EMPTY, EMPTY],
    CAPITAL: ['Caps Lock', EMPTY, EMPTY],
    LSHIFT: ['Shift', EMPTY, EMPTY],
    RSHIFT: [EMPTY, EMPTY, EMPTY, 'Shift'],
    LCONTROL: ['CTRL', EMPTY, EMPTY],
    RCONTROL: [EMPTY, EMPTY, EMPTY, 'CTRL'],
    LALT: ['ALT', EMPTY, EMPTY],
    RALT: [EMPTY, EMPTY, EMPTY, 'ALT'],
    LWIN: ['WIN', EMPTY, EMPTY],
    RWIN: [EMPTY, EMPTY, EMPTY, 'WIN'],
    MENU: [EMPTY, EMPTY, EMPTY, 'MENU'],
    SPACE: [' '],
    ENTER: [EMPTY, EMPTY, EMPTY, 'Return'],
    BACKSPACE: [EMPTY, EMPTY, EMPTY, 'Delete'],

    // Arrow Keys
    UP: ['↑'],
    DOWN: ['↓'],
    LEFT: ['←'],
    RIGHT: ['→'],

    // Navigation Cluster
    PRINTSCREEN: ['Print Screen'],
    SCROLLLOCK: ['Scroll Lock'],
    PAUSE: ['Pause'],
    INSERT: ['Insert'],
    HOME: ['Home'],
    PAGEUP: ['Page Up'],
    DELETE: ['Delete'],
    END: ['End'],
    PAGEDOWN: ['Page Down'],

    // Numpad (same as US layout)
    NUMLOCK: ['Num Lock'],
    NUMPAD0: ['0'],
    NUMPAD1: ['1'],
    NUMPAD2: ['2'],
    NUMPAD3: ['3'],
    NUMPAD4: ['4'],
    NUMPAD5: ['5'],
    NUMPAD6: ['6'],
    NUMPAD7: ['7'],
    NUMPAD8: ['8'],
    NUMPAD9: ['9'],
    DIVIDE: ['/'],
    MULTIPLY: ['*'],
    SUBTRACT: ['-'],
    ADD: ['+'],
    DECIMAL: ['.'],
    NUMPADENTER: ['Enter'],

    GENERIC: [''], // placeholder key
};
// Define the French layout

const FRENCH_KEYS = {
    // Function Keys (same as US layout)
    F1: ['F1'],
    F2: ['F2'],
    F3: ['F3'],
    F4: ['F4'],
    F5: ['F5'],
    F6: ['F6'],
    F7: ['F7'],
    F8: ['F8'],
    F9: ['F9'],
    F10: ['F10'],
    F11: ['F11'],
    F12: ['F12'],

    // Number Keys
    ONE: ['&', '1'],
    TWO: ['é', '2', '~'],
    THREE: ['"', '3', '#'],
    FOUR: ['\'', '4', '{'],
    FIVE: ['(', '5', '['],
    SIX: ['-', '6', '|'],
    SEVEN: ['è', '7', '`'],
    EIGHT: ['_', '8', '\\'],
    NINE: ['ç', '9', '^'],
    ZERO: ['à', '0', '@'],

    // Top Row
    TILDE: ['²', EMPTY],
    MINUS: [')', '°'],
    EQUALS: ['=', '+'],

    // Alphabet Keys (AZERTY order)
    A: ['q', 'Q'],
    Z: ['w', 'W'],
    E: ['e', 'E', '€'],
    R: ['r', 'R'],
    T: ['t', 'T'],
    Y: ['y', 'Y'],
    U: ['u', 'U'],
    I: ['i', 'I'],
    O: ['o', 'O'],
    P: ['p', 'P'],
    LBRACKET: ['^', '¨'],
    RBRACKET: ['$', '£', '¤'],

    Q: ['a', 'A'],
    S: ['s', 'S'],
    D: ['d', 'D'],
    F: ['f', 'F'],
    G: ['g', 'G'],
    H: ['h', 'H'],
    J: ['j', 'J'],
    K: ['k', 'K'],
    L: ['l', 'L'],
    SEMICOLON: ['m', 'M'],
    APOSTROPHE: ['ù', '%'],
    BACKSLASH: ['*', 'µ'],

    W: ['z', 'Z'],
    X: ['x', 'X'],
    C: ['c', 'C'],
    V: ['v', 'V'],
    B: ['b', 'B'],
    N: ['n', 'N'],
    M: [',', '?'],
    COMMA: [';', '.'],
    PERIOD: [':', '/'],
    SLASH: ['!', '§'],

    // Special Keys
    ESC: ['Échap', EMPTY, EMPTY],
    TAB: ['Tab', EMPTY, EMPTY],
    CAPITAL: ['Verr Maj', EMPTY, EMPTY],
    LSHIFT: ['Maj ⇧', EMPTY, EMPTY],
    RSHIFT: [EMPTY, EMPTY, EMPTY, 'Maj ⇧'],
    LCONTROL: ['Ctrl', EMPTY, EMPTY],
    RCONTROL: [EMPTY, EMPTY, EMPTY, 'Ctrl'],
    LALT: ['Alt', EMPTY, EMPTY],
    RALT: [EMPTY, EMPTY, EMPTY, 'Alt Gr'],
    LWIN: ['Win', EMPTY, EMPTY],
    RWIN: [EMPTY, EMPTY, EMPTY, 'Win'],
    MENU: [EMPTY, EMPTY, EMPTY, 'Menu'],
    SPACE: [' '],
    ENTER: [EMPTY, EMPTY, EMPTY, 'Entrée'],
    BACKSPACE: [EMPTY, EMPTY, EMPTY, 'Retour'],

    // Arrow Keys
    UP: ['↑'],
    DOWN: ['↓'],
    LEFT: ['←'],
    RIGHT: ['→'],

    // Navigation Cluster
    PRINTSCREEN: ['Impr écran'],
    SCROLLLOCK: ['Arrêt défil'],
    PAUSE: ['Pause'],
    INSERT: ['Inser'],
    HOME: ['Début'],
    PAGEUP: ['Page ↑'],
    DELETE: ['Suppr'],
    END: ['Fin'],
    PAGEDOWN: ['Page ↓'],

    // Numpad
    NUMLOCK: ['Verr num'],
    NUMPAD0: ['0'],
    NUMPAD1: ['1'],
    NUMPAD2: ['2'],
    NUMPAD3: ['3'],
    NUMPAD4: ['4'],
    NUMPAD5: ['5'],
    NUMPAD6: ['6'],
    NUMPAD7: ['7'],
    NUMPAD8: ['8'],
    NUMPAD9: ['9'],
    DIVIDE: ['/'],
    MULTIPLY: ['*'],
    SUBTRACT: ['-'],
    ADD: ['+'],
    DECIMAL: [','],
    NUMPADENTER: ['Entrée'],

    GENERIC: [''], // placeholder key
};

// public
const KEY_DATA = {
    US_KEYS,
    GERMAN_KEYS,
    RUSSIAN_KEYS,
    FRENCH_KEYS
};

/**
 *
 * @param keyData { KEY_DATA }
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

        GENERIC_KEY: new Key(KEYCODE.GENERIC_KEY, 'NUMPAD', ['']),
    };

}