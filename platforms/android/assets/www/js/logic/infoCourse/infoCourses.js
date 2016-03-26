loadScript("../../../js/dal/infoCourses.js");
function InfoRender () {
    this.renderInfo = function () {
        var infoCourse = info.getInfo();
        var bodyDiv = document.getElementById('bodyOfPage');
        var courseInfoTemplate = getTemplate("../../templates/infoCourse/infoCourse.html");
        bodyDiv.innerHTML = renderTemplate(courseInfoTemplate, 
            {im: infoCourse.img, 
            name: infoCourse.name, 
            annatation: infoCourse.annatation,
            about: infoCourse.about, 
            author: infoCourse.author, 
            link: "../downloadedCourses/downloadedCourses.html"});
        var lessonBlock = document.getElementById('lesson');
        var lessonBlockTemplate = getTemplate("../../templates/infoCourse/lessonBlock.html");
        var lessonList = "";
        var lessons = infoCourse.lesson;
        for (var j = 0; j < lessons.length; j++) {
            lessonList = lessonList + renderTemplate(lessonBlockTemplate, {lesson: lessons[j]});
        }
        lessonBlock.innerHTML = lessonList;
    }
};

window.onload = function () {
    var infoRender = new InfoRender();
    infoRender.renderInfo();
    var menuRender = new MenuRender();
    menuRender.renderMenu("Информация");
}
