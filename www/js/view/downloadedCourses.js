function DownloadedRender() {
    this.renderDownloaded = function () {
        var course = downloadedCoursesGet.getDownloadedCourses();
        var bodyDiv = document.getElementById('bodyOfPage');
        var courseList = "";
        var courseTemplate = '<div style = "text-align: left; margin-left: 5%; margin-right: 5%"> <img src={{=im}}> <h2>{{=name}}</h2> <h3>{{=author}}</h3> <a href={{=link}}>RUN</a><br><br> </div>';
        for (var i = 0; i < course.length; i++) {
            courseList = courseList + renderTemplate(courseTemplate, {im: course[i].img, name: course[i].name, author: course[i].author, link: "../courseMap/courseMap.html"});
        }
        bodyDiv.innerHTML = courseList;
    }
};

window.onload = function () {
    menuRender.renderMenu();
    var downloadedRender = new DownloadedRender();
    downloadedRender.renderDownloaded();   
}
