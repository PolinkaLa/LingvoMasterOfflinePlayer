function LessonRender () {
    this.renderLesson = function () {
        lessonCourse = lesson.getLesson();
        testCourse = test.getTest();
        var bodyDiv = document.getElementById('bodyOfPage');
        var lessonTemplate = '<div class="body-div" style="margin-right: 5%">'+
                                '<h3 class="author-style">{{=ex}}</h2>'+
                            '</div>';
        var exercises = '';
        var tests = '';
        var testBlock = '<div class="body-div" style="margin-right: 5%"><a href={{=link}} class="btn btn-primary btn-sm btn-block">{{=test}}</a><br></div>';

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
    menuRender.renderMenu();
}
