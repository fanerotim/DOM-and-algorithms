let pressedKey = null;

document.onkeydown = function(e) {
    // store first of the two possible keys in a variable if the condition is met
    if (!pressedKey) {
        e.code === 'KeyI' || e.code === 'KeyO' ? pressedKey = e.code : '';
    }

    // second condition that needs to be satisfied in order to show the hidden text
    if (pressedKey && e.code !== pressedKey && (e.code === 'KeyI' || e.code === 'KeyO')) {
        hiddenText.style.opacity = 1;
    } 
}

document.onkeyup = function(e) {
    // nulify pressedKey only if user releases on of our keys, so we can allow them to hit a wrong button while holding a correct one. when they press the second correct button, then we show the hidden text
    if (e.code === 'KeyI' || e.code === 'KeyO') {
        pressedKey = null;
    }
}