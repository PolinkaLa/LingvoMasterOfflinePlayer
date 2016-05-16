main.loadScript("../../../js/dal/DbAccess.js")
main.loadScript("../../../js/services/CourseService.js");
main.loadScript("../../../js/services/XmlConvertService.js")

function MapRender () {
    this.renderMap = function () {
        var info = courseService.getInfoCourses();
        var bodyDiv = document.getElementById('bodyOfPage');
        var courseMapTemplate = getTemplate("courseMapTmpl.html");
        bodyDiv.innerHTML = renderTemplate(courseMapTemplate, {name: info.name});
        var lessonBlock = document.getElementById('lesson');
        var lessonBlockTemplate = getTemplate("lessonBlockTmpl.html");
        var lessonList = "";
        var lessons = info.lesson;
        for (var j = 0; j < lessons.length; j++) {
            lessonList = lessonList + renderTemplate(lessonBlockTemplate, {lesson: lessons[j], link: "../lesson/lesson.html"});
        }
        lessonBlock.innerHTML = lessonList;
    }  
};

window.onload = function () {
    var mapRender = new MapRender();
    mapRender.renderMap();
    var menuRender = new MenuRender();
    menuRender.renderMenu("Содержание");
    xmlConvertService.processXML("../../../test_data/9764.xml")
}