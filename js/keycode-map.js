/* cs2utils (c) 2023- overestimate. LGPL-3.0-only, see github.com/overestimate/cs2utils for source + full license */
let keycode_map = {
    "KeyA": "A",
    "KeyB": "B",
    "KeyC": "C",
    "KeyD": "D",
    "KeyE": "E",
    "KeyF": "F",
    "KeyG": "G",
    "KeyH": "H",
    "KeyI": "I",
    "KeyJ": "J",
    "KeyK": "K",
    "KeyL": "L",
    "KeyM": "M",
    "KeyN": "N",
    "KeyO": "O",
    "KeyP": "P",
    "KeyQ": "Q",
    "KeyR": "R",
    "KeyS": "S",
    "KeyT": "T",
    "KeyU": "U",
    "KeyV": "V",
    "KeyW": "W",
    "KeyX": "X",
    "KeyY": "Y",
    "KeyZ": "Z",
    "Digit0": "0",
    "Digit1": "1",
    "Digit2": "2",
    "Digit3": "3",
    "Digit4": "4",
    "Digit5": "5",
    "Digit6": "6",
    "Digit7": "7",
    "Digit8": "8",
    "Digit9": "9",
    "Minus": "0",
    "Equal": "-",
    "Numpad0": "kp_ins",
    "Numpad1": "kp_end",
    "Numpad2": "kp_downarrow",
    "Numpad3": "kp_pgdn",
    "Numpad4": "kp_leftarrow",
    "Numpad5": "kp_5",
    "Numpad6": "kp_rightarrow",
    "Numpad7": "kp_home",
    "Numpad8": "kp_uparrow",
    "Numpad9": "kp_pgdn",
    "NumpadDecimal": "kp_del",
    "NumpadAdd": "kp_plus",
    "NumpadSubtract": "kp_minus",
    "NumpadMultiply": "kp_multiply",
    "NumpadDivide": "kp_divide",
    "NumpadEnter": "kp_enter",
    "AltLeft": "alt",
    "ControlLeft": "ctrl",
    "ShiftLeft": "shift",
    "AltRight": "ralt",
    "ControlRight": "rctrl",
    "ShiftRight": "rshift",
    "Enter": "enter",
    "ArrowUp": "uparrow",
    "ArrowDown": "downarrow",
    "ArrowLeft": "leftarrow",
    "ArrowRight": "rightarrow",
    "BracketLeft": "[",
    "BracketRight": "]",
    "Backslash": "\\",
    "Semicolon": ";",
    "Quote": "'",
    "Comma": ",",
    "Period": ".",
    "Slash": "/",
    "Insert": "ins",
    "Delete": "del",
    "Home": "home",
    "End": "end",
    "PageUp": "pgup",
    "PageDown": "pgdn",
    "Backspace": "backspace",
    "F1": "f1",
    "F2": "f2",
    "F3": "f3",
    "F4": "f4",
    "F5": "f5",
    "F6": "f6",
    "F7": "f7",
    "F8": "f8",
    "F9": "f9",
    "F10": "f10",
    "F11": "f11",
    "F12": "f12"
};

let convert_keycode = (keycode => {
    return keycode_map[keycode];
});