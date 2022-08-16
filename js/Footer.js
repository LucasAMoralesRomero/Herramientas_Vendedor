function footer() {
let fecha = new Date();
let year = fecha.getFullYear();
let span = document.getElementById("year");
span.innerHTML = year;
}
