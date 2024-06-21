function displayUserName() {
    const userName = prompt("Enter your name:");
    const nameContainer = document.getElementById('name-container');

    if (userName) {
        nameContainer.textContent = `Welcome, ${userName}!`;
    } else {
        nameContainer.textContent = `Name not entered.`;
    }
}

window.onload = displayUserName;
