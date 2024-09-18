const EMPTY = ' ';

class Key {
    constructor(id, keyHint, [
        primary,
        secondary,
        extraTop,
        extraBottom
    ]) {
        this.id = id;
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
            keyTopHtml += `<span class="key-top_main-column-secondary">${this.secondary}</span>`
        }

        keyTopHtml += `<span class="key-top_main-column-primary">${this.primary}</span>
            </div>`


        if (this.extraBottom || this.extraTop) {
            keyTopHtml += `
            <div class="key-top_extra-column">
                <span class="key-top_extra-column-top">${this.extraTop ?? " "}</span>            
                <span class="key-top_extra-column-bottom">${this.extraBottom ?? " "}</span>            
            </div>
            `
        }


        // a bisserl scuffed, wird sowiso nimma touched
        this.element.innerHTML = `
            <div class="key"
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
                      ${keyTopHtml}
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


// Define the US layout
const US_KEYS = {
    // Function Keys
    F1: ['F1', null],
    F2: ['F2', null],
    F3: ['F3', null],
    F4: ['F4', null],
    F5: ['F5', null],
    F6: ['F6', null],
    F7: ['F7', null],
    F8: ['F8', null],
    F9: ['F9', null],
    F10: ['F10', null],
    F11: ['F11', null],
    F12: ['F12', null],

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
    A: ['A', null],
    B: ['B', null],
    C: ['C', null],
    D: ['D', null],
    E: ['E', null],
    F: ['F', null],
    G: ['G', null],
    H: ['H', null],
    I: ['I', null],
    J: ['J', null],
    K: ['K', null],
    L: ['L', null],
    M: ['M', null],
    N: ['N', null],
    O: ['O', null],
    P: ['P', null],
    Q: ['Q', null],
    R: ['R', null],
    S: ['S', null],
    T: ['T', null],
    U: ['U', null],
    V: ['V', null],
    W: ['W', null],
    X: ['X', null],
    Y: ['Y', null],
    Z: ['Z', null],

    // Special Keys
    ESC: ['Esc', null],
    TAB: ['Tab', null],
    CAPITAL: ['Caps Lock', null],
    LSHIFT: ['Shift', null],
    RSHIFT: ['Shift', null],
    LCONTROL: ['CTRL', null],
    RCONTROL: ['CTRL', null],
    LALT: ['ALT', null],
    RALT: ['ALT', null],
    LWIN: ['WIN', null],
    RWIN: ['WIN', null],
    MENU: ['MENU', null],
    SPACE: [' ', null],
    ENTER: ['Return', null],
    BACKSPACE: ['Delete', null],
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
    UP: ['↑', null],
    DOWN: ['↓', null],
    LEFT: ['←', null],
    RIGHT: ['→', null],

    // Navigation Cluster
    PRINTSCREEN: ['Print Screen', null],
    SCROLLLOCK: ['Scroll Lock', null],
    PAUSE: ['Pause', null],
    INSERT: ['Insert', null],
    HOME: ['Home', null],
    PAGEUP: ['Page Up', null],
    DELETE: ['Delete', null],
    END: ['End', null],
    PAGEDOWN: ['Page Down', null],

    // Numpad
    NUMLOCK: ['Num Lock', null],
    NUMPAD0: ['0', null],
    NUMPAD1: ['1', null],
    NUMPAD2: ['2', null],
    NUMPAD3: ['3', null],
    NUMPAD4: ['4', null],
    NUMPAD5: ['5', null],
    NUMPAD6: ['6', null],
    NUMPAD7: ['7', null],
    NUMPAD8: ['8', null],
    NUMPAD9: ['9', null],
    DIVIDE: ['/', null],
    MULTIPLY: ['*', null],
    SUBTRACT: ['-', null],
    ADD: ['+', null],
    DECIMAL: ['.', null],
    NUMPADENTER: ['Enter', null],

    GENERIC: ['', null], // placeholder key
};

const GERMAN_KEYS = {
    // Function Keys (unchanged)
    F1: ['F1', null],
    F2: ['F2', null],
    F3: ['F3', null],
    F4: ['F4', null],
    F5: ['F5', null],
    F6: ['F6', null],
    F7: ['F7', null],
    F8: ['F8', null],
    F9: ['F9', null],
    F10: ['F10', null],
    F11: ['F11', null],
    F12: ['F12', null],

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
    A: ['A', null],
    B: ['B', null],
    C: ['C', null],
    D: ['D', null],
    E: ['E', null],
    F: ['F', null],
    G: ['G', null],
    H: ['H', null],
    I: ['I', null],
    J: ['J', null],
    K: ['K', null],
    L: ['L', null],
    M: ['M', null],
    N: ['N', null],
    O: ['O', null],
    P: ['P', null],
    Q: ['Q', null],
    R: ['R', null],
    S: ['S', null],
    T: ['T', null],
    U: ['U', null],
    V: ['V', null],
    W: ['W', null],
    X: ['X', null],
    Y: ['Z', null], // Note: Y and Z are swapped in German layout
    Z: ['Y', null], // Note: Y and Z are swapped in German layout

    // Special Keys
    ESC: ['Esc', null],
    TAB: ['Tab', null],
    CAPITAL: ['Caps Lock', null],
    LSHIFT: ['Shift', null],
    RSHIFT: ['Shift', null],
    LCONTROL: ['Strg', null], // Changed to German abbreviation for "Steuerung"
    RCONTROL: ['Strg', null], // Changed to German abbreviation for "Steuerung"
    LALT: ['Alt', null],
    RALT: ['Alt Gr', null], // Right Alt is "Alt Gr" in German keyboards
    LWIN: ['Win', null],
    RWIN: ['Win', null],
    MENU: ['Menü', null], // Changed to German
    SPACE: [' ', null],
    ENTER: ['Enter', null], // Often labeled "Enter" in German keyboards too
    BACKSPACE: ['Rücktaste', null], // Changed to German
    TILDE: ['^', '°'], // Different characters in German layout
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
    UP: ['↑', null],
    DOWN: ['↓', null],
    LEFT: ['←', null],
    RIGHT: ['→', null],

    // Navigation Cluster
    PRINTSCREEN: ['Druck', null], // Changed to German
    SCROLLLOCK: ['Rollen', null], // Changed to German
    PAUSE: ['Pause', null], // Often the same in German
    INSERT: ['Einfg', null], // Changed to German abbreviation
    HOME: ['Pos 1', null], // Changed to German
    PAGEUP: ['Bild ↑', null], // Changed to German
    DELETE: ['Entf', null], // Changed to German abbreviation
    END: ['Ende', null], // Changed to German
    PAGEDOWN: ['Bild ↓', null], // Changed to German

    // Numpad (mostly unchanged, but added German labels where applicable)
    NUMLOCK: ['Num', null], // Often abbreviated in German keyboards
    NUMPAD0: ['0', null],
    NUMPAD1: ['1', null],
    NUMPAD2: ['2', null],
    NUMPAD3: ['3', null],
    NUMPAD4: ['4', null],
    NUMPAD5: ['5', null],
    NUMPAD6: ['6', null],
    NUMPAD7: ['7', null],
    NUMPAD8: ['8', null],
    NUMPAD9: ['9', null],
    DIVIDE: ['/', null],
    MULTIPLY: ['*', null],
    SUBTRACT: ['-', null],
    ADD: ['+', null],
    DECIMAL: [',', null], // Changed to comma for German decimal separator
    NUMPADENTER: ['Enter', null],
};

const RUSSIAN_KEYS = {
    // Function Keys (unchanged)
    F1: ['F1', null],
    F2: ['F2', null],
    F3: ['F3', null],
    F4: ['F4', null],
    F5: ['F5', null],
    F6: ['F6', null],
    F7: ['F7', null],
    F8: ['F8', null],
    F9: ['F9', null],
    F10: ['F10', null],
    F11: ['F11', null],
    F12: ['F12', null],

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

    // Alphabet Keys (ЙЦУКЕН layout)
    A: ['ф', 'Ф'],
    B: ['и', 'И'],
    C: ['с', 'С'],
    D: ['в', 'В'],
    E: ['у', 'У'],
    F: ['а', 'А'],
    G: ['п', 'П'],
    H: ['р', 'Р'],
    I: ['ш', 'Ш'],
    J: ['о', 'О'],
    K: ['л', 'Л'],
    L: ['д', 'Д'],
    M: ['ь', 'Ь'],
    N: ['т', 'Т'],
    O: ['щ', 'Щ'],
    P: ['з', 'З'],
    Q: ['й', 'Й'],
    R: ['к', 'К'],
    S: ['ы', 'Ы'],
    T: ['е', 'Е'],
    U: ['г', 'Г'],
    V: ['м', 'М'],
    W: ['ц', 'Ц'],
    X: ['ч', 'Ч'],
    Y: ['н', 'Н'],
    Z: ['я', 'Я'],

    // Special Keys
    ESC: ['Esc', null],
    TAB: ['Tab', null],
    CAPITAL: ['Caps Lock', null],
    LSHIFT: ['Shift', null],
    RSHIFT: ['Shift', null],
    LCONTROL: ['Ctrl', null],
    RCONTROL: ['Ctrl', null],
    LALT: ['Alt', null],
    RALT: ['Alt', null],
    LWIN: ['Win', null],
    RWIN: ['Win', null],
    MENU: ['Menu', null],
    SPACE: [' ', null],
    ENTER: ['Enter', null],
    BACKSPACE: ['Backspace', null],
    TILDE: ['ё', 'Ё'],
    MINUS: ['-', '_'],
    EQUALS: ['=', '+'],
    LBRACKET: ['х', 'Х'],
    RBRACKET: ['ъ', 'Ъ'],
    BACKSLASH: ['\\', '/'],
    SEMICOLON: ['ж', 'Ж'],
    APOSTROPHE: ['э', 'Э'],
    COMMA: ['б', 'Б'],
    PERIOD: ['ю', 'Ю'],
    SLASH: ['.', ','],

    // Arrow Keys (unchanged)
    UP: ['↑', null],
    DOWN: ['↓', null],
    LEFT: ['←', null],
    RIGHT: ['→', null],

    // Navigation Cluster
    PRINTSCREEN: ['Print Screen', null],
    SCROLLLOCK: ['Scroll Lock', null],
    PAUSE: ['Pause', null],
    INSERT: ['Insert', null],
    HOME: ['Home', null],
    PAGEUP: ['Page Up', null],
    DELETE: ['Delete', null],
    END: ['End', null],
    PAGEDOWN: ['Page Down', null],

    // Numpad (unchanged)
    NUMLOCK: ['Num Lock', null],
    NUMPAD0: ['0', null],
    NUMPAD1: ['1', null],
    NUMPAD2: ['2', null],
    NUMPAD3: ['3', null],
    NUMPAD4: ['4', null],
    NUMPAD5: ['5', null],
    NUMPAD6: ['6', null],
    NUMPAD7: ['7', null],
    NUMPAD8: ['8', null],
    NUMPAD9: ['9', null],
    DIVIDE: ['/', null],
    MULTIPLY: ['*', null],
    SUBTRACT: ['-', null],
    ADD: ['+', null],
    DECIMAL: [',', null],
    NUMPADENTER: ['Enter', null],

    GENERIC: ['', null] // placeholder key (unchanged)
};

// public
const KEY_DATA = {
    US_KEYS,
    GERMAN_KEYS,
    // RUSSIAN_KEYS
};

/**
 *
 * @param keyData { KEY_DATA }
 */
function craftKeySet(keyData) {

    let currentLayout = keyData;

    return {
        // Function Keys
        F1: new Key(1, 'F1', currentLayout.F1),
        F2: new Key(2, 'F2', currentLayout.F2),
        F3: new Key(3, 'F3', currentLayout.F3),
        F4: new Key(4, 'F4', currentLayout.F4),
        F5: new Key(5, 'F5', currentLayout.F5),
        F6: new Key(6, 'F6', currentLayout.F6),
        F7: new Key(7, 'F7', currentLayout.F7),
        F8: new Key(8, 'F8', currentLayout.F8),
        F9: new Key(9, 'F9', currentLayout.F9),
        F10: new Key(10, 'F10', currentLayout.F10),
        F11: new Key(11, 'F11', currentLayout.F11),
        F12: new Key(12, 'F12', currentLayout.F12),

        // Number Keys
        ONE: new Key(13, '1', currentLayout.ONE),
        TWO: new Key(14, '2', currentLayout.TWO),
        THREE: new Key(15, '3', currentLayout.THREE),
        FOUR: new Key(16, '4', currentLayout.FOUR),
        FIVE: new Key(17, '5', currentLayout.FIVE),
        SIX: new Key(18, '6', currentLayout.SIX),
        SEVEN: new Key(19, '7', currentLayout.SEVEN),
        EIGHT: new Key(20, '8', currentLayout.EIGHT),
        NINE: new Key(21, '9', currentLayout.NINE),
        ZERO: new Key(22, '0', currentLayout.ZERO),

        // Alphabet Keys
        A: new Key(23, 'A', currentLayout.A),
        B: new Key(24, 'B', currentLayout.B),
        C: new Key(25, 'C', currentLayout.C),
        D: new Key(26, 'D', currentLayout.D),
        E: new Key(27, 'E', currentLayout.E),
        F: new Key(28, 'F', currentLayout.F),
        G: new Key(29, 'G', currentLayout.G),
        H: new Key(30, 'H', currentLayout.H),
        I: new Key(31, 'I', currentLayout.I),
        J: new Key(32, 'J', currentLayout.J),
        K: new Key(33, 'K', currentLayout.K),
        L: new Key(34, 'L', currentLayout.L),
        M: new Key(35, 'M', currentLayout.M),
        N: new Key(36, 'N', currentLayout.N),
        O: new Key(37, 'O', currentLayout.O),
        P: new Key(38, 'P', currentLayout.P),
        Q: new Key(39, 'Q', currentLayout.Q),
        R: new Key(40, 'R', currentLayout.R),
        S: new Key(41, 'S', currentLayout.S),
        T: new Key(42, 'T', currentLayout.T),
        U: new Key(43, 'U', currentLayout.U),
        V: new Key(44, 'V', currentLayout.V),
        W: new Key(45, 'W', currentLayout.W),
        X: new Key(46, 'X', currentLayout.X),
        Y: new Key(47, 'Y', currentLayout.Y),
        Z: new Key(48, 'Z', currentLayout.Z),

        // Special Keys
        ESC: new Key(49, 'APE', currentLayout.ESC),
        TAB: new Key(50, 'TAB', currentLayout.TAB),
        CAPITAL: new Key(51, 'CAPSLOCK', currentLayout.CAPITAL),
        LSHIFT: new Key(52, 'LEFT', currentLayout.LSHIFT).littleFont().enableKeycode(),
        RSHIFT: new Key(53, 'RIGHT', currentLayout.RSHIFT).littleFont().enableKeycode(),
        LCONTROL: new Key(54, 'LEFT', currentLayout.LCONTROL).enableKeycode(),
        RCONTROL: new Key(55, 'RIGHT', currentLayout.RCONTROL).enableKeycode(),
        LALT: new Key(56, 'LEFT', currentLayout.LALT).enableKeycode(),
        RALT: new Key(57, 'RIGHT', currentLayout.RALT).enableKeycode(),
        LWIN: new Key(58, 'LEFT', currentLayout.LWIN).enableKeycode(),
        RWIN: new Key(59, 'RIGHT', currentLayout.RWIN).enableKeycode(),
        MENU: new Key(60, 'MENU', currentLayout.MENU),
        SPACE: new Key(61, 'SPACE', currentLayout.SPACE).enableKeycode(),
        ENTER: new Key(62, 'ENTER', currentLayout.ENTER).littleFont(),
        BACKSPACE: new Key(63, 'BACKSPACE', currentLayout.BACKSPACE).littleFont().enableKeycode(),
        TILDE: new Key(64, 'GRAVE', currentLayout.TILDE),
        MINUS: new Key(65, 'MINUS', currentLayout.MINUS),
        EQUALS: new Key(66, 'EQUALS', currentLayout.EQUALS),
        LBRACKET: new Key(67, 'LEFTBRACKET', currentLayout.LBRACKET),
        RBRACKET: new Key(68, 'RIGHTBRACKET', currentLayout.RBRACKET),
        BACKSLASH: new Key(69, 'BACKSLASH', currentLayout.BACKSLASH),
        SEMICOLON: new Key(70, 'SEMICOLON', currentLayout.SEMICOLON),
        APOSTROPHE: new Key(71, 'APOSTROPHE', currentLayout.APOSTROPHE),
        COMMA: new Key(72, 'COMMA', currentLayout.COMMA),
        PERIOD: new Key(73, 'PERIOD', currentLayout.PERIOD),
        SLASH: new Key(74, 'SLASH', currentLayout.SLASH),

        // Arrow Keys
        UP: new Key(75, 'UP', currentLayout.UP),
        DOWN: new Key(76, 'DOWN', currentLayout.DOWN),
        LEFT: new Key(77, 'LEFT', currentLayout.LEFT),
        RIGHT: new Key(78, 'RIGHT', currentLayout.RIGHT),

        // Navigation Cluster
        PRINTSCREEN: new Key(79, 'NTSCREEN', currentLayout.PRINTSCREEN).littleFont(),
        SCROLLLOCK: new Key(80, 'SCROLLLOCK', currentLayout.SCROLLLOCK).littleFont(),
        PAUSE: new Key(81, 'PAUSE', currentLayout.PAUSE).littleFont(),
        INSERT: new Key(82, 'INSERT', currentLayout.INSERT).littleFont(),
        HOME: new Key(83, 'HOME', currentLayout.HOME),
        PAGEUP: new Key(84, 'PAGEUP', currentLayout.PAGEUP),
        DELETE: new Key(85, 'DELETE', currentLayout.DELETE).littleFont().enableKeycode(),
        END: new Key(86, 'END', currentLayout.END),
        PAGEDOWN: new Key(87, 'PAGEDOWN', currentLayout.PAGEDOWN),

        // Numpad
        NUMLOCK: new Key(88, 'NUMLOCK', currentLayout.NUMLOCK),
        NUMPAD0: new Key(89, 'NUMPAD', currentLayout.NUMPAD0).enableKeycode(),
        NUMPAD1: new Key(90, 'NUMPAD', currentLayout.NUMPAD1).enableKeycode(),
        NUMPAD2: new Key(91, 'NUMPAD', currentLayout.NUMPAD2).enableKeycode(),
        NUMPAD3: new Key(92, 'NUMPAD', currentLayout.NUMPAD3).enableKeycode(),
        NUMPAD4: new Key(93, 'NUMPAD', currentLayout.NUMPAD4).enableKeycode(),
        NUMPAD5: new Key(94, 'NUMPAD', currentLayout.NUMPAD5).enableKeycode(),
        NUMPAD6: new Key(95, 'NUMPAD', currentLayout.NUMPAD6).enableKeycode(),
        NUMPAD7: new Key(96, 'NUMPAD', currentLayout.NUMPAD7).enableKeycode(),
        NUMPAD8: new Key(97, 'NUMPAD', currentLayout.NUMPAD8).enableKeycode(),
        NUMPAD9: new Key(98, 'NUMPAD', currentLayout.NUMPAD9).enableKeycode(),
        DIVIDE: new Key(99, 'DIVIDE', currentLayout.DIVIDE),
        MULTIPLY: new Key(100, 'MULTIPLY', currentLayout.MULTIPLY),
        SUBTRACT: new Key(101, 'SUBTRACT', currentLayout.SUBTRACT),
        ADD: new Key(102, 'ADD', currentLayout.ADD),
        DECIMAL: new Key(103, 'DECIMAL', currentLayout.DECIMAL),
        NUMPADENTER: new Key(104, 'NUMPAD', currentLayout.NUMPADENTER).littleFont().enableKeycode(),

        GENERIC_KEY: new Key(104, 'NUMPAD', [" "]),
    }

}