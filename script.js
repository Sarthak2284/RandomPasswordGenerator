function generatePassword() {
    let length = document.getElementById("lengthPass").value;
    if (length < 4 || length > 26 || isNaN(length)) {
        document.getElementById("password").textContent = "Please enter a valid length";
        return;
    }
    let password = generateRandomPassword(length);
    document.getElementById("password").textContent = password;
}

function generateRandomPassword(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

function copyPassword() {
    const password = document.getElementById("password").textContent;
    if(password === "Password Will be Generated Here" || password === "Please enter a valid length"){
        alert("Please generate a password first.");
        return;
    }
    navigator.clipboard.writeText(password).then(() => {
        
        alert("Password copied!");
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}