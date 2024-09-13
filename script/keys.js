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
        this.showKeycode = true
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
        this.isLittleFont = true
        this.render();
        return this;
    }

}


const Keys = {
// Function Keys
    F1: (new Key(1, 'F1', 0, 'F1')),
    F2: (new Key(2, 'F2', 0, 'F2')),
    F3: (new Key(3, 'F3', 0, 'F3')),
    F4: (new Key(4, 'F4', 0, 'F4')),
    F5: (new Key(5, 'F5', 0, 'F5')),
    F6: (new Key(6, 'F6', 0, 'F6')),
    F7: (new Key(7, 'F7', 0, 'F7')),
    F8: (new Key(8, 'F8', 0, 'F8')),
    F9: (new Key(9, 'F9', 0, 'F9')),
    F10: (new Key(10, 'F10', 0, 'F10')),
    F11: (new Key(11, 'F11', 0, 'F11')),
    F12: (new Key(12, 'F12', 0, 'F12')),

// Number Keys
    ONE: (new Key(13, '1', 0, '1', '!')),
    TWO: (new Key(14, '2', 0, '2', '@')),
    THREE: (new Key(15, '3', 0, '3', '#')),
    FOUR: (new Key(16, '4', 0, '4', '$')),
    FIVE: (new Key(17, '5', 0, '5', '%')),
    SIX: (new Key(18, '6', 0, '6', '^')),
    SEVEN: (new Key(19, '7', 0, '7', '&')),
    EIGHT: (new Key(20, '8', 0, '8', '*')),
    NINE: (new Key(21, '9', 0, '9', '(')),
    ZERO: (new Key(22, '0', 0, '0', ')')),

// Alphabet Keys
    A: (new Key(23, 'A', 0, 'A')),
    B: (new Key(24, 'B', 0, 'B')),
    C: (new Key(25, 'C', 0, 'C')),
    D: (new Key(26, 'D', 0, 'D')),
    E: (new Key(27, 'E', 0, 'E')),
    F: (new Key(28, 'F', 0, 'F')),
    G: (new Key(29, 'G', 0, 'G')),
    H: (new Key(30, 'H', 0, 'H')),
    I: (new Key(31, 'I', 0, 'I')),
    J: (new Key(32, 'J', 0, 'J')),
    K: (new Key(33, 'K', 0, 'K')),
    L: (new Key(34, 'L', 0, 'L')),
    M: (new Key(35, 'M', 0, 'M')),
    N: (new Key(36, 'N', 0, 'N')),
    O: (new Key(37, 'O', 0, 'O')),
    P: (new Key(38, 'P', 0, 'P')),
    Q: (new Key(39, 'Q', 0, 'Q')),
    R: (new Key(40, 'R', 0, 'R')),
    S: (new Key(41, 'S', 0, 'S')),
    T: (new Key(42, 'T', 0, 'T')),
    U: (new Key(43, 'U', 0, 'U')),
    V: (new Key(44, 'V', 0, 'V')),
    W: (new Key(45, 'W', 0, 'W')),
    X: (new Key(46, 'X', 0, 'X')),
    Y: (new Key(47, 'Y', 0, 'Y')),
    Z: (new Key(48, 'Z', 0, 'Z')),

// Special Keys
    ESC: (new Key(49, 'ESCAPE', 1, 'Esc')),
    TAB: (new Key(50, 'TAB', 1, 'Tab')),
    CAPITAL: (new Key(51, 'CAPSLOCK', 0, 'Caps Lock')),
    LSHIFT: (new Key(52, 'LEFT', 1, 'Shift')).littleFont().enableKeycode(),
    RSHIFT: (new Key(53, 'RIGHT', 2, 'Shift')).littleFont().enableKeycode(),
    LCONTROL: (new Key(54, 'LEFT', 1, 'CTRL')).enableKeycode(),
    RCONTROL: (new Key(55, 'RIGHT', 2, 'CTRL')).enableKeycode(),
    LALT: (new Key(56, 'LEFT', 1, 'ALT')).enableKeycode(),
    RALT: (new Key(57, 'RIGHT', 1, 'ALT')).enableKeycode(),
    LWIN: (new Key(58, 'LEFT', 1, 'WIN')).enableKeycode(),
    RWIN: (new Key(59, 'RIGHT', 1, 'WIN')).enableKeycode(),
    MENU: (new Key(60, 'MENU', 0, 'MENU')),
    SPACE: (new Key(61, 'SPACE', 0, ' ')).enableKeycode(),
    ENTER: (new Key(62, 'ENTER', 2, 'Return')).littleFont(),
    BACKSPACE: (new Key(63, 'BCKSPACE', 0, 'Delete')).littleFont().enableKeycode(),
    TILDE: (new Key(64, 'GRAVE', 0, '`', '~')),
    MINUS: (new Key(65, 'MINUS', 0, '-', '_')),
    EQUALS: (new Key(66, 'EQUALS', 0, '=', '+')),
    LBRACKET: (new Key(67, 'LEFTBRACKET', 0, '[', '{')),
    RBRACKET: (new Key(68, 'RIGHTBRACKET', 0, ']', '}')),
    BACKSLASH: (new Key(69, 'BACKSLASH', 0, '\\', '|')),
    SEMICOLON: (new Key(70, 'SEMICOLON', 0, ';', ':')),
    APOSTROPHE: (new Key(71, 'APOSTROPHE', 0, '\'', '"')),
    COMMA: (new Key(72, 'COMMA', 0, ',', '<')),
    PERIOD: (new Key(73, 'PERIOD', 0, '.', '>')),
    SLASH: (new Key(74, 'SLASH', 0, '/', '?')),

// Arrow Keys
    UP: (new Key(75, 'UP', 0, '↑')),
    DOWN: (new Key(76, 'DOWN', 0, '↓')),
    LEFT: (new Key(77, 'LEFT', 0, '←')),
    RIGHT: (new Key(78, 'RIGHT', 0, '→')),

// Navigation Cluster
    PRINTSCREEN: (new Key(79, 'PRINTSCREEN', 0, 'Print Screen')).littleFont(),
    SCROLLLOCK: (new Key(80, 'SCROLLLOCK', 0, 'Scroll Lock')).littleFont(),
    PAUSE: (new Key(81, 'PAUSE', 0, 'Pause')).littleFont(),
    INSERT: (new Key(82, 'INSERT', 0, 'Insert')).littleFont(),
    HOME: (new Key(83, 'HOME', 0, 'Home')),
    PAGEUP: (new Key(84, 'PAGEUP', 0, 'Page Up')),
    DELETE: (new Key(85, 'DELETE', 0, 'Delete')).littleFont().enableKeycode(),
    END: new Key(86, 'END', 0, 'End'),
    PAGEDOWN: (new Key(87, 'PAGEDOWN', 0, 'Page Down')),

// Numpad
    NUMLOCK: (new Key(88, 'NUMLOCK', 0, 'Num Lock')),
    NUMPAD0: (new Key(89, 'NUMPAD', 0, '0')).enableKeycode(),
    NUMPAD1: (new Key(90, 'NUMPAD', 0, '1')).enableKeycode(),
    NUMPAD2: (new Key(91, 'NUMPAD', 0, '2')).enableKeycode(),
    NUMPAD3: (new Key(92, 'NUMPAD', 0, '3')).enableKeycode(),
    NUMPAD4: (new Key(93, 'NUMPAD', 0, '4')).enableKeycode(),
    NUMPAD5: (new Key(94, 'NUMPAD', 0, '5')).enableKeycode(),
    NUMPAD6: (new Key(95, 'NUMPAD', 0, '6')).enableKeycode(),
    NUMPAD7: (new Key(96, 'NUMPAD', 0, '7')).enableKeycode(),
    NUMPAD8: (new Key(97, 'NUMPAD', 0, '8')).enableKeycode(),
    NUMPAD9: (new Key(98, 'NUMPAD', 0, '9')).enableKeycode(),
    DIVIDE: (new Key(99, 'DIVIDE', 0, '/')),
    MULTIPLY: (new Key(100, 'MULTIPLY', 0, '*')),
    SUBTRACT: (new Key(101, 'SUBTRACT', 0, '-')),
    ADD: (new Key(102, 'ADD', 0, '+')),
    DECIMAL: (new Key(103, 'DECIMAL', 0, '.')),
    NUMPADENTER: (new Key(104, 'NUMPAD', 2, 'Enter')).littleFont().enableKeycode(),
};