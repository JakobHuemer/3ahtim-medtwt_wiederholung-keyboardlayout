class Key {
    constructor(id, keycode, labelLocation, representation, secondaryRepresentation) {
        this.id = id;
        this.representation = representation;
        this.secondaryRepresentation = secondaryRepresentation;
        this.labelLocation = labelLocation;

        this.element = document.documentElement('div');
        this.element.classList.add("key")
        this.element.id = 'key-' + this.id;
        this.element.innerHTML = `
            <span
               ${ this.labelLocation === 1 ? `style="text-align: left"` :
            this.labelLocation === 2 ? `style="test-align: right;"` : '' }
             class="representation">${ representation }</span>
                ${ this.secondaryRepresentation ? `
                    <span class="secondary-representation">${ this.secondaryRepresentation }</span>` : '' }
            <span class="keycode">${ keycode }</span>
        `;
    }
}




const Keys = {
    // Latin Alphabet
    A: new Key(0, 'KEY_A', 0, 'A'),
    B: new Key(1, 'KEY_B', 0, 'B'),
    C: new Key(2, 'KEY_C', 0, 'C'),
    D: new Key(3, 'KEY_D', 0, 'D'),
    E: new Key(4, 'KEY_E', 0, 'E'),
    F: new Key(5, 'KEY_F', 0, 'F'),
    G: new Key(6, 'KEY_G', 0, 'G'),
    H: new Key(7, 'KEY_H', 0, 'H'),
    I: new Key(8, 'KEY_I', 0, 'I'),
    J: new Key(9, 'KEY_J', 0, 'J'),
    K: new Key(10, 'KEY_K', 0, 'K'),
    L: new Key(11, 'KEY_L', 0, 'L'),
    M: new Key(12, 'KEY_M', 0, 'M'),
    N: new Key(13, 'KEY_N', 0, 'N'),
    O: new Key(14, 'KEY_O', 0, 'O'),
    P: new Key(15, 'KEY_P', 0, 'P'),
    Q: new Key(16, 'KEY_Q', 0, 'Q'),
    R: new Key(17, 'KEY_R', 0, 'R'),
    S: new Key(18, 'KEY_S', 0, 'S'),
    T: new Key(19, 'KEY_T', 0, 'T'),
    U: new Key(20, 'KEY_U', 0, 'U'),
    V: new Key(21, 'KEY_V', 0, 'V'),
    W: new Key(22, 'KEY_W', 0, 'W'),
    X: new Key(23, 'KEY_X', 0, 'X'),
    Y: new Key(24, 'KEY_Y', 0, 'Y'),
    Z: new Key(25, 'KEY_Z', 0, 'Z'),

    // Special Keys
    ESC: new Key(26, 'KEY_ESCAPE', 1, 'Esc'),
    MINUS: new Key(27, 'KEY_MINUS', 0, '-', '_'),
    EQUALS: new Key(28, 'KEY_EQUALS', 0, '=', '+'),
    TILDE: new Key(29, 'KEY_GRAVE', 0, '`', '~'),
    BACKSPACE: new Key(30, 'KEY_BACKSPACE', 0, 'Backspace'),
    TAB: new Key(31, 'KEY_TAB', 1, 'Tab'),
    LBRACKET: new Key(32, 'KEY_LEFTBRACKET', 0, '[', '{'),
    RBRACKET: new Key(33, 'KEY_RIGHTBRACKET', 0, ']', '}'),
    BACKSLASH: new Key(34, 'KEY_BACKSLASH', 0, '\\', '|'),
    CAPITAL: new Key(35, 'KEY_CAPSLOCK', 1, 'Caps Lock'),
    SEMICOLON: new Key(36, 'KEY_SEMICOLON', 0, ';', ':'),
    APOSTROPHE: new Key(37, 'KEY_APOSTROPHE', 0, '\'', '"'),
    ENTER: new Key(38, 'KEY_ENTER', 2, 'Enter'),
    COMMA: new Key(39, 'KEY_COMMA', 0, ',', '<'),
    PERIOD: new Key(40, 'KEY_PERIOD', 0, '.', '>'),
    SLASH: new Key(41, 'KEY_SLASH', 0, '/', '?'),
    SPACE: new Key(42, 'KEY_SPACE', 0, 'Space'),
    DELETE: new Key(48, 'KEY_DELETE', 2, 'Delete'),
    LSHIFT: new Key(57, 'KEY_LSHIFT', 1, 'Left Shift'),
    RSHIFT: new Key(58, 'KEY_RSHIFT', 2, 'Right Shift'),
    LALT: new Key(59, 'KEY_LALT', 1, 'Left Alt'),
    LCONTROL: new Key(61, 'KEY_LCONTROL', 1, 'Left Ctrl'),
    NUMPAD0: new Key(66, 'KEY_NUMPAD0', 0, '0'),
    NUMPAD1: new Key(67, 'KEY_NUMPAD1', 0, '1'),
    NUMPAD2: new Key(68, 'KEY_NUMPAD2', 0, '2'),
    NUMPAD3: new Key(69, 'KEY_NUMPAD3', 0, '3'),
    NUMPAD4: new Key(70, 'KEY_NUMPAD4', 0, '4'),
    NUMPAD5: new Key(71, 'KEY_NUMPAD5', 0, '5'),
    NUMPAD6: new Key(72, 'KEY_NUMPAD6', 0, '6'),
    NUMPAD7: new Key(73, 'KEY_NUMPAD7', 0, '7'),
    NUMPAD8: new Key(74, 'KEY_NUMPAD8', 0, '8'),
    NUMPAD9: new Key(75, 'KEY_NUMPAD9', 0, '9'),
    NUMLOCK: new Key(76, 'KEY_NUMLOCK', 0, 'Num Lock'),
    DIVIDE: new Key(77, 'KEY_DIVIDE', 0, '/'),
    MULTIPLY: new Key(78, 'KEY_MULTIPLY', 0, '*'),
    SUBTRACT: new Key(79, 'KEY_SUBTRACT', 0, '-'),
    ADD: new Key(80, 'KEY_ADD', 0, '+'),
    DECIMAL: new Key(81, 'KEY_DECIMAL', 0, '.'),
    NUMPADENTER: new Key(82, 'KEY_NUMPADENTER', 0, 'Enter'),
};