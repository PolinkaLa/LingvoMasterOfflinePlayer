function LessonRender () {
    this.renderLesson = function () {
        lesson = LESSON.getLesson();
        test = TEST.getTest();
        var bodyDiv = document.getElementById('bodyOfPage');
        var lessonTemplate = '<div class="body-div" style="margin-right: 5%">'+
                                '<h3 class="author-style">{{=ex}}</h3>'+
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
    menuRender.renderMenu("Урок", 15);
    var lessonRender = new LessonRender();
    lessonRender.renderLesson();   
}
