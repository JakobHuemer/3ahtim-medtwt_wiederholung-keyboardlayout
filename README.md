# MEDTWT Wiederholung Keyboard layout creator (SPA)

## Description

### Start screen
The start screen consists of multiple keyboard sizes

- Full Sized
- Tenkeyless
- 75%
- 65%
- 60%
- 40%

The next selection is the starting arrangement/layout of the keys

- QWERTY
- Dvorak
- Colemak
- Workman

All layouts are based on the ANSI US layout.

### Detailscreen, Configuration of the keyboard layout

The configuration screen has the keyboard in the middle and a side pane 
with other keys which are not utilized in the keyboard.

The user can drag and drop keys from the side pane to the keyboard and 
vice verca.


### Endscreen, Fake export of keyboard layout to a txt file

If the user is satisfied with the layout, he can export the layout to a
file and download it.



# Keyboard generation

First, the keyboard will be generated with all slots filled with a key. 

The drag and drop only happens at the html and will not be synced on the js.

When exporting, the html will the scanned using the IDs of the key elements and empty
slots will have a placeholder.