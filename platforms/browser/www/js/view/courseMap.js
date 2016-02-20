function MapRender () {
    this.renderMap = function () {
        var info = getMap();
        var body = document.getElementsByTagName('BODY')[0];

        var course = document.createElement("DIV");
        course.style = "text-align: left; margin-left: 5%; margin-right: 5%";
        body.appendChild(course);

        var name = document.createElement("H2");
        name.innerHTML = info.name;
        course.appendChild(name);

        var lessons = info.lesson;
        for (var j = 0; j < lessons.length; j++) {
            var lesson = document.createElement("A");
            lesson.href = "../lesson/lesson.html";
            lesson.innerHTML = lessons[j];
            course.appendChild(lesson);
            course.appendChild(document.createElement("BR"))
        }
        course.appendChild(document.createElement("BR"))
    }  
};

var mapRender = new MapRender();
mapRender.renderMap();


