main.loadScript("../../../js/services/CourseService.js");
function DownloadedRender() {
    this.renderDownloaded = function () {
        var course = courseService.getDownloadedCoursesList();
        var bodyDiv = document.getElementById('bodyOfPage');
        var courseList = "";
        var courseTemplate = getTemplate("downloadedCoursesTmpl.html")
        for (var i = 0; i < course.length; i++) {
            courseList = courseList + renderTemplate(courseTemplate, {im: course[i].img, name: course[i].name, author: course[i].author, link: "../courseMap/courseMap.html"});
        }
        bodyDiv.innerHTML = courseList;
    }
};

window.onload = function () {
    var downloadedRender = new DownloadedRender();
    downloadedRender.renderDownloaded();
    var menuRender = new MenuRender();
    menuRender.renderMenu("Загруженные курсы"); 
}