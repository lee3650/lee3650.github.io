async function sha256 (message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)
    const hashArray = Array.from(new Uint8Array (hashBuffer));
    // convert bytes to hex string
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
    return hashHex;
}

const key = document.getElementById("key")
const website = document.getElementById("website") 
const output = document.getElementById("output")
const copybtn = document.getElementById("copy")
const charcount = document.getElementById("charCount") 
const charlabel = document.getElementById("charLabel")

let lastPass = ''

charcount.oninput = function() {
    charlabel.textContent = 'Password Length: '+ charcount.value 
    const len = charcount.value
    output.value = lastPass.slice(0, len)
}

function hexToBase64(hexstring) {
    return btoa(hexstring.match(/\w{2}/g).map(function(a) {
        return String.fromCharCode (parseInt(a, 16));
    }).join(""));
}

function togglekeyVis()
{
    if (key.type == 'password')
    {
        key.type = 'text'
    }
    else
    {
        key.type = 'password'
    }
}

function togglePasswordVis() {
    if (output.type == 'password')
    {
        output.type = 'text'
    }
    else
    {
        output.type = 'password'
    }
}

async function compute()
{
    const keyval = key.value;
    const webval = website.value;

    const gen = keyval.trim() + webval.trim().toLowerCase() 
    let result = await sha256(gen)
    lastPass = hexToBase64(result).replaceAll('/', '#') 
    const len = charcount.value
    output.value = lastPass.slice(0, len)
    copy()
}

function copy() {
    navigator.clipboard.writeText(output.value) 
    copybtn.textContent = 'Copied ✅'
    setTimeout(() => {copybtn.textContent = 'Copy 📋'}, 1000)
}
