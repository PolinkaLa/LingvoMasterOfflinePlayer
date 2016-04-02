loadScript("../../../js/dal/test.js");
function TestRender () {
    this.renderTest = function () {

        var testCourse = test.getTest();

        var bodyDiv = document.getElementById('bodyOfPage');
        var testTemplate = getTemplate("testTmpl.html");
        var exercises = '';

        for (var key in testCourse) {
            exercises = exercises + renderTemplate(testTemplate, {ex: testCourse[key]});
        } 

        bodyDiv.innerHTML = exercises;

    }
};

window.onload = function () {
    var testRender = new TestRender ();
    testRender.renderTest();
    var menuRender = new MenuRender();
    menuRender.renderMenu("Тест");
}

