const GAP_SIZE = 1 / 8;

// reverse of slice
/**
 * Returns a copy of the original Array with the specified range not included (invertion of slice)
 * this is not testet and edge cases may not work but this is not used dynamically and if it runs once it runs always
 *
 * @param start
 * @param end
 * @returns {*[]}
 */
Array.prototype.unslice = function (start, end) {
    return [...this.slice(0, start), ...this.slice(end, this.length)];
};

const KEYBOARD = {
    FULL_SIZED: {
        displayName: 'Full-Sized (100%)',
        description: `
        <h2>Full-Sized Keyboard (100% Layout)</h2>
        <p>Standard keyboard with 104 keys, including number pad, home cluster, function keys, and arrow keys. 
            Ideal for extensive data entry and office use. Number pad typically on the right, but some have it on 
            the left.</p>
    `,
        height: 6 + 5 * GAP_SIZE,
        width: 21.5 + 20 * GAP_SIZE + 1.25 * GAP_SIZE + 1,
        withLayout: (layout) => {
            return layout.keys;
        },
        positions: [

            // row 1
            { x: 0, y: 0, width: 1, height: 1 },
            { x: 2 + 2 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 3 + 3 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 4 + 4 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 5 + 5 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 6.5 + 6 * GAP_SIZE + GAP_SIZE / 2, y: 0, width: 1, height: 1 },
            { x: 7.5 + 7 * GAP_SIZE + GAP_SIZE / 2, y: 0, width: 1, height: 1 },
            { x: 8.5 + 8 * GAP_SIZE + GAP_SIZE / 2, y: 0, width: 1, height: 1 },
            { x: 9.5 + 9 * GAP_SIZE + GAP_SIZE / 2, y: 0, width: 1, height: 1 },
            { x: 11 + 10 * GAP_SIZE + GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 12 + 11 * GAP_SIZE + GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 13 + 12 * GAP_SIZE + GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 14 + 13 * GAP_SIZE + GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 15 + 14 * GAP_SIZE + GAP_SIZE + 1 / 4, y: 0, width: 1, height: 1 },
            { x: 16 + 15 * GAP_SIZE + GAP_SIZE + 1 / 4, y: 0, width: 1, height: 1 },
            { x: 17 + 16 * GAP_SIZE + GAP_SIZE + 1 / 4, y: 0, width: 1, height: 1 },


            // row 2
            { x: 0, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 1 + GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 2 + 2 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 3 + 3 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 4 + 4 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 5 + 5 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 6 + 6 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 7 + 7 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 8 + 8 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 9 + 9 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 10 + 10 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 11 + 11 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 12 + 12 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 13 + 13 * GAP_SIZE, y: 1 + GAP_SIZE, width: 2 + GAP_SIZE, height: 1 },
            { x: 15.25 + 14 * GAP_SIZE + GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 16.25 + 15 * GAP_SIZE + GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 17.25 + 16 * GAP_SIZE + GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 18.5 + 17 * GAP_SIZE + 1.25 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 19.5 + 18 * GAP_SIZE + 1.25 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 20.5 + 19 * GAP_SIZE + 1.25 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 21.5 + 20 * GAP_SIZE + 1.25 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },


            // row 3
            { x: 0, y: 2 + 2 * GAP_SIZE, width: 1.5 + GAP_SIZE, height: 1 },
            { x: 1.5 + 2 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 2.5 + 3 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 3.5 + 4 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 4.5 + 5 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 5.5 + 6 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 6.5 + 7 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 7.5 + 8 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 8.5 + 9 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 9.5 + 10 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 10.5 + 11 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 11.5 + 12 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 12.5 + 13 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 13.5 + 14 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1.5, height: 1 },
            { x: 15.25 + 15 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 16.25 + 16 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 17.25 + 17 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 18.5 + 18 * GAP_SIZE + 0.25 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 19.5 + 19 * GAP_SIZE + 0.25 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 20.5 + 20 * GAP_SIZE + 0.25 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 21.5 + 21 * GAP_SIZE + 0.25 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 2 + GAP_SIZE },


            // row 4
            { x: 0, y: 3 + 3 * GAP_SIZE, width: 1.75 + GAP_SIZE, height: 1 },
            { x: 1.75 + 2 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 2.75 + GAP_SIZE + 2 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 3.75 + GAP_SIZE + 3 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 4.75 + GAP_SIZE + 4 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 5.75 + GAP_SIZE + 5 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 6.75 + GAP_SIZE + 6 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 7.75 + GAP_SIZE + 7 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 8.75 + GAP_SIZE + 8 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 9.75 + GAP_SIZE + 9 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 10.75 + GAP_SIZE + 10 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 11.75 + GAP_SIZE + 11 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 12.75 + GAP_SIZE + 12 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 2.25 + GAP_SIZE, height: 1 },
            { x: 18.5 + 17 * GAP_SIZE + 1.25 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 19.5 + 18 * GAP_SIZE + 1.25 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 20.5 + 19 * GAP_SIZE + 1.25 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },


            // row 5
            { x: 0, y: 4 + 4 * GAP_SIZE, width: 2.25 + 2 * GAP_SIZE, height: 1 },
            { x: 2.25 + GAP_SIZE + 2 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 3.25 + GAP_SIZE + 3 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 4.25 + GAP_SIZE + 4 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 5.25 + GAP_SIZE + 5 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 6.25 + GAP_SIZE + 6 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 7.25 + GAP_SIZE + 7 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 8.25 + GAP_SIZE + 8 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 9.25 + GAP_SIZE + 9 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 10.25 + GAP_SIZE + 10 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 11.25 + GAP_SIZE + 11 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 12.25 + GAP_SIZE + 12 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 2.75 + GAP_SIZE, height: 1 }, // Shift
            { x: 16.25 + 16 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 18.5 + 17 * GAP_SIZE + 1.25 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 19.5 + 18 * GAP_SIZE + 1.25 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 20.5 + 19 * GAP_SIZE + 1.25 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 21.5 + 20 * GAP_SIZE + 1.25 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 2 + GAP_SIZE },


            // row 6

            // Row 6 (Space bar row)
            { x: 0, y: 5 + 5 * GAP_SIZE, width: 1.25 + GAP_SIZE, height: 1 },   // Left Ctrl (width increased by GAP_SIZE)
            { x: 1.25 + 2 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1.25 + GAP_SIZE, height: 1 },// Left Win (x position and width adjusted)
            { x: 2.5 + 4 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1.25 + 2 * GAP_SIZE, height: 1 },// Left Alt (x position and width adjusted)
            { x: 3.75 + 7 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 6.50 + GAP_SIZE, height: 1 },// Space (x position and width adjusted)
            { x: 10 + 11 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1.25, height: 1 },// Right Alt (x position and width adjusted)
            { x: 11.25 + 12 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1.25, height: 1 },// Right Win (x position and width adjusted)
            { x: 12.5 + 13 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1.25, height: 1 },// Menu (x position and width adjusted)
            { x: 13.75 + 14 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1.25, height: 1 },// Right Ctrl (x position and width adjusted)
            { x: 15.25 + 14 * GAP_SIZE + GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 },  // Left Arrow
            { x: 16.25 + 15 * GAP_SIZE + GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 }, // Down Arrow
            { x: 17.25 + 16 * GAP_SIZE + GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 },     // Right Arrow
            { x: 18.5 + 17 * GAP_SIZE + 1.25 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 2 + GAP_SIZE, height: 1 },// Num 0 (width adjusted)
            { x: 20.5 + 19 * GAP_SIZE + 1.25 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 },
        ],
    },
    COMPACT1800: {
        displayName: '1800 Compact (96%)',
        description: `
        <h2>1800 Compact Keyboard (96% Layout)</h2>
        <p>A rare find, combining full-sized functionality with a more compact design. Merges number pad with 
        the main keyboard area, saving space without sacrificing keys. Slightly narrower and more portable than full-sized.</p>
    `,
        width: 19 + 18 * GAP_SIZE,
        height: 6 + 5 * GAP_SIZE,
        withLayout: (lo) => {
            const layout = lo.keys;
            return [
                [...layout[0].slice(0, 14), layout[2][14], layout[1][15], layout[2][15], layout[1][16], layout[2][16]],
                layout[1].unslice(14, 17),
                layout[2].unslice(14, 17),
                layout[3],
                layout[4],
                layout[5],
            ];
        },
        positions: [

            // row 1
            { x: 0, y: 0, width: 1, height: 1 }, // esc
            { x: 1 + GAP_SIZE, y: 0, width: 1, height: 1 }, // F1
            { x: 2 + 2 * GAP_SIZE, y: 0, width: 1, height: 1 }, // ...
            { x: 3 + 3 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 4 + 4 * GAP_SIZE, y: 0, width: 1, height: 1 }, // F4
            { x: 5 + 5 * GAP_SIZE, y: 0, width: 1, height: 1 }, // F5
            { x: 6 + 6 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 7 + 7 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 8 + 8 * GAP_SIZE, y: 0, width: 1, height: 1 }, // F8
            { x: 9 + 9 * GAP_SIZE, y: 0, width: 1, height: 1 }, // F9
            { x: 10 + 10 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 11 + 11 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 12 + 12 * GAP_SIZE, y: 0, width: 1, height: 1 }, // F12
            { x: 13 + 13 * GAP_SIZE, y: 0, width: 1, height: 1 }, // Delete
            { x: 14 + 14 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 15 + 15 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 16 + 16 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 17 + 17 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 18 + 18 * GAP_SIZE, y: 0, width: 1, height: 1 },


            // row 2
            { x: 0, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 1 + GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 2 + 2 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 3 + 3 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 4 + 4 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 5 + 5 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 6 + 6 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 7 + 7 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 8 + 8 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 9 + 9 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 10 + 10 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 11 + 11 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 12 + 12 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 13 + 13 * GAP_SIZE, y: 1 + GAP_SIZE, width: 2 + GAP_SIZE, height: 1 }, // Delete
            { x: 15 + 15 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 16 + 16 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 17 + 17 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 18 + 18 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },


            // row 3
            { x: 0, y: 2 + 2 * GAP_SIZE, width: 1.5 + GAP_SIZE, height: 1 },
            { x: 1.5 + 2 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 2.5 + 3 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 3.5 + 4 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 4.5 + 5 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 5.5 + 6 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 6.5 + 7 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 7.5 + 8 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 8.5 + 9 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 9.5 + 10 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 10.5 + 11 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 11.5 + 12 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 12.5 + 13 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 13.5 + 14 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1.5, height: 1 },
            { x: 15 + 15 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 16 + 16 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 17 + 17 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 18 + 18 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 2 + GAP_SIZE },


            // row 4
            { x: 0, y: 3 + 3 * GAP_SIZE, width: 1.75 + GAP_SIZE, height: 1 },
            { x: 1.75 + 2 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 2.75 + GAP_SIZE + 2 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 3.75 + GAP_SIZE + 3 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 4.75 + GAP_SIZE + 4 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 5.75 + GAP_SIZE + 5 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 6.75 + GAP_SIZE + 6 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 7.75 + GAP_SIZE + 7 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 8.75 + GAP_SIZE + 8 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 9.75 + GAP_SIZE + 9 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 10.75 + GAP_SIZE + 10 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 11.75 + GAP_SIZE + 11 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 12.75 + GAP_SIZE + 12 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 2.25 + GAP_SIZE, height: 1 },
            { x: 15 + 15 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 16 + 16 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 17 + 17 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },


            // row 5
            { x: 0, y: 4 + 4 * GAP_SIZE, width: 2.25 + 2 * GAP_SIZE, height: 1 },
            { x: 2.25 + GAP_SIZE + 2 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 3.25 + GAP_SIZE + 3 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 4.25 + GAP_SIZE + 4 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 5.25 + GAP_SIZE + 5 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 6.25 + GAP_SIZE + 6 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 7.25 + GAP_SIZE + 7 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 8.25 + GAP_SIZE + 8 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 9.25 + GAP_SIZE + 9 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 10.25 + GAP_SIZE + 10 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 11.25 + GAP_SIZE + 11 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 12.25 + GAP_SIZE + 12 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1.75, height: 1 }, // Shift
            { x: 14 + 14 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 15 + 15 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 16 + 16 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 17 + 17 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 18 + 18 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 2 + GAP_SIZE },


            // row 6

            // Row 6 (Space bar row)
            { x: 0, y: 5 + 5 * GAP_SIZE, width: 1.25 + GAP_SIZE, height: 1 },   // Left Ctrl (width increased by GAP_SIZE)
            { x: 1.25 + 2 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1.25 + GAP_SIZE, height: 1 },// Left Win (x position and width adjusted)
            { x: 2.5 + 4 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1.25 + 2 * GAP_SIZE, height: 1 },// Left Alt (x position and width adjusted)
            { x: 3.75 + 7 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 6 + GAP_SIZE, height: 1 },// Space (x position and width adjusted)
            { x: 9 + 9 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 },// Right Alt (x position and width adjusted)
            { x: 10 + 10 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 },// Right Win (x position and width adjusted)
            { x: 11 + 11 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 },// Menu (x position and width adjusted)
            { x: 12 + 12 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 },// Right Ctrl (x position and width adjusted)
            { x: 13 + 13 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 },  // Left Arrow
            { x: 14 + 14 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 }, // Down Arrow
            { x: 15 + 15 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 },     // Right Arrow
            { x: 16 + 16 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 },// Num 0 (width adjusted)
            { x: 17 + 17 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 },
        ],
    },
    TEN_KEY_LESS: {
        displayName: 'Ten Key Less (TKL, 80%)',
        description: `
        <h2>Tenkeyless or TKL Keyboard (80% Layout)</h2>
        <p>87 keys, balancing size and functionality. Lacks number pad for compactness and portability. 
        Offers more desk space and brings the mouse closer. Ideal for those who don't heavily use the number pad.</p>
    `,
        width: 17.25 + 16 * GAP_SIZE + GAP_SIZE + 1,
        height: 6 + 5 * GAP_SIZE,
        withLayout: (lo) => {
            const layout = lo.keys;

            return [
                layout[0].slice(0, 13),
                layout[1].slice(0, 17),
                layout[2].slice(0, 17),
                layout[3].slice(0, 13),
                layout[4].slice(0, 13),
                layout[5].slice(0, 11),
            ];
        },
        positions: [

            // row 1
            { x: 0, y: 0, width: 1, height: 1 },
            { x: 2 + 2 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 3 + 3 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 4 + 4 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 5 + 5 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 6.5 + 6 * GAP_SIZE + GAP_SIZE / 2, y: 0, width: 1, height: 1 },
            { x: 7.5 + 7 * GAP_SIZE + GAP_SIZE / 2, y: 0, width: 1, height: 1 },
            { x: 8.5 + 8 * GAP_SIZE + GAP_SIZE / 2, y: 0, width: 1, height: 1 },
            { x: 9.5 + 9 * GAP_SIZE + GAP_SIZE / 2, y: 0, width: 1, height: 1 },
            { x: 11 + 10 * GAP_SIZE + GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 12 + 11 * GAP_SIZE + GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 13 + 12 * GAP_SIZE + GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 14 + 13 * GAP_SIZE + GAP_SIZE, y: 0, width: 1, height: 1 },


            // row 2
            { x: 0, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 1 + GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 2 + 2 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 3 + 3 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 4 + 4 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 5 + 5 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 6 + 6 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 7 + 7 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 8 + 8 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 9 + 9 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 10 + 10 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 11 + 11 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 12 + 12 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 13 + 13 * GAP_SIZE, y: 1 + GAP_SIZE, width: 2 + GAP_SIZE, height: 1 },
            { x: 15.25 + 14 * GAP_SIZE + GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 16.25 + 15 * GAP_SIZE + GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 17.25 + 16 * GAP_SIZE + GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },


            // row 3
            { x: 0, y: 2 + 2 * GAP_SIZE, width: 1.5 + GAP_SIZE, height: 1 },
            { x: 1.5 + 2 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 2.5 + 3 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 3.5 + 4 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 4.5 + 5 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 5.5 + 6 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 6.5 + 7 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 7.5 + 8 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 8.5 + 9 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 9.5 + 10 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 10.5 + 11 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 11.5 + 12 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 12.5 + 13 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 13.5 + 14 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1.5, height: 1 },
            { x: 15.25 + 15 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 16.25 + 16 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 17.25 + 17 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },


            // row 4
            { x: 0, y: 3 + 3 * GAP_SIZE, width: 1.75 + GAP_SIZE, height: 1 },
            { x: 1.75 + 2 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 2.75 + GAP_SIZE + 2 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 3.75 + GAP_SIZE + 3 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 4.75 + GAP_SIZE + 4 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 5.75 + GAP_SIZE + 5 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 6.75 + GAP_SIZE + 6 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 7.75 + GAP_SIZE + 7 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 8.75 + GAP_SIZE + 8 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 9.75 + GAP_SIZE + 9 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 10.75 + GAP_SIZE + 10 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 11.75 + GAP_SIZE + 11 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 12.75 + GAP_SIZE + 12 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 2.25 + GAP_SIZE, height: 1 },


            // row 5
            { x: 0, y: 4 + 4 * GAP_SIZE, width: 2.25 + 2 * GAP_SIZE, height: 1 },
            { x: 2.25 + GAP_SIZE + 2 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 3.25 + GAP_SIZE + 3 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 4.25 + GAP_SIZE + 4 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 5.25 + GAP_SIZE + 5 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 6.25 + GAP_SIZE + 6 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 7.25 + GAP_SIZE + 7 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 8.25 + GAP_SIZE + 8 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 9.25 + GAP_SIZE + 9 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 10.25 + GAP_SIZE + 10 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 11.25 + GAP_SIZE + 11 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 12.25 + GAP_SIZE + 12 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 2.75 + GAP_SIZE, height: 1 }, // Shift
            { x: 16.25 + 16 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },


            // row 6

            // Row 6 (Space bar row)
            { x: 0, y: 5 + 5 * GAP_SIZE, width: 1.25 + GAP_SIZE, height: 1 },   // Left Ctrl (width increased by GAP_SIZE)
            { x: 1.25 + 2 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1.25 + GAP_SIZE, height: 1 },// Left Win (x position and width adjusted)
            { x: 2.5 + 4 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1.25 + 2 * GAP_SIZE, height: 1 },// Left Alt (x position and width adjusted)
            { x: 3.75 + 7 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 6.50 + GAP_SIZE, height: 1 },// Space (x position and width adjusted)
            { x: 10 + 11 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1.25, height: 1 },// Right Alt (x position and width adjusted)
            { x: 11.25 + 12 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1.25, height: 1 },// Right Win (x position and width adjusted)
            { x: 12.5 + 13 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1.25, height: 1 },// Menu (x position and width adjusted)
            { x: 13.75 + 14 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1.25, height: 1 },// Right Ctrl (x position and width adjusted)
            { x: 15.25 + 14 * GAP_SIZE + GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 },  // Left Arrow
            { x: 16.25 + 15 * GAP_SIZE + GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 }, // Down Arrow
            { x: 17.25 + 16 * GAP_SIZE + GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 },     // Right Arrow
        ],
    },
    SEVENTY_FIVE_PERCENT: {
        displayName: '75%',
        description: `
        <h2>75% Keyboard</h2>
        <p>Compact version of TKL, with arrow keys and home cluster placed adjacently. Vertically aligned home cluster 
        saves space. Less common, may require adjustment to key sizes and placement. Finding custom keycaps can be challenging.</p>
    `,
        width: 16 + 15 * GAP_SIZE,
        height: 6 + 5 * GAP_SIZE,
        withLayout: (lo) => {
            const layout = lo.keys;
            return [
                [...(layout[0].slice(0, 14)), layout[0][15], layout[2][14]],
                [...layout[1].slice(0, 14), layout[1][15]],
                [...layout[2].slice(0, 14), layout[1][16]],
                [...layout[3].slice(0, 13), layout[2][16]],
                [...layout[4].slice(0, 13), layout[2][15]],
                layout[5].slice(0, 11),
            ];
        },
        positions: [

            // row 1
            { x: 0, y: 0, width: 1, height: 1 }, // esc
            { x: 1 + GAP_SIZE, y: 0, width: 1, height: 1 }, // F1
            { x: 2 + 2 * GAP_SIZE, y: 0, width: 1, height: 1 }, // ...
            { x: 3 + 3 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 4 + 4 * GAP_SIZE, y: 0, width: 1, height: 1 }, // F4
            { x: 5 + 5 * GAP_SIZE, y: 0, width: 1, height: 1 }, // F5
            { x: 6 + 6 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 7 + 7 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 8 + 8 * GAP_SIZE, y: 0, width: 1, height: 1 }, // F8
            { x: 9 + 9 * GAP_SIZE, y: 0, width: 1, height: 1 }, // F9
            { x: 10 + 10 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 11 + 11 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 12 + 12 * GAP_SIZE, y: 0, width: 1, height: 1 }, // F12
            { x: 13 + 13 * GAP_SIZE, y: 0, width: 1, height: 1 }, // Delete
            { x: 14 + 14 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 15 + 15 * GAP_SIZE, y: 0, width: 1, height: 1 },


            // row 2
            { x: 0, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 1 + GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 2 + 2 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 3 + 3 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 4 + 4 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 5 + 5 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 6 + 6 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 7 + 7 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 8 + 8 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 9 + 9 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 10 + 10 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 11 + 11 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 12 + 12 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 13 + 13 * GAP_SIZE, y: 1 + GAP_SIZE, width: 2 + GAP_SIZE, height: 1 }, // Delete
            { x: 15 + 15 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },


            // row 3
            { x: 0, y: 2 + 2 * GAP_SIZE, width: 1.5 + GAP_SIZE, height: 1 },
            { x: 1.5 + 2 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 2.5 + 3 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 3.5 + 4 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 4.5 + 5 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 5.5 + 6 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 6.5 + 7 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 7.5 + 8 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 8.5 + 9 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 9.5 + 10 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 10.5 + 11 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 11.5 + 12 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 12.5 + 13 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 13.5 + 14 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1.5, height: 1 },
            { x: 15 + 15 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },


            // row 4
            { x: 0, y: 3 + 3 * GAP_SIZE, width: 1.75 + GAP_SIZE, height: 1 },
            { x: 1.75 + 2 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 2.75 + GAP_SIZE + 2 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 3.75 + GAP_SIZE + 3 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 4.75 + GAP_SIZE + 4 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 5.75 + GAP_SIZE + 5 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 6.75 + GAP_SIZE + 6 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 7.75 + GAP_SIZE + 7 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 8.75 + GAP_SIZE + 8 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 9.75 + GAP_SIZE + 9 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 10.75 + GAP_SIZE + 10 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 11.75 + GAP_SIZE + 11 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 12.75 + GAP_SIZE + 12 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 2.25 + GAP_SIZE, height: 1 },
            { x: 15 + 15 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },

            // row 5
            { x: 0, y: 4 + 4 * GAP_SIZE, width: 2.25 + 2 * GAP_SIZE, height: 1 },
            { x: 2.25 + GAP_SIZE + 2 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 3.25 + GAP_SIZE + 3 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 4.25 + GAP_SIZE + 4 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 5.25 + GAP_SIZE + 5 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 6.25 + GAP_SIZE + 6 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 7.25 + GAP_SIZE + 7 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 8.25 + GAP_SIZE + 8 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 9.25 + GAP_SIZE + 9 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 10.25 + GAP_SIZE + 10 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 11.25 + GAP_SIZE + 11 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 12.25 + GAP_SIZE + 12 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1.75, height: 1 }, // Shift
            { x: 14 + 14 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
            { x: 15 + 15 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },


            // row 6

            // Row 6 (Space bar row)
            { x: 0, y: 5 + 5 * GAP_SIZE, width: 1.25 + GAP_SIZE, height: 1 },   // Left Ctrl (width increased by GAP_SIZE)
            { x: 1.25 + 2 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1.25 + GAP_SIZE, height: 1 },// Left Win (x position and width adjusted)
            { x: 2.5 + 4 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1.25 + 2 * GAP_SIZE, height: 1 },// Left Alt (x position and width adjusted)
            { x: 3.75 + 7 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 6, height: 1 },// Space (x position and width adjusted)
            { x: 9 + 9 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 },// Right Alt (x position and width adjusted)
            { x: 10 + 10 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 },// Right Win (x position and width adjusted)
            { x: 11 + 11 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 },// Menu (x position and width adjusted)
            { x: 12 + 12 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 },// Right Ctrl (x position and width adjusted)
            { x: 13 + 13 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 },  // Left Arrow
            { x: 14 + 14 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 }, // Down Arrow
            { x: 15 + 15 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 },     // Right Arrow
            { x: 16 + 16 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 },// Num 0 (width adjusted)
            { x: 17 + 17 * GAP_SIZE, y: 5 + 5 * GAP_SIZE, width: 1, height: 1 },
        ],
    },
    SIXTY_FIVE_PERCENT: {
        displayName: '65%',
        description: `
        <h2>65% Keyboard</h2>
        <p>Ultra-compact, removing function row and sometimes home cluster. Smallest size with dedicated arrow keys. 
        Highly portable and light. Great for gaming due to arrow key inclusion. Requires adjustment to missing keys.</p>
    `,
        width: 16 + 15 * GAP_SIZE,
        height: 5 + 4 * GAP_SIZE,
        withLayout: (lo) => {
            const layout = lo.keys;
            return [
                [...layout[1].slice(0, 14), layout[2][14]],
                [...layout[2].slice(0, 14), layout[1][15]],
                [...layout[3].slice(0, 13), layout[1][16]],
                [...layout[4].slice(0, 13), layout[2][16]],
                layout[5].slice(0, 11),
            ];
        },
        positions: [

            // row 2
            { x: 0, y: 0, width: 1, height: 1 },
            { x: 1 + GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 2 + 2 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 3 + 3 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 4 + 4 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 5 + 5 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 6 + 6 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 7 + 7 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 8 + 8 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 9 + 9 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 10 + 10 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 11 + 11 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 12 + 12 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 13 + 13 * GAP_SIZE, y: 0, width: 2 + GAP_SIZE, height: 1 }, // Delete
            { x: 15 + 15 * GAP_SIZE, y: 0, width: 1, height: 1 },


            // row 3
            { x: 0, y: 1 + GAP_SIZE, width: 1.5 + GAP_SIZE, height: 1 },
            { x: 1.5 + 2 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 2.5 + 3 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 3.5 + 4 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 4.5 + 5 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 5.5 + 6 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 6.5 + 7 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 7.5 + 8 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 8.5 + 9 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 9.5 + 10 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 10.5 + 11 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 11.5 + 12 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 12.5 + 13 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 13.5 + 14 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1.5, height: 1 },
            { x: 15 + 15 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },


            // row 4
            { x: 0, y: 2 + 2 * GAP_SIZE, width: 1.75 + GAP_SIZE, height: 1 },
            { x: 1.75 + 2 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 2.75 + GAP_SIZE + 2 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 3.75 + GAP_SIZE + 3 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 4.75 + GAP_SIZE + 4 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 5.75 + GAP_SIZE + 5 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 6.75 + GAP_SIZE + 6 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 7.75 + GAP_SIZE + 7 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 8.75 + GAP_SIZE + 8 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 9.75 + GAP_SIZE + 9 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 10.75 + GAP_SIZE + 10 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 11.75 + GAP_SIZE + 11 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 12.75 + GAP_SIZE + 12 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 2.25 + GAP_SIZE, height: 1 },
            { x: 15 + 15 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },

            // row 5
            { x: 0, y: 3 + 3 * GAP_SIZE, width: 2.25 + 2 * GAP_SIZE, height: 1 },
            { x: 2.25 + GAP_SIZE + 2 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 3.25 + GAP_SIZE + 3 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 4.25 + GAP_SIZE + 4 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 5.25 + GAP_SIZE + 5 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 6.25 + GAP_SIZE + 6 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 7.25 + GAP_SIZE + 7 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 8.25 + GAP_SIZE + 8 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 9.25 + GAP_SIZE + 9 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 10.25 + GAP_SIZE + 10 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 11.25 + GAP_SIZE + 11 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 12.25 + GAP_SIZE + 12 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1.75, height: 1 }, // Shift
            { x: 14 + 14 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 15 + 15 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },


            // row 6

            { x: 0, y: 4 + 4 * GAP_SIZE, width: 1.25 + GAP_SIZE, height: 1 },   // Left Ctrl (width increased by GAP_SIZE)
            { x: 1.25 + 2 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1.25 + GAP_SIZE, height: 1 },// Left Win (x position and width adjusted)
            { x: 2.5 + 4 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1.25 + 2 * GAP_SIZE, height: 1 },// Left Alt (x position and width adjusted)
            { x: 3.75 + 7 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 5.5 - GAP_SIZE, height: 1 },// Space (x position and width adjusted)
            { x: 9 + 9 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },// Right Alt (x position and width adjusted)
            { x: 10 + 10 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },// Right Win (x position and width adjusted)
            { x: 11 + 11 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },// Menu (x position and width adjusted)
            { x: 12 + 12 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },// Right Ctrl (x position and width adjusted)
            { x: 13 + 13 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },  // Left Arrow
            { x: 14 + 14 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 }, // Down Arrow
            { x: 15 + 15 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },     // Right Arrow
            { x: 16 + 16 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },// Num 0 (width adjusted)
            { x: 17 + 17 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
        ],

    },
    SIXTY_PERCENT: {
        displayName: '60%',
        description: `
        <h2>60% Keyboard</h2>
        <p>Popular in gaming and enthusiast communities. Compact and symmetrical, common for custom builds. 
        Cheaper for custom builds due to fewer required components. Pre-built options are also affordable.</p>
    `,

        width: 15 + 14 * GAP_SIZE,
        height: 5 + 4 * GAP_SIZE,
        withLayout: (lo) => {
            const layout = lo.keys;
            console.log(layout);
            return [
                layout[1].slice(0, 14),
                layout[2].slice(0, 14),
                layout[3].slice(0, 13),
                layout[4].slice(0, 12),
                layout[5].slice(0, 8),
            ];
        },

        positions: [

            // row 2
            { x: 0, y: 0, width: 1, height: 1 },
            { x: 1 + GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 2 + 2 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 3 + 3 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 4 + 4 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 5 + 5 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 6 + 6 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 7 + 7 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 8 + 8 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 9 + 9 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 10 + 10 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 11 + 11 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 12 + 12 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 13 + 13 * GAP_SIZE, y: 0, width: 2 + GAP_SIZE, height: 1 }, // Delete


            // row 3
            { x: 0, y: 1 + GAP_SIZE, width: 1.5 + GAP_SIZE, height: 1 },
            { x: 1.5 + 2 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 2.5 + 3 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 3.5 + 4 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 4.5 + 5 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 5.5 + 6 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 6.5 + 7 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 7.5 + 8 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 8.5 + 9 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 9.5 + 10 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 10.5 + 11 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 11.5 + 12 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 12.5 + 13 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 13.5 + 14 * GAP_SIZE, y: 1 + GAP_SIZE, width: 1.5, height: 1 },


            // row 4
            { x: 0, y: 2 + 2 * GAP_SIZE, width: 1.75 + GAP_SIZE, height: 1 },
            { x: 1.75 + 2 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 2.75 + GAP_SIZE + 2 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 3.75 + GAP_SIZE + 3 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 4.75 + GAP_SIZE + 4 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 5.75 + GAP_SIZE + 5 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 6.75 + GAP_SIZE + 6 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 7.75 + GAP_SIZE + 7 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 8.75 + GAP_SIZE + 8 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 9.75 + GAP_SIZE + 9 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 10.75 + GAP_SIZE + 10 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 11.75 + GAP_SIZE + 11 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 12.75 + GAP_SIZE + 12 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 2.25 + GAP_SIZE, height: 1 },

            // row 5
            { x: 0, y: 3 + 3 * GAP_SIZE, width: 2.25 + 2 * GAP_SIZE, height: 1 },
            { x: 2.25 + GAP_SIZE + 2 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 3.25 + GAP_SIZE + 3 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 4.25 + GAP_SIZE + 4 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 5.25 + GAP_SIZE + 5 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 6.25 + GAP_SIZE + 6 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 7.25 + GAP_SIZE + 7 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 8.25 + GAP_SIZE + 8 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 9.25 + GAP_SIZE + 9 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 10.25 + GAP_SIZE + 10 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 11.25 + GAP_SIZE + 11 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 12.25 + GAP_SIZE + 12 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 2.75 + GAP_SIZE, height: 1 }, // Shift


            // row 6
            { x: 0, y: 4 + 4 * GAP_SIZE, width: 1.25 + GAP_SIZE, height: 1 },   // Left Ctrl (width increased by GAP_SIZE)
            { x: 1.25 + 2 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1.25 + GAP_SIZE, height: 1 },// Left Win (x position and width adjusted)
            { x: 2.5 + 4 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1.25 + 2 * GAP_SIZE, height: 1 },// Left Alt (x position and width adjusted)
            { x: 3.75 + 7 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 6.50 + GAP_SIZE, height: 1 },// Space (x position and width adjusted)
            { x: 10 + 11 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1.25, height: 1 },// Right Alt (x position and width adjusted)
            { x: 11.25 + 12 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1.25, height: 1 },// Right Win (x position and width adjusted)
            { x: 12.5 + 13 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1.25, height: 1 },// Menu (x position and width adjusted)
            { x: 13.75 + 14 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1.25, height: 1 },// Right Ctrl (x position and width adjusted)
            { x: 15.25 + 14 * GAP_SIZE + GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },  // Left Arrow
            { x: 16.25 + 15 * GAP_SIZE + GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 }, // Down Arrow
            { x: 17.25 + 16 * GAP_SIZE + GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },     // Right Arrow
            { x: 18.5 + 17 * GAP_SIZE + 1.25 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 2 + GAP_SIZE, height: 1 },// Num 0 (width adjusted)
            { x: 20.5 + 19 * GAP_SIZE + 1.25 * GAP_SIZE, y: 4 + 4 * GAP_SIZE, width: 1, height: 1 },
        ],

    },
    FORTY_PERCENT: {
        displayName: '40%',
        description: `
        <h2>40% Keyboard</h2>
        <p>Most minimal layout, removing numbers and non-letter keys. Requires frequent layer switching for numbers 
        and symbols. Long adjustment period needed, but offers maximum space-saving and portability.</p>
    `,
        width: 14 + 12 * GAP_SIZE,
        height: 4 + 3 * GAP_SIZE,
        withLayout: (lo) => {
            const layout = lo.keys;
            return [
                [layout[0][0], ...layout[2].slice(1, 11), layout[1][13], layout[2][14]],
                [layout[2][0], ...layout[3].slice(1, 10), layout[3][12], layout[1][16]],
                [layout[4][0], ...layout[4].slice(1, 11), layout[4][12], layout[2][16]],
                [...layout[5].slice(0, 4), layout[4][11], layout[5][5], layout[5][7], ...layout[5].slice(8, 11)],
            ];
        },
        positions: [


            // row 3
            { x: 0, y: 0, width: 1.5, height: 1 },
            { x: 1.50 + GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 2.5 + 2 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 3.5 + 3 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 4.5 + 4 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 5.5 + 5 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 6.5 + 6 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 7.5 + 7 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 8.5 + 8 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 9.5 + 9 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 10.5 + 10 * GAP_SIZE, y: 0, width: 1, height: 1 },
            { x: 11.5 + 11 * GAP_SIZE, y: 0, width: 1.5, height: 1 },
            { x: 13 + 12 * GAP_SIZE, y: 0, width: 1, height: 1 },

            // row 4
            { x: 0, y: 1 + GAP_SIZE, width: 1.75, height: 1 },
            { x: 2 + GAP_SIZE - 0.25, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 3 + 2 * GAP_SIZE - 0.25, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 4 + 3 * GAP_SIZE - 0.25, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 5 + 4 * GAP_SIZE - 0.25, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 6 + 5 * GAP_SIZE - 0.25, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 7 + 6 * GAP_SIZE - 0.25, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 8 + 7 * GAP_SIZE - 0.25, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 9 + 8 * GAP_SIZE - 0.25, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 10 + 9 * GAP_SIZE - 0.25, y: 1 + GAP_SIZE, width: 1, height: 1 },
            { x: 11 + 10 * GAP_SIZE - 0.25, y: 1 + GAP_SIZE, width: 2 + 3 * GAP_SIZE, height: 1 },
            { x: 13 + 14 * GAP_SIZE - 0.25, y: 1 + GAP_SIZE, width: 1, height: 1 }, // Shift


            // row 5

            { x: 0, y: 2 + 2 * GAP_SIZE, width: 2, height: 1 },
            { x: 2 + GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 3 + 2 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 4 + 3 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 5 + 4 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 6 + 5 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 7 + 6 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 8 + 7 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 9 + 8 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 10 + 9 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 11 + 10 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 12 + 11 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },
            { x: 13 + 12 * GAP_SIZE, y: 2 + 2 * GAP_SIZE, width: 1, height: 1 },


            // row 6
            { x: 0, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 1 + GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 2 + 2 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 3 + 3 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 4, height: 1 }, // space
            { x: 7 + 4 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 2.25 + GAP_SIZE, height: 1 }, // Rshift
            { x: 9 + 8 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 10 + 9 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 11 + 10 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 12 + 11 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },
            { x: 13 + 12 * GAP_SIZE, y: 3 + 3 * GAP_SIZE, width: 1, height: 1 },

        ],

    },
};