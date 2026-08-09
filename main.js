function filterplanets(category, button) {
    var planets = document.querySelectorAll('.s-planet');
    var buttons = document.querySelectorAll('.filter-btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    if (button) {
        button.classList.add('active');
    }
    for (var i = 0; i < planets.length; i++) {
        var planet = planets[i];
        if (category == 'all' || planet.classList.contains(category)) {
            planet.style.setProperty('display', 'block', 'important');
        } else {
            planet.style.display = 'none';
        }
    }
}


var PRIMARYOVERVIEW = document.getElementById('PRIMARYOVERVIEW');
var SYSTEMTELEMETRY = document.getElementById('SYSTEMTELEMETRY');
var PRIMARYOVERVIEWbtn = document.getElementById('PRIMARYOVERVIEW-btn');
var SYSTEMTELEMETRYbtn = document.getElementById('SYSTEMTELEMETRY-btn');

if (
    PRIMARYOVERVIEW &&
    SYSTEMTELEMETRY &&
    PRIMARYOVERVIEWbtn &&
    SYSTEMTELEMETRYbtn
) {

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

}

function showMission(number) {
    var missions = document.querySelectorAll('.mission-details');
    for (var i = 0; i < missions.length; i++) {
        missions[i].style.setProperty('display', 'none', 'important');
    }
    var mission = document.getElementById('mission-details-' + number);
    if (mission) {
        mission.style.setProperty('display', 'flex', 'important');
    }
    document.body.style.overflow = 'hidden';

    var missionDetails = document.querySelectorAll('.mission-details');
    for (var i = 0; i < missionDetails.length; i++) {
    missionDetails[i].addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
        document.body.style.overflow = 'auto';
    });
}


}

function filtergallery(category, button) {
    var gallery = document.querySelectorAll('.image-g');
    var buttons = document.querySelectorAll('.filter-btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    if (button) {
        button.classList.add('active');
    }
    for (var i = 0; i < gallery.length; i++) {
        var planet = gallery[i];
        if (category == 'all' || planet.classList.contains(category)) {
            planet.style.display = 'block';
        } else {
            planet.style.display = 'none';
        }
    }
}