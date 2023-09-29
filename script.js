let snacks = document.getElementById("snacks");
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        snacks.innerHTML = xhttp.responseText;
    }
}

xhttp.open('GET', 'marcas/bk/index.html', true);
xhttp.send();