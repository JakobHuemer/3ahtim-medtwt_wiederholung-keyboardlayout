// reference of sizes: https://switchandclick.com/keyboard-sizes/

// TODO: implement a way to store the structure of the layout in text format so js can recreate it

const Keyboards = {
    FULL_SIZED: {
        displayName: 'Full-Sized (100%)',
        description: `
            <h2>Full-Sized Keyboard (100% Layout)</h2>
            <p>Perfect for Lots of Number Entry</p>
            <p>Full-sized keyboards are the go-to for people who need to do lots of data entry and require frequent use of the number pad. Full-sized keyboards are standard in offices and is what most people think of when they imagine a keyboard. The full-sized keyboards come standard with a number pad, home cluster, function keys, and arrow keys. The number pad is typically located on the right, but some keyboards come with it on the left.</p>
            <p>A full-sized keyboard will usually have 104 keys.</p>
        `,
        keyNumber: 104,
        withLayout: (layout) = {}
    },
    COMPACT1800: {
        displayName: '1800 Compact (96%)',
        description: `
            <h2>1800 Compact Keyboard (96% Layout)</h2>
            <p>1800 Compact: The Lost Keyboard Size</p>
            <p>Finding an 1800 compact keyboard is similar to finding a unicorn, there isn’t that many being sold. 1800-Compact keyboards are usually lost between the cracks, they are a great middle ground between tenkeyless and full-sized keyboards. We put together a post of our favorite 1800 compact keyboards if you want to do further research.</p>
            <p>1800 compact keyboard layouts are similar to a full-sized layout except they smush together the number pad and the rest of the keyboard to save space. These are keyboards are slightly more narrow, so they are slightly smaller and more compact. This makes the keyboard easier to pack up and take with you. Additionally, the compact full-sized layouts doesn’t drop any of the keys, making it extremely easy and comfortable to type on.</p>
        `,
    },
    TEN_KEY_LESS: {
        displayName: 'Ten Key Less (TKL, 80%)',
        description: `
            <h2>Tenkeyless or TKL Keyboard (80% Layout)</h2>
            <p>TKL: The Perfect Keyboard Size for Most People</p>
            <p>Tenkeyless keyboards typically have 87 keys, the perfect layout to balance size and functionality. Unlike full-sized keyboards, they do not have a number pad which makes the keyboard more compact and easier to take on the go. Most people don’t use the number pad heavily, so they are able to get rid of the extra baggage without it impacting their typing too much. If you want to check out some more TKL keyboards, follow the link to this post.</p>
            <p>Compact and Comfortable</p>
            <p>A more compact keyboard also allows for more desk space, so you’ll be able to more comfortably write notes into a notepad on the side of your keyboard without feeling to constrained by a lack of space. Plus, your mouse will be much closer to your hand when typing, so you’ll have to travel much less to reach for the mouse.</p>
        `,
    },
    SEVENTY_FIVE_PERCENT: {
        displayName: '75%',
        description: `
            <h2>75% Keyboard</h2>
            <p>75% Keyboards: Uncommon but Awesome</p>
            <p>75% keyboards have an interesting design. They are a slightly more compact version of a tenkeyless board, they place the arrow keys and home cluster right next to each other and align the home cluster vertically to save space. This allows for everything to be packed in tight and snug. There are a lot less 75% keyboards on the market, so your options will be limited. Luckily we put together our favorite 75% keyboards so you can find them easily.</p>
            <p>Very Small Adjustment Period</p>
            <p>It may take some time to get used to the some of the strange key sizes and placement. For example, the right shift key is typically much smaller than usual and building the muscle memory of where the new home cluster is located will take some time. Fortunately, these keys aren’t used too often anyways, so it should not impact typing too much. If you’re a fan of buying customized keycaps, you may need to do a little extra searching to find a set that works with the 75% layout, due to some of the strange key sizes.</p>
        `,
    },
    SIXTY_FIVE_PERCENT: {
        displayName: '65%',
        description: `
            <h2>65% Keyboard</h2>
            <p>Who Needs The Function Row Anyways?</p>
            <p>65% keyboards take compactness to a whole new level. Instead of just getting rid of the number pad, these keyboards also drop the function row and the home cluster (on some layouts)! Who needs those extra keys anyways? This is the smallest keyboard size you can get that will still have arrow keys. Like 75% keyboards, 65% are less common but have a small fan-base in the keyboard community. You can find our favorite 65% keyboards through this link, you don’t want to miss this one.</p>
            <p>Smallest Size with Dedicated Arrow Keys: Great for Gaming</p>
            <p>These are extremely portable, light, and still incredibly useful. For some people, not having the home cluster or function row can feel like a major handicap, but others may be unfazed without them. It mainly comes down to personal preference. 65% keyboards are still a great size to use for gaming because they have the arrow keys and can be useful for moving around a page whilst typing.</p>
        `,
    },
    SIXTY_PERCENT: {
        displayName: '60%',
        description: `
            <h2>60% Keyboard</h2>
            <p>60% Keyboard: Very Popular and Easy to Find</p>
            <p>60% keyboards are popular in the gaming and mechanical keyboard enthusiast keyboard community. Not quite a common as TKL or fullsized, but there are a lot of different 60% keyboards available online. Due to their small, compact, and symmetrical shape, they are the most common size for custom keyboard builds.</p>
            <p>Cheaper to Buy & Build Yourself</p>
            <p>Because of their smaller size, it can be relatively cheap to buy switches and keycaps for custom builds, plus there are a variety of different PCB layouts and case designs specifically for 60% keyboards. Pre-build keyboards are also quite cheap as well, you can find pretty good deals if you’re willing to drop to the 60% keyboard size.</p>
        `,
    },
    FORTY_PERCENT: {
        displayName: '40%',
        description: `
            <h2>40% Keyboard</h2>
            <p>Smallest Keyboard you Can Still Type On</p>
            <p>40% keyboards are the most barebones keyboard available that you can still type on. On top of everything removed for 60% keyboards (no number pad, function row, arrow keys, home cluster), 40% keyboards also get rid of all the numbers on the top row. That’s right, there are no numbers on this keyboard layout. In addition, you also get rid of all the non-letter keys such as the semi-colon, quotes, etc.</p>
            <p>Long Adjustment Period</p>
            <p>If you want to get proficient typing with a 40% keyboard, you’ll have to get used to frequently changing layers to be able to enter numbers and symbols. This will require lots of time to get used to, but by doing so, you’ll save lots of space on your desk and have a light and compact keyboard to take on the go.</p>
        `,
    },
};