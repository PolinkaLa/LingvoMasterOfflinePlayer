function MyCourseRenderer() {
    this.renderMyCourses = function () {
        var course = myCoursesGet.getMyCourses();
        var bodyDiv = document.getElementById('bodyOfPage');
        var courseList = "";
        var courseTemplate = '<div class="body-div" style="margin-right: 5%">'+ 
                                '<img src={{=im}}>'+
                                '<div class="row">'+
                                    '<div class="col-xs-8">'+
                                        '<h3 class="titl-course">{{=name}}</h3>'+ 
                                        '<h3 class="author-style">{{=author}}</h3>'+
                                    '</div>'+ 
                                    '<div class="col-xs-4">'+
                                        '<a href={{=link}} class="btn btn-success btn-block" style="margin-top: 20px">INFO</a><br><br>'+
                                    '</div>'+
                                '</div>'+ 
                            '</div>';
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
    menuRender.renderMenu();
}

