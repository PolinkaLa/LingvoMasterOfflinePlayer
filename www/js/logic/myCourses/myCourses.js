loadScript("../../../js/dal/myCourses.js");
function MyCourseRenderer() {
    this.renderMyCourses = function () {
        var course = myCourses.getMyCourses();
        var bodyDiv = document.getElementById('bodyOfPage');
        var courseList = "";
        var courseTemplate = getTemplate("myCoursesTmpl.html");
        for (var i = 0; i < course.length; i++) {
            courseList = courseList + renderTemplate(courseTemplate, {im: course[i].img, name: course[i].name, author: course[i].author, link: "../infoCourse/infoCourse.html"});
        }
        bodyDiv.innerHTML = courseList;
    }
};

window.onload = function () {
    var myCourseRenderer = new MyCourseRenderer();
    myCourseRenderer.renderMyCourses();
    var menuRender = new MenuRender();
    menuRender.renderMenu("Мои курсы");
}

