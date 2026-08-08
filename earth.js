
var PRIMARYOVERVIEW = document.getElementById('PRIMARYOVERVIEW');
var SYSTEMTELEMETRY = document.getElementById('SYSTEMTELEMETRY');
var SATELLITEGALLERY = document.getElementById('SATELLITEGALLERY');
var PRIMARYOVERVIEWbtn = document.getElementById('PRIMARYOVERVIEW-btn');
var SYSTEMTELEMETRYbtn = document.getElementById('SYSTEMTELEMETRY-btn');
var SATELLITEGALLERYbtn = document.getElementById('SATELLITEGALLERY-btn');

PRIMARYOVERVIEWbtn.addEventListener('click', function () {
    PRIMARYOVERVIEWbtn.classList.add('active');
    SYSTEMTELEMETRYbtn.classList.remove('active');
    SATELLITEGALLERYbtn.classList.remove('active');

    PRIMARYOVERVIEW.style.display = 'block';
    SYSTEMTELEMETRY.style.display = 'none';
    SATELLITEGALLERY.style.setProperty('display', 'none', 'important');

});
SYSTEMTELEMETRYbtn.addEventListener('click', function () {
    PRIMARYOVERVIEWbtn.classList.remove('active');
    SYSTEMTELEMETRYbtn.classList.add('active');
    SATELLITEGALLERYbtn.classList.remove('active');

    PRIMARYOVERVIEW.style.setProperty('display', 'none', 'important');
    SYSTEMTELEMETRY.style.display = 'block';
    SATELLITEGALLERY.style.setProperty('display', 'none', 'important');
});
SATELLITEGALLERYbtn.addEventListener('click', function () {
    PRIMARYOVERVIEWbtn.classList.remove('active');
    SYSTEMTELEMETRYbtn.classList.remove('active');
    SATELLITEGALLERYbtn.classList.add('active');

    PRIMARYOVERVIEW.style.setProperty('display', 'none', 'important');
    SYSTEMTELEMETRY.style.display = 'none';
    SATELLITEGALLERY.style.display = 'block';
});