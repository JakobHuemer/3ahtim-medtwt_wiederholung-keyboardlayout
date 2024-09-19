const EMPTY = ' ';

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
    UP: ['▲'],
    DOWN: ['▼'],
    LEFT: ['◄'],
    RIGHT: ['►'],

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
    UP: ['▲'],
    DOWN: ['▼'],
    LEFT: ['◄'],
    RIGHT: ['►'],

    // Navigation Cluster
    PRINTSCREEN: ['Druck'], // Changed to German
    SCROLLLOCK: ['Rollen'], // Changed to German
    PAUSE: ['Pause'], // Often the same in German
    INSERT: ['Einfg'], // Changed to German abbreviation
    HOME: ['Pos 1'], // Changed to German
    PAGEUP: ['Bild ▲'], // Changed to German
    DELETE: ['Entf'], // Changed to German abbreviation
    END: ['Ende'], // Changed to German
    PAGEDOWN: ['Bild ▼'], // Changed to German

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
    A: ['Q'],
    Z: ['W'],
    E: ['E'],
    R: ['R'],
    T: ['T'],
    Y: ['Y'],
    U: ['U'],
    I: ['I'],
    O: ['O'],
    P: ['P'],
    LBRACKET: ['^', '¨'],
    RBRACKET: ['$', '£', '¤'],

    Q: ['A'],
    S: ['S'],
    D: ['D'],
    F: ['F'],
    G: ['G'],
    H: ['H'],
    J: ['J'],
    K: ['K'],
    L: ['L'],
    SEMICOLON: ['M'],
    APOSTROPHE: ['ù', '%'],
    BACKSLASH: ['*', 'µ'],

    W: ['Z'],
    X: ['X'],
    C: ['C'],
    V: ['V'],
    B: ['B'],
    N: ['N'],
    M: ['?'],
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
    UP: ['▲'],
    DOWN: ['▼'],
    LEFT: ['◄'],
    RIGHT: ['►'],

    // Navigation Cluster
    PRINTSCREEN: ['Impr écran'],
    SCROLLLOCK: ['Arrêt défil'],
    PAUSE: ['Pause'],
    INSERT: ['Inser'],
    HOME: ['Début'],
    PAGEUP: ['Page ▲'],
    DELETE: ['Suppr'],
    END: ['Fin'],
    PAGEDOWN: ['Page ▼'],

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

const JAPANESE_KEYS = {
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
    ONE: ['1', '!', 'ぬ', 'ヌ'],
    TWO: ['2', '"', 'ふ', 'フ'],
    THREE: ['3', '#', 'あ', 'ア'],
    FOUR: ['4', '$', 'う', 'ウ'],
    FIVE: ['5', '%', 'え', 'エ'],
    SIX: ['6', '&', 'お', 'オ'],
    SEVEN: ['7', '\'', 'や', 'ヤ'],
    EIGHT: ['8', '(', 'ゆ', 'ユ'],
    NINE: ['9', ')', 'よ', 'ヨ'],
    ZERO: ['0', '', 'わ', 'ヲ'],

    // Alphabet Keys (showing only kana equivalents)
    A: ['ち', 'チ'],
    B: ['こ', 'コ'],
    C: ['そ', 'ソ'],
    D: ['し', 'シ'],
    E: ['い', 'イ'],
    F: ['は', 'ハ'],
    G: ['き', 'キ'],
    H: ['く', 'ク'],
    I: ['に', 'ニ'],
    J: ['ま', 'マ'],
    K: ['の', 'ノ'],
    L: ['り', 'リ'],
    M: ['も', 'モ'],
    N: ['み', 'ミ'],
    O: ['ら', 'ラ'],
    P: ['せ', 'セ'],
    Q: ['た', 'タ'],
    R: ['す', 'ス'],
    S: ['と', 'ト'],
    T: ['か', 'カ'],
    U: ['な', 'ナ'],
    V: ['ひ', 'ヒ'],
    W: ['て', 'テ'],
    X: ['さ', 'サ'],
    Y: ['ん', 'ン'],
    Z: ['つ', 'ツ'],

    // Special Keys
    ESC: ['Esc', EMPTY, EMPTY],
    TAB: ['Tab', EMPTY, EMPTY],
    CAPITAL: ['英数', EMPTY, EMPTY],
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
    ENTER: [EMPTY, EMPTY, EMPTY, '変換'],
    BACKSPACE: [EMPTY, EMPTY, EMPTY, '削除'],
    TILDE: ['`', '~', 'ろ', 'ロ'],
    MINUS: ['-', '=', 'ほ', 'ホ'],
    EQUALS: ['^', '~', 'へ', 'ヘ'],
    LBRACKET: ['@', '`', '゛', '゜'],
    RBRACKET: ['[', '{', 'む', 'ム'],
    BACKSLASH: [']', '}', 'ー', '─'],
    SEMICOLON: [';', '+', 'れ', 'レ'],
    APOSTROPHE: [':', '*', 'け', 'ケ'],
    COMMA: [',', '<', 'ね', 'ネ'],
    PERIOD: ['.', '>', 'る', 'ル'],
    SLASH: ['/', '?', 'め', 'メ'],

    // Arrow Keys
    UP: ['▲'],
    DOWN: ['▼'],
    LEFT: ['◄'],
    RIGHT: ['►'],

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

const UK_KEYS = {
    // Function Keys (unchanged from US layout)
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
    THREE: ['3', '£'],
    FOUR: ['4', '$'],
    FIVE: ['5', '%'],
    SIX: ['6', '^'],
    SEVEN: ['7', '&'],
    EIGHT: ['8', '*'],
    NINE: ['9', '('],
    ZERO: ['0', ')'],

    // Alphabet Keys (unchanged from US layout)
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
    ESC: ['Esc'],
    TAB: ['Tab'],
    CAPITAL: ['Caps Lock'],
    LSHIFT: ['Shift'],
    RSHIFT: ['Shift'],
    LCONTROL: ['Ctrl'],
    RCONTROL: ['Ctrl'],
    LALT: ['Alt'],
    RALT: ['Alt Gr'],
    LWIN: ['Win'],
    RWIN: ['Win'],
    MENU: ['Menu'],
    SPACE: [' '],
    ENTER: ['Enter'],
    BACKSPACE: ['Backspace'],
    TILDE: ['`', '¬', '¦'],
    MINUS: ['-', '_'],
    EQUALS: ['=', '+'],
    LBRACKET: ['[', '{'],
    RBRACKET: [']', '}'],
    BACKSLASH: ['#', '~'],
    SEMICOLON: [';', ':'],
    APOSTROPHE: ['\'', '@'],
    COMMA: [',', '<'],
    PERIOD: ['.', '>'],
    SLASH: ['/', '?'],

    // Additional UK-specific key
    HASH: ['\\', '|'],

    // Arrow Keys
    UP: ['▲'],
    DOWN: ['▼'],
    LEFT: ['◄'],
    RIGHT: ['►'],

    // Navigation Cluster
    PRINTSCREEN: ['PrtSc'],
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

const RUSSIAN_KEYS = {
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
    THREE: ['3', '№'],
    FOUR: ['4', ';'],
    FIVE: ['5', '%'],
    SIX: ['6', ':'],
    SEVEN: ['7', '?'],
    EIGHT: ['8', '*'],
    NINE: ['9', '('],
    ZERO: ['0', ')'],

    // Alphabet Keys
    A: ['Ф'],
    B: ['И'],
    C: ['С'],
    D: ['В'],
    E: ['У'],
    F: ['А'],
    G: ['П'],
    H: ['Р'],
    I: ['Ш'],
    J: ['О'],
    K: ['Л'],
    L: ['Д'],
    M: ['Ь'],
    N: ['Т'],
    O: ['Щ'],
    P: ['З'],
    Q: ['Й'],
    R: ['К'],
    S: ['Ы'],
    T: ['Е'],
    U: ['Г'],
    V: ['М'],
    W: ['Ц'],
    X: ['Ч'],
    Y: ['Н'],
    Z: ['Я'],

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

    // Arrow Keys
    UP: ['▲'],
    DOWN: ['▼'],
    LEFT: ['◄'],
    RIGHT: ['►'],

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