// a layout will be an array of the keys used, this will then be passed to the withLayout function of a Keyboard size
//, the keyboard will take the keys it needs and the Layout provides the correct order of keys.


// first defines the bindings and limits the Layouts to use for that language
const LAYOUT = {
    Default: {
        name: 'Default',
        withKeys: (K) => [
            [K.ESC, K.F1, K.F2, K.F3, K.F4, K.F5, K.F6, K.F7, K.F8, K.F9, K.F10, K.F11, K.F12, K.PRINTSCREEN, K.SCROLLLOCK, K.PAUSE],
            [K.TILDE, K.ONE, K.TWO, K.THREE, K.FOUR, K.FIVE, K.SIX, K.SEVEN, K.EIGHT, K.NINE, K.ZERO, K.MINUS, K.EQUALS, K.BACKSPACE, K.INSERT, K.HOME, K.PAGEUP, K.NUMLOCK, K.DIVIDE, K.MULTIPLY, K.SUBTRACT],
            [K.TAB, K.Q, K.W, K.E, K.R, K.T, K.Y, K.U, K.I, K.O, K.P, K.LBRACKET, K.RBRACKET, K.BACKSLASH, K.DELETE, K.END, K.PAGEDOWN, K.NUMPAD7, K.NUMPAD8, K.NUMPAD9, K.ADD],
            [K.CAPITAL, K.A, K.S, K.D, K.F, K.G, K.H, K.J, K.K, K.L, K.SEMICOLON, K.APOSTROPHE, K.ENTER, K.NUMPAD4, K.NUMPAD5, K.NUMPAD6],
            [K.LSHIFT, K.Z, K.X, K.C, K.V, K.B, K.N, K.M, K.COMMA, K.PERIOD, K.SLASH, K.RSHIFT, K.UP, K.NUMPAD1, K.NUMPAD2, K.NUMPAD3, K.NUMPADENTER],
            [K.LCONTROL, K.LWIN, K.LALT, K.SPACE, K.RALT, K.RWIN, K.MENU, K.RCONTROL, K.LEFT, K.DOWN, K.RIGHT, K.NUMPAD0, K.DECIMAL],
        ],
        description: `
        <h2>Default Layout</h2>
        <p>The Default layout represents the standard key arrangement for the selected language or region.
           It is designed to accommodate the most common characters and symbols used in that language.</p>
        <p>Key features of the Default layout:</p>
        <ul>
            <li>Optimized for the specific language or region</li>
            <li>Familiar arrangement for users of that language</li>
            <li>Includes special characters and diacritical marks as needed</li>
            <li>Balances typing efficiency with cultural and linguistic considerations</li>
        </ul>
        <p>While the exact key placements may vary depending on the language, this layout aims to provide
           a comfortable and efficient typing experience for users in their native language.</p>`,
    },

    // english
    Dvorak: {
        name: "Dvorak",
        withKeys: (K) => [
            [K.ESC, K.F1, K.F2, K.F3, K.F4, K.F5, K.F6, K.F7, K.F8, K.F9, K.F10, K.F11, K.F12, K.PRINTSCREEN, K.SCROLLLOCK, K.PAUSE],
            [K.TILDE, K.ONE, K.TWO, K.THREE, K.FOUR, K.FIVE, K.SIX, K.SEVEN, K.EIGHT, K.NINE, K.ZERO, K.LBRACKET, K.RBRACKET, K.BACKSPACE, K.INSERT, K.HOME, K.PAGEUP, K.NUMLOCK, K.DIVIDE, K.MULTIPLY, K.SUBTRACT],
            [K.TAB, K.APOSTROPHE, K.COMMA, K.PERIOD, K.P, K.Y, K.F, K.G, K.C, K.R, K.L, K.SLASH, K.EQUALS, K.BACKSLASH, K.DELETE, K.END, K.PAGEDOWN, K.NUMPAD7, K.NUMPAD8, K.NUMPAD9, K.ADD],
            [K.CAPITAL, K.A, K.O, K.E, K.U, K.I, K.D, K.H, K.T, K.N, K.S, K.MINUS, K.ENTER, K.NUMPAD4, K.NUMPAD5, K.NUMPAD6],
            [K.LSHIFT, K.SEMICOLON, K.Q, K.J, K.K, K.X, K.B, K.M, K.W, K.V, K.Z, K.RSHIFT, K.UP, K.NUMPAD1, K.NUMPAD2, K.NUMPAD3, K.NUMPADENTER],
            [K.LCONTROL, K.LWIN, K.LALT, K.SPACE, K.RALT, K.RWIN, K.MENU, K.RCONTROL, K.LEFT, K.DOWN, K.RIGHT, K.NUMPAD0, K.DECIMAL],
        ],
        description: `
            <h2>Dvorak</h2>
            <p>Dvorak is an alternative keyboard layout developed in the 1930s by August Dvorak and William Dealey. 
                It was designed to increase typing speed and reduce fatigue by placing the most common letters on 
                the home row. Dvorak aims to distribute the workload more evenly between hands.</p>
            <p>Advantages of Dvorak:</p>
            <ul>
                <li>Potentially faster typing speeds</li>
                <li>Reduced finger movement</li>
                <li>May decrease the risk of repetitive strain injuries</li>
            </ul>`,
    },
    Colemak: {
        name: 'Colemak',
        withKeys: (K) => [
            [K.ESC, K.F1, K.F2, K.F3, K.F4, K.F5, K.F6, K.F7, K.F8, K.F9, K.F10, K.F11, K.F12, K.PRINTSCREEN, K.SCROLLLOCK, K.PAUSE],
            [K.TILDE, K.ONE, K.TWO, K.THREE, K.FOUR, K.FIVE, K.SIX, K.SEVEN, K.EIGHT, K.NINE, K.ZERO, K.MINUS, K.EQUALS, K.BACKSPACE, K.INSERT, K.HOME, K.PAGEUP, K.NUMLOCK, K.DIVIDE, K.MULTIPLY, K.SUBTRACT],
            [K.TAB, K.Q, K.W, K.F, K.P, K.G, K.J, K.L, K.U, K.Y, K.SEMICOLON, K.LBRACKET, K.RBRACKET, K.BACKSLASH, K.DELETE, K.END, K.PAGEDOWN, K.NUMPAD7, K.NUMPAD8, K.NUMPAD9, K.ADD],
            [K.BACKSPACE, K.A, K.R, K.S, K.T, K.D, K.H, K.N, K.E, K.I, K.O, K.APOSTROPHE, K.ENTER, K.NUMPAD4, K.NUMPAD5, K.NUMPAD6],
            [K.LSHIFT, K.Z, K.X, K.C, K.V, K.B, K.K, K.M, K.COMMA, K.PERIOD, K.SLASH, K.RSHIFT, K.UP, K.NUMPAD1, K.NUMPAD2, K.NUMPAD3, K.NUMPADENTER],
            [K.LCONTROL, K.LWIN, K.LALT, K.SPACE, K.RALT, K.RWIN, K.MENU, K.RCONTROL, K.LEFT, K.DOWN, K.RIGHT, K.NUMPAD0, K.DECIMAL],
        ],
        description: `
            <h2>Colemak</h2>
            <p>Colemak, created in 2006 by Shai Coleman, is a modern alternative to QWERTY. 
                It retains many common shortcuts from QWERTY while optimizing for efficiency and ergonomics.
                Colemak is designed to be easier to learn for QWERTY users compared to other alternative layouts.</p>
            <p>Key aspects of Colemak:</p>
            <ul>
                <li>17 keys differ from QWERTY</li>
                <li>Frequently used keys placed on the home row</li>
                <li>Minimal learning curve for QWERTY users</li>
            </ul>`,
    },
    Workman: {
        name: 'Workman',
        withKeys: (K) => [
            [K.ESC, K.F1, K.F2, K.F3, K.F4, K.F5, K.F6, K.F7, K.F8, K.F9, K.F10, K.F11, K.F12, K.PRINTSCREEN, K.SCROLLLOCK, K.PAUSE],
            [K.TILDE, K.ONE, K.TWO, K.THREE, K.FOUR, K.FIVE, K.SIX, K.SEVEN, K.EIGHT, K.NINE, K.ZERO, K.MINUS, K.EQUALS, K.BACKSPACE, K.INSERT, K.HOME, K.PAGEUP, K.NUMLOCK, K.DIVIDE, K.MULTIPLY, K.SUBTRACT],
            [K.TAB, K.Q, K.D, K.R, K.W, K.B, K.J, K.F, K.U, K.P, K.SEMICOLON, K.LBRACKET, K.RBRACKET, K.BACKSLASH, K.DELETE, K.END, K.PAGEDOWN, K.NUMPAD7, K.NUMPAD8, K.NUMPAD9, K.ADD],
            [K.CAPITAL, K.A, K.S, K.H, K.T, K.G, K.Y, K.N, K.E, K.O, K.I, K.APOSTROPHE, K.ENTER, K.NUMPAD4, K.NUMPAD5, K.NUMPAD6],
            [K.LSHIFT, K.Z, K.X, K.M, K.C, K.V, K.K, K.L, K.COMMA, K.PERIOD, K.SLASH, K.RSHIFT, K.UP, K.NUMPAD1, K.NUMPAD2, K.NUMPAD3, K.NUMPADENTER],
            [K.LCONTROL, K.LWIN, K.LALT, K.SPACE, K.RALT, K.RWIN, K.MENU, K.RCONTROL, K.LEFT, K.DOWN, K.RIGHT, K.NUMPAD0, K.DECIMAL],
        ],
        description: `
            <h2>Workman</h2>
            <p>Workman is a keyboard layout developed in 2010 with a focus on reducing lateral finger movements.
                It aims to address perceived shortcomings in other alternative layouts like Dvorak and Colemak. 
                Workman prioritizes comfort and efficiency for modern typing habits.</p>
            <p>Workman's design principles:</p>
            <ul>
                <li>Minimizes awkward finger movements</li>
                <li>Balances the workload between hands</li>
                <li>Optimized for English language typing</li>
            </ul>`,
    },


    // german
    // TODO: Make german layouts
    BEPO: {
        name: 'BÉPO',
        withKeys: (K) => [
            [K.ESC, K.F1, K.F2, K.F3, K.F4, K.F5, K.F6, K.F7, K.F8, K.F9, K.F10, K.F11, K.F12, K.PRINTSCREEN, K.SCROLLLOCK, K.PAUSE],
            [K.TILDE, K.ONE, K.TWO, K.THREE, K.FOUR, K.FIVE, K.SIX, K.SEVEN, K.EIGHT, K.NINE, K.ZERO, K.MINUS, K.EQUALS, K.BACKSPACE, K.INSERT, K.HOME, K.PAGEUP, K.NUMLOCK, K.DIVIDE, K.MULTIPLY, K.SUBTRACT],
            [K.TAB, K.B, K.E, K.P, K.O, K.PERIOD, K.TILDE, K.V, K.D, K.L, K.J, K.Z, K.W, K.BACKSLASH, K.DELETE, K.END, K.PAGEDOWN, K.NUMPAD7, K.NUMPAD8, K.NUMPAD9, K.ADD],
            [K.CAPITAL, K.A, K.U, K.I, K.E, K.COMMA, K.C, K.T, K.S, K.R, K.N, K.M, K.SEMICOLON, K.ENTER, K.NUMPAD4, K.NUMPAD5, K.NUMPAD6],
            [K.LSHIFT, K.TILDE, K.Y, K.X, K.PERIOD, K.K, K.APOSTROPHE, K.Q, K.G, K.H, K.F, K.RSHIFT, K.UP, K.NUMPAD1, K.NUMPAD2, K.NUMPAD3, K.NUMPADENTER],
            [K.LCONTROL, K.LWIN, K.LALT, K.SPACE, K.RALT, K.RWIN, K.MENU, K.RCONTROL, K.LEFT, K.DOWN, K.RIGHT, K.NUMPAD0, K.DECIMAL],
        ],
        description: `
        <h2>BÉPO</h2>
        <p>BÉPO is an ergonomic keyboard layout optimized for the French language. It was created as an alternative to the traditional AZERTY layout, offering improved typing efficiency and comfort.</p>
        <p>Key features of BÉPO:</p>
        <ul>
            <li>Designed specifically for French typing</li>
            <li>Based on letter frequency in the French language</li>
            <li>Easy access to accented characters and punctuation</li>
            <li>Improved ergonomics compared to AZERTY</li>
            <li>Supports efficient typing in other European languages</li>
        </ul>
        <p>BÉPO also considers programming needs, placing brackets and other coding symbols in easily accessible positions.</p>`,
    },
    Neo: {
        name: 'Neo',
        withKeys: (K) => [
            [K.ESC, K.F1, K.F2, K.F3, K.F4, K.F5, K.F6, K.F7, K.F8, K.F9, K.F10, K.F11, K.F12, K.PRINTSCREEN, K.SCROLLLOCK, K.PAUSE],
            [K.TILDE, K.ONE, K.TWO, K.THREE, K.FOUR, K.FIVE, K.SIX, K.SEVEN, K.EIGHT, K.NINE, K.ZERO, K.MINUS, K.EQUALS, K.BACKSPACE, K.INSERT, K.HOME, K.PAGEUP, K.NUMLOCK, K.DIVIDE, K.MULTIPLY, K.SUBTRACT],
            [K.TAB, K.X, K.V, K.L, K.C, K.W, K.K, K.H, K.G, K.F, K.Q, K.LBRACKET, K.RBRACKET, K.BACKSLASH, K.DELETE, K.END, K.PAGEDOWN, K.NUMPAD7, K.NUMPAD8, K.NUMPAD9, K.ADD],
            [K.CAPITAL, K.U, K.I, K.A, K.E, K.O, K.S, K.N, K.R, K.T, K.D, K.Y, K.ENTER, K.NUMPAD4, K.NUMPAD5, K.NUMPAD6],
            [K.LSHIFT, K.SEMICOLON, K.PERIOD, K.APOSTROPHE, K.P, K.Z, K.B, K.M, K.COMMA, K.PERIOD, K.J, K.RSHIFT, K.UP, K.NUMPAD1, K.NUMPAD2, K.NUMPAD3, K.NUMPADENTER],
            [K.LCONTROL, K.LWIN, K.LALT, K.SPACE, K.RALT, K.RWIN, K.MENU, K.RCONTROL, K.LEFT, K.DOWN, K.RIGHT, K.NUMPAD0, K.DECIMAL],
        ],
        description: `
        <h2>Neo</h2>
        <p>Neo is an ergonomic keyboard layout designed specifically for the German language. It was developed to improve typing efficiency and reduce strain compared to the standard QWERTZ layout.</p>
        <p>Key features of Neo:</p>
        <ul>
            <li>Optimized for German language typing</li>
            <li>Improved access to special characters and umlauts</li>
            <li>Balanced hand usage and reduced finger movement</li>
            <li>Designed with programming in mind</li>
        </ul>
        <p>Neo uses six layers, allowing access to a wide range of characters and functions without the need for complex key combinations.</p>`,
    },
};
