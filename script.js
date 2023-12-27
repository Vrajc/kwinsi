function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}


function askName() {
    var userName;
    while (!userName || /\s/.test(userName)) {
        userName = prompt("What is your name? Please enter a name without spaces.");
    }

    localStorage.setItem('userName', userName);
}