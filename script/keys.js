class Key {
    constructor(id, keyHint, labelLocation, representation, secondaryRepresentation) {
        this.id = id;
        this.representation = representation;
        this.secondaryRepresentation = secondaryRepresentation;
        this.labelLocation = labelLocation;
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
                
                <div style="${ this.labelLocation !== 0 ? `justify-content: end;` : '' } ${ this.isLittleFont !== 0 ? `font-size: 80%;` : '' }"
                 class="key-top">
                    <span
                       ${ this.labelLocation === 1 ? `style="text-align: left"` :
            this.labelLocation === 2 ? `style="text-align: right"` : '' }
                            class="representation">${ this.representation }</span>
                     
                       ${ this.secondaryRepresentation ? `
                            <span class="secondary-representation">${ this.secondaryRepresentation }</span>` : '' }
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
        F1: new Key(1, 'F1', 0, ...currentLayout.F1),
        F2: new Key(2, 'F2', 0, ...currentLayout.F2),
        F3: new Key(3, 'F3', 0, ...currentLayout.F3),
        F4: new Key(4, 'F4', 0, ...currentLayout.F4),
        F5: new Key(5, 'F5', 0, ...currentLayout.F5),
        F6: new Key(6, 'F6', 0, ...currentLayout.F6),
        F7: new Key(7, 'F7', 0, ...currentLayout.F7),
        F8: new Key(8, 'F8', 0, ...currentLayout.F8),
        F9: new Key(9, 'F9', 0, ...currentLayout.F9),
        F10: new Key(10, 'F10', 0, ...currentLayout.F10),
        F11: new Key(11, 'F11', 0, ...currentLayout.F11),
        F12: new Key(12, 'F12', 0, ...currentLayout.F12),

        // Number Keys
        ONE: new Key(13, '1', 0, ...currentLayout.ONE),
        TWO: new Key(14, '2', 0, ...currentLayout.TWO),
        THREE: new Key(15, '3', 0, ...currentLayout.THREE),
        FOUR: new Key(16, '4', 0, ...currentLayout.FOUR),
        FIVE: new Key(17, '5', 0, ...currentLayout.FIVE),
        SIX: new Key(18, '6', 0, ...currentLayout.SIX),
        SEVEN: new Key(19, '7', 0, ...currentLayout.SEVEN),
        EIGHT: new Key(20, '8', 0, ...currentLayout.EIGHT),
        NINE: new Key(21, '9', 0, ...currentLayout.NINE),
        ZERO: new Key(22, '0', 0, ...currentLayout.ZERO),

        // Alphabet Keys
        A: new Key(23, 'A', 0, ...currentLayout.A),
        B: new Key(24, 'B', 0, ...currentLayout.B),
        C: new Key(25, 'C', 0, ...currentLayout.C),
        D: new Key(26, 'D', 0, ...currentLayout.D),
        E: new Key(27, 'E', 0, ...currentLayout.E),
        F: new Key(28, 'F', 0, ...currentLayout.F),
        G: new Key(29, 'G', 0, ...currentLayout.G),
        H: new Key(30, 'H', 0, ...currentLayout.H),
        I: new Key(31, 'I', 0, ...currentLayout.I),
        J: new Key(32, 'J', 0, ...currentLayout.J),
        K: new Key(33, 'K', 0, ...currentLayout.K),
        L: new Key(34, 'L', 0, ...currentLayout.L),
        M: new Key(35, 'M', 0, ...currentLayout.M),
        N: new Key(36, 'N', 0, ...currentLayout.N),
        O: new Key(37, 'O', 0, ...currentLayout.O),
        P: new Key(38, 'P', 0, ...currentLayout.P),
        Q: new Key(39, 'Q', 0, ...currentLayout.Q),
        R: new Key(40, 'R', 0, ...currentLayout.R),
        S: new Key(41, 'S', 0, ...currentLayout.S),
        T: new Key(42, 'T', 0, ...currentLayout.T),
        U: new Key(43, 'U', 0, ...currentLayout.U),
        V: new Key(44, 'V', 0, ...currentLayout.V),
        W: new Key(45, 'W', 0, ...currentLayout.W),
        X: new Key(46, 'X', 0, ...currentLayout.X),
        Y: new Key(47, 'Y', 0, ...currentLayout.Y),
        Z: new Key(48, 'Z', 0, ...currentLayout.Z),

        // Special Keys
        ESC: new Key(49, 'ESCAPE', 1, ...currentLayout.ESC),
        TAB: new Key(50, 'TAB', 1, ...currentLayout.TAB),
        CAPITAL: new Key(51, 'CAPSLOCK', 1, ...currentLayout.CAPITAL),
        LSHIFT: new Key(52, 'LEFT', 1, ...currentLayout.LSHIFT).littleFont().enableKeycode(),
        RSHIFT: new Key(53, 'RIGHT', 2, ...currentLayout.RSHIFT).littleFont().enableKeycode(),
        LCONTROL: new Key(54, 'LEFT', 1, ...currentLayout.LCONTROL).enableKeycode(),
        RCONTROL: new Key(55, 'RIGHT', 2, ...currentLayout.RCONTROL).enableKeycode(),
        LALT: new Key(56, 'LEFT', 1, ...currentLayout.LALT).enableKeycode(),
        RALT: new Key(57, 'RIGHT', 1, ...currentLayout.RALT).enableKeycode(),
        LWIN: new Key(58, 'LEFT', 1, ...currentLayout.LWIN).enableKeycode(),
        RWIN: new Key(59, 'RIGHT', 1, ...currentLayout.RWIN).enableKeycode(),
        MENU: new Key(60, 'MENU', 0, ...currentLayout.MENU),
        SPACE: new Key(61, 'SPACE', 0, ...currentLayout.SPACE).enableKeycode(),
        ENTER: new Key(62, 'ENTER', 2, ...currentLayout.ENTER).littleFont(),
        BACKSPACE: new Key(63, 'BACKSPACE', 2, ...currentLayout.BACKSPACE).littleFont().enableKeycode(),
        TILDE: new Key(64, 'GRAVE', 0, ...currentLayout.TILDE),
        MINUS: new Key(65, 'MINUS', 0, ...currentLayout.MINUS),
        EQUALS: new Key(66, 'EQUALS', 0, ...currentLayout.EQUALS),
        LBRACKET: new Key(67, 'LEFTBRACKET', 0, ...currentLayout.LBRACKET),
        RBRACKET: new Key(68, 'RIGHTBRACKET', 0, ...currentLayout.RBRACKET),
        BACKSLASH: new Key(69, 'BACKSLASH', 0, ...currentLayout.BACKSLASH),
        SEMICOLON: new Key(70, 'SEMICOLON', 0, ...currentLayout.SEMICOLON),
        APOSTROPHE: new Key(71, 'APOSTROPHE', 0, ...currentLayout.APOSTROPHE),
        COMMA: new Key(72, 'COMMA', 0, ...currentLayout.COMMA),
        PERIOD: new Key(73, 'PERIOD', 0, ...currentLayout.PERIOD),
        SLASH: new Key(74, 'SLASH', 0, ...currentLayout.SLASH),

        // Arrow Keys
        UP: new Key(75, 'UP', 0, ...currentLayout.UP),
        DOWN: new Key(76, 'DOWN', 0, ...currentLayout.DOWN),
        LEFT: new Key(77, 'LEFT', 0, ...currentLayout.LEFT),
        RIGHT: new Key(78, 'RIGHT', 0, ...currentLayout.RIGHT),

        // Navigation Cluster
        PRINTSCREEN: new Key(79, 'PRINTSCREEN', 0, ...currentLayout.PRINTSCREEN).littleFont(),
        SCROLLLOCK: new Key(80, 'SCROLLLOCK', 0, ...currentLayout.SCROLLLOCK).littleFont(),
        PAUSE: new Key(81, 'PAUSE', 0, ...currentLayout.PAUSE).littleFont(),
        INSERT: new Key(82, 'INSERT', 0, ...currentLayout.INSERT).littleFont(),
        HOME: new Key(83, 'HOME', 0, ...currentLayout.HOME),
        PAGEUP: new Key(84, 'PAGEUP', 0, ...currentLayout.PAGEUP),
        DELETE: new Key(85, 'DELETE', 0, ...currentLayout.DELETE).littleFont().enableKeycode(),
        END: new Key(86, 'END', 0, ...currentLayout.END),
        PAGEDOWN: new Key(87, 'PAGEDOWN', 0, ...currentLayout.PAGEDOWN),

        // Numpad
        NUMLOCK: new Key(88, 'NUMLOCK', 0, ...currentLayout.NUMLOCK),
        NUMPAD0: new Key(89, 'NUMPAD', 0, ...currentLayout.NUMPAD0).enableKeycode(),
        NUMPAD1: new Key(90, 'NUMPAD', 0, ...currentLayout.NUMPAD1).enableKeycode(),
        NUMPAD2: new Key(91, 'NUMPAD', 0, ...currentLayout.NUMPAD2).enableKeycode(),
        NUMPAD3: new Key(92, 'NUMPAD', 0, ...currentLayout.NUMPAD3).enableKeycode(),
        NUMPAD4: new Key(93, 'NUMPAD', 0, ...currentLayout.NUMPAD4).enableKeycode(),
        NUMPAD5: new Key(94, 'NUMPAD', 0, ...currentLayout.NUMPAD5).enableKeycode(),
        NUMPAD6: new Key(95, 'NUMPAD', 0, ...currentLayout.NUMPAD6).enableKeycode(),
        NUMPAD7: new Key(96, 'NUMPAD', 0, ...currentLayout.NUMPAD7).enableKeycode(),
        NUMPAD8: new Key(97, 'NUMPAD', 0, ...currentLayout.NUMPAD8).enableKeycode(),
        NUMPAD9: new Key(98, 'NUMPAD', 0, ...currentLayout.NUMPAD9).enableKeycode(),
        DIVIDE: new Key(99, 'DIVIDE', 0, ...currentLayout.DIVIDE),
        MULTIPLY: new Key(100, 'MULTIPLY', 0, ...currentLayout.MULTIPLY),
        SUBTRACT: new Key(101, 'SUBTRACT', 0, ...currentLayout.SUBTRACT),
        ADD: new Key(102, 'ADD', 0, ...currentLayout.ADD),
        DECIMAL: new Key(103, 'DECIMAL', 0, ...currentLayout.DECIMAL),
        NUMPADENTER: new Key(104, 'NUMPAD', 2, ...currentLayout.NUMPADENTER).littleFont().enableKeycode(),

        GENERIC_KEY: new Key(104, 'NUMPAD', 2, ''),
    }

}