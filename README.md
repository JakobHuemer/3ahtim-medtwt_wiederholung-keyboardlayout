# MEDTWT Wiederholung Keyboard layout creator (SPA)

## Description

### Start screen
The start screen consists of multiple keyboard sizes

- Full Sized
- Compact 1800
- Ten key less
- 75%
- 65%
- 60%
- 40%

The next selection is the starting arrangement/layout of the keys

- QWERTY
- Dvorak
- Colemak
- Workman

Then you can select a Language. The current Languages are:

 - US
 - German

Because of an Upgrade to the keys (the can now have 4 Symbols per key) more languages will finder
their way into this list.

#### Use custom Layout

The "fake" exported layout files may be able to be accepted as a start layout to save someone time

### Detailscreen, Configuration of the keyboard layout

The configuration screen has the keyboard in the middle and a side pane 
with other keys which are not utilized in the keyboard.

The user can drag and drop keys from the side pane to the keyboard and 
vice verca.

#### Custom Laynguage

Languages can now contain up to 4 symbols per key, that should cover most languages.

#### Homing key

Maybe i will implement a switch for each key to make it a homing key.

#### Themes

Themes to change the keyboards look are available

### Endscreen, Fake export of keyboard layout to a txt file

If the user is satisfied with the layout, he can export the layout to a
file and download it.



# Keyboard generation

First, the keyboard will be generated with all slots filled with a key. 

The drag and drop only happens at the html and will not be synced on the js.

When exporting, the html will the scanned using the IDs of the key elements and empty
slots will have a placeholder.