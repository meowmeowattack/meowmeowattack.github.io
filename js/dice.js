function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function showHidden(id, text, mode) {
    var rand_base = 2;
    var rand = getRandomInt(rand_base).toString();
    if (mode == 1) {
        var content = CryptoJS.AES.encrypt(text, rand).toString();
    } else {
        var decrypted = CryptoJS.AES.decrypt(text, rand);
        var content = decrypted.toString(CryptoJS.enc.Utf8);
    }
    if (content !== "") {
        const n = document.createTextNode(content);
        document.getElementById(id).appendChild(n);
    } else {
        const c =  `Hidden content: refresh for a ${1/rand_base * 100}% chance to show`;
        const n = document.createTextNode(c);
        document.getElementById(id).appendChild(n);
    }
}