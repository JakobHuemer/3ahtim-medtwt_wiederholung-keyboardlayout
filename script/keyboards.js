// reference of sizes: https://switchandclick.com/keyboard-sizes/

// TODO: implement a way to store the structure of the layout in text format so js can recreate it

const Keyboards = {
    FULL_SIZED: {
        displayName: 'Full-Sized (100%)',
        description: `
        <h2>Full-Sized Keyboard (100% Layout)</h2>
        <p>Standard keyboard with 104 keys, including number pad, home cluster, function keys, and arrow keys. 
        Ideal for extensive data entry and office use. Number pad typically on the right, but some have it on the left.</p>
    `,
        keyNumber: 104,
        withLayout: (layout) = {},
    },
    COMPACT1800: {
        displayName: '1800 Compact (96%)',
        description: `
        <h2>1800 Compact Keyboard (96% Layout)</h2>
        <p>A rare find, combining full-sized functionality with a more compact design. Merges number pad with 
        the main keyboard area, saving space without sacrificing keys. Slightly narrower and more portable than full-sized.</p>
    `,
    },
    TEN_KEY_LESS: {
        displayName: 'Ten Key Less (TKL, 80%)',
        description: `
        <h2>Tenkeyless or TKL Keyboard (80% Layout)</h2>
        <p>87 keys, balancing size and functionality. Lacks number pad for compactness and portability. 
        Offers more desk space and brings the mouse closer. Ideal for those who don't heavily use the number pad.</p>
    `,
    },
    SEVENTY_FIVE_PERCENT: {
        displayName: '75%',
        description: `
        <h2>75% Keyboard</h2>
        <p>Compact version of TKL, with arrow keys and home cluster placed adjacently. Vertically aligned home cluster 
        saves space. Less common, may require adjustment to key sizes and placement. Finding custom keycaps can be challenging.</p>
    `,
    },
    SIXTY_FIVE_PERCENT: {
        displayName: '65%',
        description: `
        <h2>65% Keyboard</h2>
        <p>Ultra-compact, removing function row and sometimes home cluster. Smallest size with dedicated arrow keys. 
        Highly portable and light. Great for gaming due to arrow key inclusion. Requires adjustment to missing keys.</p>
    `,
    },
    SIXTY_PERCENT: {
        displayName: '60%',
        description: `
        <h2>60% Keyboard</h2>
        <p>Popular in gaming and enthusiast communities. Compact and symmetrical, common for custom builds. 
        Cheaper for custom builds due to fewer required components. Pre-built options are also affordable.</p>
    `,
    },
    FORTY_PERCENT: {
        displayName: '40%',
        description: `
        <h2>40% Keyboard</h2>
        <p>Most minimal layout, removing numbers and non-letter keys. Requires frequent layer switching for numbers 
        and symbols. Long adjustment period needed, but offers maximum space-saving and portability.</p>
    `,
    },
};