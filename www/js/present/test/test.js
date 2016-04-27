main.loadScript("../../../js/services/ExerciseService.js");
main.loadScript("../../../js/present/lesson/lunckentextRun.js");
main.loadScript("../../../js/present/lesson/multiplechoiceRun.js");
main.loadScript("../../../js/util/jsoncmp.js");
main.loadScript("../../../js/present/lesson/exerciseRun.js");

function TestRender () {
    this.renderTest = function () {

        var exerciseContainer = 'exerciseContainer';
        var titleContainer = 'titleContainer';

        var exercise = exerciseService.getExercise(2);
        var title = exercise.title;
        var exerciseTypeId = exercise.exerciseTypeId;
        var data = exercise.data;
        var correctAnswer = exercise.correctAnswer;

        var exerciseRun = new ExerciseRunPortlet('', titleContainer, exerciseContainer, title,
            exerciseTypeId, data, correctAnswer, false,
            "Упражнение пройдено успешно", "Что-то пошло не так, попробуйде снова");
    }
};

window.onload = function () {
    var testRender = new TestRender ();
    testRender.renderTest();
    var menuRender = new MenuRender();
    menuRender.renderMenu("Тест");
};

