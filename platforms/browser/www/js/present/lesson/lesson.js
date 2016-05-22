main.loadScript("../../../js/services/ExerciseService.js");
main.loadScript("../../../js/present/exRun/lunckentextRun.js");
main.loadScript("../../../js/present/exRun/multiplechoiceRun.js");
main.loadScript("../../../js/util/jsoncmp.js");
main.loadScript("../../../js/present/exRun/exerciseRun.js");

function LessonRender () {
    this.renderLesson = function () {

        this.lessonId = sessionStorage.getItem("lessonId");
        var lesId = sessionStorage.getItem("lessonId");
        lessonCourse = exerciseService.getExercisesList(lesId);
        testCourse = exerciseService.getListTest(lesId);

        var exerciseDiv = document.getElementById('exercises');
        var exerciseTemplate = getTemplate("exerciseTmpl.html");
        var exercises = '';
        for (var key in lessonCourse){
            exercises = exercises + renderTemplate(exerciseTemplate, {number: key});
        }
        exerciseDiv.innerHTML = exercises;
        for (var key in lessonCourse){
            var title = lessonCourse[key].title;
            var exerciseTypeId = lessonCourse[key].exerciseTypeId;
            var data = lessonCourse[key].data;
            var correctAnswer = lessonCourse[key].correctAnswer;

            var exerciseRunPortlet = ExerciseRunPortlet(key, 'titleContainer', 'exerciseContainer',
                title, exerciseTypeId, data, correctAnswer, false,
            "Упражнение пройдено успешно", "Что-то пошло не так, попробуйде снова");
        }

        var testsDiv = document.getElementById('tests');
        var testBlock = getTemplate("testBlockTmpl.html");
        var tests = '';

        for (var i = 1; i <= testCourse; i++) {
            tests = tests + renderTemplate(testBlock, {link: "../test/test.html", test: "Test "+ i});
        }
        testsDiv.innerHTML = tests;
    }
};

window.onload = function () {
    var lessonRender = new LessonRender();
    lessonRender.renderLesson();
    var menuRender = new MenuRender();
    menuRender.renderMenu("Lesson " + lessonRender.lessonId);
}
