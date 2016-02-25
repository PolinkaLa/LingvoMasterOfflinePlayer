function MyCourseRenderer() {
    this.renderMyCourses = function () {
        var course = myCoursesGet.getMyCourses();
        var bodyDiv = document.getElementById('bodyOfPage');
        var courseList = "";
        var courseTemplate = '<div style ="text-align: left; margin-left: 5%; margin-right: 5%"> <img src={{=im}}> <h2>{{=name}}</h2> <h3>{{=author}}</h3> <a href={{=link}}>INFO</a><br><br> </div>';
        for (var i = 0; i < course.length; i++) {
            courseList = courseList + renderTemplate(courseTemplate, {im: course[i].img, name: course[i].name, author: course[i].author, link: "../infoCourse/infoCourse.html"});
        }
        bodyDiv.innerHTML = courseList;
    }
};

window.onload = function () {
    menuRender.renderMenu();
    var myCourseRenderer = new MyCourseRenderer();
    myCourseRenderer.renderMyCourses();    
}

