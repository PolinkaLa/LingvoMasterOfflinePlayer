function MapRender () {
    this.renderMap = function () {
        var info = mapGet.getMap();
        var bodyDiv = document.getElementById('bodyOfPage');
        var courseMapTemplate = '<div style = "text-align: left; margin-left: 5%; margin-right: 5%"> <h2>{{=name}}</h2> <div id="lesson"></div></div>';
        bodyDiv.innerHTML = renderTemplate(courseMapTemplate, {name: info.name});
        var lessonBlock = document.getElementById('lesson');
        var lessonBlockTemplate = '<a href={{=link}}> {{=lesson}} </a> <br><br>';
        var lessonList = "";
        var lessons = info.lesson;
        for (var j = 0; j < lessons.length; j++) {
            lessonList = lessonList + renderTemplate(lessonBlockTemplate, {lesson: lessons[j], link: "../lesson/lesson.html"});
        }
        lessonBlock.innerHTML = lessonList;
    }  
};

window.onload = function () {
    menuRender.renderMenu();
    var mapRender = new MapRender();
    mapRender.renderMap();   
}



