main.loadScript("../../../js/dal/courseMap.js");
function MapRender () {
    this.renderMap = function () {
        var info = map.getMap();
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
}