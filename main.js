function filterplanets(category , button) {
    var planets = document.querySelectorAll('.s-planet');
    var buttons = document.querySelectorAll('.filter-btn');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    button.classList.add('active');

    for (var i = 0; i < planets.length; i++) {
        var planet = planets[i];
        if(category == 'all' || planet.classList.contains(category)) {
            planet.style.display = 'block';
        } 
        else {
            planet.style.display = 'none';
        }
    }
    
}

var PRIMARYOVERVIEW = document.getElementById('PRIMARYOVERVIEW');
var SYSTEMTELEMETRY = document.getElementById('SYSTEMTELEMETRY');
var PRIMARYOVERVIEWbtn = document.getElementById('PRIMARYOVERVIEW-btn');
var SYSTEMTELEMETRYbtn = document.getElementById('SYSTEMTELEMETRY-btn');

PRIMARYOVERVIEWbtn.addEventListener('click', function () {
    PRIMARYOVERVIEW.style.display = 'block';
    SYSTEMTELEMETRY.style.display = 'none';
    PRIMARYOVERVIEWbtn.classList.add('active');
    SYSTEMTELEMETRYbtn.classList.remove('active');
});

SYSTEMTELEMETRYbtn.addEventListener('click', function () {
    PRIMARYOVERVIEW.style.setProperty('display', 'none', 'important');
    SYSTEMTELEMETRY.style.display = 'block';
    PRIMARYOVERVIEWbtn.classList.remove('active');
    SYSTEMTELEMETRYbtn.classList.add('active');
});