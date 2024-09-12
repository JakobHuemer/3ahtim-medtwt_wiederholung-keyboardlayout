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

    F1: new Key(83, 'F1', 0, 'F1'),
    F2: new Key(84, 'F2', 0, 'F2'),
    F3: new Key(85, 'F3', 0, 'F3'),
    F4: new Key(86, 'F4', 0, 'F4'),
    F5: new Key(87, 'F5', 0, 'F5'),
    F6: new Key(88, 'F6', 0, 'F6'),
    F7: new Key(89, 'F7', 0, 'F7'),
    F8: new Key(90, 'F8', 0, 'F8'),
    F9: new Key(91, 'F9', 0, 'F9'),
    F10: new Key(92, 'F10', 0, 'F10'),
    F11: new Key(93, 'F11', 0, 'F11'),
    F12: new Key(94, 'F12', 0, 'F12'),

    ONE: new Key(95, '1', 0, '1', '!'),
    TWO: new Key(96, '2', 0, '2', '@'),
    THREE: new Key(97, '3', 0, '3', '#'),
    FOUR: new Key(98, '4', 0, '4', '$'),
    FIVE: new Key(99, '5', 0, '5', '%'),
    SIX: new Key(100, '6', 0, '6', '^'),
    SEVEN: new Key(101, '7', 0, '7', '&'),
    EIGHT: new Key(102, '8', 0, '8', '*'),
    NINE: new Key(103, '9', 0, '9', '('),
    ZERO: new Key(104, '0', 0, '0', ')'),

    A: new Key(0, 'A', 0, 'A'),
    B: new Key(1, 'B', 0, 'B'),
    C: new Key(2, 'C', 0, 'C'),
    D: new Key(3, 'D', 0, 'D'),
    E: new Key(4, 'E', 0, 'E'),
    F: new Key(5, 'F', 0, 'F'),
    G: new Key(6, 'G', 0, 'G'),
    H: new Key(7, 'H', 0, 'H'),
    I: new Key(8, 'I', 0, 'I'),
    J: new Key(9, 'J', 0, 'J'),
    K: new Key(10, 'K', 0, 'K'),
    L: new Key(11, 'L', 0, 'L'),
    M: new Key(12, 'M', 0, 'M'),
    N: new Key(13, 'N', 0, 'N'),
    O: new Key(14, 'O', 0, 'O'),
    P: new Key(15, 'P', 0, 'P'),
    Q: new Key(16, 'Q', 0, 'Q'),
    R: new Key(17, 'R', 0, 'R'),
    S: new Key(18, 'S', 0, 'S'),
    T: new Key(19, 'T', 0, 'T'),
    U: new Key(20, 'U', 0, 'U'),
    V: new Key(21, 'V', 0, 'V'),
    W: new Key(22, 'W', 0, 'W'),
    X: new Key(23, 'X', 0, 'X'),
    Y: new Key(24, 'Y', 0, 'Y'),
    Z: new Key(25, 'Z', 0, 'Z'),

    // Special Keys
    ESC: new Key(26, 'ESCAPE', 1, 'Esc'),
    MINUS: new Key(27, 'MINUS', 0, '-', '_'),
    EQUALS: new Key(28, 'EQUALS', 0, '=', '+'),
    TILDE: new Key(29, 'GRAVE', 0, '`', '~'),
    BACKSPACE: new Key(30, 'BACKSPACE', 0, 'Backspace'),
    TAB: new Key(31, 'TAB', 1, 'Tab'),
    LBRACKET: new Key(32, 'LEFTBRACKET', 0, '[', '{'),
    RBRACKET: new Key(33, 'RIGHTBRACKET', 0, ']', '}'),
    BACKSLASH: new Key(34, 'BACKSLASH', 0, '\\', '|'),
    CAPITAL: new Key(35, 'CAPSLOCK', 1, 'Caps Lock'),
    SEMICOLON: new Key(36, 'SEMICOLON', 0, ';', ':'),
    APOSTROPHE: new Key(37, 'APOSTROPHE', 0, '\'', '"'),
    ENTER: new Key(38, 'ENTER', 2, 'Enter'),
    COMMA: new Key(39, 'COMMA', 0, ',', '<'),
    PERIOD: new Key(40, 'PERIOD', 0, '.', '>'),
    SLASH: new Key(41, 'SLASH', 0, '/', '?'),
    SPACE: new Key(42, 'SPACE', 0, 'Space'),
    DELETE: new Key(48, 'DELETE', 2, 'Delete'),
    LSHIFT: new Key(57, 'LSHIFT', 1, 'Left Shift'),
    RSHIFT: new Key(58, 'RSHIFT', 2, 'Right Shift'),
    LALT: new Key(59, 'LALT', 1, 'Left Alt'),
    LCONTROL: new Key(61, 'LCONTROL', 1, 'Left Ctrl'),
    NUMPAD0: new Key(66, 'NUMPAD0', 0, '0'),
    NUMPAD1: new Key(67, 'NUMPAD1', 0, '1'),
    NUMPAD2: new Key(68, 'NUMPAD2', 0, '2'),
    NUMPAD3: new Key(69, 'NUMPAD3', 0, '3'),
    NUMPAD4: new Key(70, 'NUMPAD4', 0, '4'),
    NUMPAD5: new Key(71, 'NUMPAD5', 0, '5'),
    NUMPAD6: new Key(72, 'NUMPAD6', 0, '6'),
    NUMPAD7: new Key(73, 'NUMPAD7', 0, '7'),
    NUMPAD8: new Key(74, 'NUMPAD8', 0, '8'),
    NUMPAD9: new Key(75, 'NUMPAD9', 0, '9'),
    NUMLOCK: new Key(76, 'NUMLOCK', 0, 'Num Lock'),
    DIVIDE: new Key(77, 'DIVIDE', 0, '/'),
    MULTIPLY: new Key(78, 'MULTIPLY', 0, '*'),
    SUBTRACT: new Key(79, 'SUBTRACT', 0, '-'),
    ADD: new Key(80, 'ADD', 0, '+'),
    DECIMAL: new Key(81, 'DECIMAL', 0, '.'),
    NUMPADENTER: new Key(82, 'NUMPADENTER', 0, 'Enter'),

    PRINTSCREEN: new Key(105, 'PRINTSCREEN', 0, 'PrtSc'),
    SCROLLLOCK: new Key(106, 'SCROLLLOCK', 0, 'ScrLk'),
    PAUSE: new Key(107, 'PAUSE', 0, 'Pause'),
    INSERT: new Key(108, 'INSERT', 0, 'Insert'),
    HOME: new Key(109, 'HOME', 0, 'Home'),
    PAGEUP: new Key(110, 'PAGEUP', 0, 'PgUp'),
    PAGEDOWN: new Key(111, 'PAGEDOWN', 0, 'PgDn'),
    END: new Key(112, 'END', 0, 'End'),

    UP: new Key(113, 'UP', 0, '↑'),
    DOWN: new Key(114, 'DOWN', 0, '↓'),
    LEFT: new Key(115, 'LEFT', 0, '←'),
    RIGHT: new Key(116, 'RIGHT', 0, '→'),

    RCONTROL: new Key(117, 'RCONTROL', 0, 'Right Ctrl'),
    RALT: new Key(118, 'RALT', 0, 'Right Alt'),
    LWIN: new Key(119, 'LWIN', 0, 'Left Win'),
    RWIN: new Key(120, 'RWIN', 0, 'Right Win'),
    MENU: new Key(121, 'MENU', 0, 'Menu')
};