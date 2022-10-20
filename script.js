document.addEventListener('DOMContentLoaded', function () {
    var buscar = document.getElementById('buscar');
    var config = document.getElementById('config');
    var abuscar = document.getElementById('abuscar');
    // onClick's logic below:
    buscar.addEventListener('click', function () {
        window.open("https://www.google.com/search?q=" + abuscar.value)
    });

    config.addEventListener('click', function () {
        window.open("chrome://extensions", "_self")
    });
});

// setTimeout(() => {
//     location.reload()
// }, 1000);