loadScript("../../../js/dal/lesson.js");
loadScript("../../../js/dal/test.js");
function LessonRender () {
    this.renderLesson = function () {
        lessonCourse = lesson.getLesson();
        testCourse = test.getTest();
        var bodyDiv = document.getElementById('bodyOfPage');
        var lessonTemplate = getTemplate("../../templates/lesson/lesson.html");
        var exercises = '';
        var tests = '';
        var testBlock = getTemplate("../../templates/lesson/testBlock.html");

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
