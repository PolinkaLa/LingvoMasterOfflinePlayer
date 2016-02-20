function InfoRender () {
    this.renderInfo = function () {
        var info = infoGet.getInfo();
        var body = document.getElementsByTagName('BODY')[0];

        var course = document.createElement("DIV");
        course.style = "text-align: left; margin-left: 5%; margin-right: 5%";
        body.appendChild(course);

        var img = document.createElement("IMG");
        img.src = info.img;
        course.appendChild(img);

        var name = document.createElement("H2");
        name.innerHTML = info.name;
        course.appendChild(name);

        var annatation = document.createElement("H3");
        annatation.innerHTML = info.annatation;
        course.appendChild(annatation);

        var about = document.createElement("H3");
        about.innerHTML = info.about;
        course.appendChild(about);

        var author = document.createElement("H3");
        author.innerHTML = info.author;
        course.appendChild(author);

        var button = document.createElement("A");
        button.href = "../downloadedCourses/downloadedCourses.html";
        button.innerHTML = "Download";
        course.appendChild(button);

        var lessons = info.lesson;
        for (var j = 0; j < lessons.length; j++) {
            var lesson = document.createElement("H3");
            lesson.innerHTML = lessons[j];
            course.appendChild(lesson);
        }
    }
};

window.onload = function () {
    var infoRender = new InfoRender();
    infoRender.renderInfo();   
}
