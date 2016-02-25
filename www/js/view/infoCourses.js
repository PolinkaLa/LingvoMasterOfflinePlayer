function InfoRender () {
    this.renderInfo = function () {
        var info = infoGet.getInfo();
        var bodyDiv = document.getElementById('bodyOfPage');
        var courseInfoTemplate = '<div style = "text-align: left; margin-left: 5%; margin-right: 5%"> <img src={{=im}}> <h2>{{=name}}</h2> <h3>{{=annatation}}</h3> <h3>{{=about}}</h3> <h3>{{=author}}</h3> <a href={{=link}}>Download</a> <div id="lesson"></div></div>';
        bodyDiv.innerHTML = renderTemplate(courseInfoTemplate, 
            {im: info.img, 
            name: info.name, 
            annatation: info.annatation,
            about: info.about, 
            author: info.author, 
            link: "../downloadedCourses/downloadedCourses.html"});
        var lessonBlock = document.getElementById('lesson');
        var lessonBlockTemplate = '<h3> {{=lesson}} </h3>';
        var lessonList = "";
        var lessons = info.lesson;
        for (var j = 0; j < lessons.length; j++) {
            lessonList = lessonList + renderTemplate(lessonBlockTemplate, {lesson: lessons[j]});
        }
        lessonBlock.innerHTML = lessonList;
    }
};

window.onload = function () {
    menuRender.renderMenu();
    var infoRender = new InfoRender();
    infoRender.renderInfo();   
}
