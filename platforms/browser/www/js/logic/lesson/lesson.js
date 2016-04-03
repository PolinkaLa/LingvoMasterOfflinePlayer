main.loadScript("../../../js/dal/lesson.js");
main.loadScript("../../../js/dal/test.js");
function LessonRender () {
    this.renderLesson = function () {
        lessonCourse = lesson.getLesson();
        testCourse = test.getTest();
        var bodyDiv = document.getElementById('bodyOfPage');
        var lessonTemplate = getTemplate("lessonTmpl.html");
        var exercises = '';
        var tests = '';
        var testBlock = getTemplate("testBlockTmpl.html");

        for (var key in lessonCourse){
            exercises = exercises + renderTemplate(lessonTemplate, {ex: lessonCourse[key]});
        } 

        for (var key in testCourse) {
            tests = tests + renderTemplate(testBlock, {link: "../test/test.html", test: "Test "+ key});
        }
        bodyDiv.innerHTML = exercises + tests;
    }
};

window.onload = function () {
    var lessonRender = new LessonRender();
    lessonRender.renderLesson();
    var menuRender = new MenuRender();
    menuRender.renderMenu("Урок");
}
