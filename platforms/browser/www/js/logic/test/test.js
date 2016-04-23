main.loadScript("../../../js/services/ExerciseService.js");

function TestRender () {
    this.renderTest = function () {
        var exerciseRun = new ExerciseRun();
    }
};

window.onload = function () {
    var testRender = new TestRender ();
    testRender.renderTest();
    var menuRender = new MenuRender();
    menuRender.renderMenu("Тест");
};

