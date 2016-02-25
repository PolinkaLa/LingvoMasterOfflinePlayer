function LessonRender () {
    this.renderLesson = function () {
        lesson = lessonGet.getLesson();
        test = testGet.getTest();
        var bodyDiv = document.getElementById('bodyOfPage');
        var lessonTemplate = '<div style="text-align: left; margin-left: 5%; margin-right: 5%"> <h2>{{=ex}}</h2> </div>';
        var exercises = '';
        var tests = '';
        var testBlock = '<div><a href={{=link}}>{{=test}}</a></div>';

        for (var key in lesson) {
            exercises = exercises + renderTemplate(lessonTemplate, {ex: lesson[key]});
        } 

        for (var key in test) {
            tests = tests + renderTemplate(testBlock, {link: "../test/test.html", test: "Test"+key});
        }
        bodyDiv.innerHTML = exercises + tests;
    }
};

window.onload = function () {
    menuRender.renderMenu();
    var lessonRender = new LessonRender();
    lessonRender.renderLesson();   
}
