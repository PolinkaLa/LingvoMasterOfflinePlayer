function InfoRender () {
    this.renderInfo = function () {
        var info = infoGet.getInfo();
        var bodyDiv = document.getElementById('bodyOfPage');
        var courseInfoTemplate = '<div class="body-div" style="margin-right: 5%">'+
                                    '<img src={{=im}}>'+
                                    '<h3 class="titl-course">{{=name}}</h2>'+
                                    '<h4 class="text-color">{{=annatation}}</h4>'+
                                    '<h4 class="text-color">{{=about}}</h4>'+
                                    '<h4 class="text-color">{{=author}}</h4>'+
                                    '<a href={{=link}} class="btn btn-success btn-lg btn-block">Download</a>'+
                                    '<div id="lesson"></div>'+
                                    '</div>';
        bodyDiv.innerHTML = renderTemplate(courseInfoTemplate, 
            {im: info.img, 
            name: info.name, 
            annatation: info.annatation,
            about: info.about, 
            author: info.author, 
            link: "../downloadedCourses/downloadedCourses.html"});
        var lessonBlock = document.getElementById('lesson');
        var lessonBlockTemplate = '<h4 class="text-color"> {{=lesson}} </h4>';
        var lessonList = "";
        var lessons = info.lesson;
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
    menuRender.renderMenu();
}
