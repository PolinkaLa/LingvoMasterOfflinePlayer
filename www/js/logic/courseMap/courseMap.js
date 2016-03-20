function MapRender () {
    this.renderMap = function () {
        var info = mapGet.getMap();
        var bodyDiv = document.getElementById('bodyOfPage');
        var courseMapTemplate = '<div class="body-div" style="margin-right: 5%">'+
                                    '<h3 class="titl-course">{{=name}}</h2>'+
                                    '<div style ="text-align: center; margin-top: 20px" id="lesson">'+
                                    '</div>'+
                                '</div>';
        bodyDiv.innerHTML = renderTemplate(courseMapTemplate, {name: info.name});
        var lessonBlock = document.getElementById('lesson');
        var lessonBlockTemplate = '<a href={{=link}} class="btn btn-primary btn-block"> {{=lesson}} </a> <br>';
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
    menuRender.renderMenu(); 
}