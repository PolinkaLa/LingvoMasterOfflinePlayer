function LessonRender () {
    this.renderLesson = function () {
        lesson = lessonGet.getLesson();
        test = testGet.getTest();
        var bodyDiv = document.getElementById('bodyOfPage');
        var lessonTemplate = '<div class="body-div" style="margin-right: 5%">'+
                                '<h3 class="author-style">{{=ex}}</h2>'+
                            '</div>';
        var exercises = '';
        var tests = '';
        var testBlock = '<div class="body-div" style="margin-right: 5%"><a href={{=link}} class="btn btn-primary btn-sm btn-block">{{=test}}</a><br></div>';

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
    var lessonRender = new LessonRender();
    lessonRender.renderLesson();
    var menuRender = new MenuRender();
    menuRender.renderMenu();
}
