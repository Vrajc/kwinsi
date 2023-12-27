



function displayUserName() {
    var userName = localStorage.getItem('userName');

    if (userName) {
        document.getElementById('userNameDisplay').innerText = "YAYYYEEEEE!!!!!!!!!!! Let's go , " + userName + "!";
    } else {
        document.getElementById('userNameDisplay').innerText = "YAYYYEEEEE!!!!!!!!!!! ";
    }
}