function DownloadedRender() {
    this.renderDownloaded = function () {
        var cour = downloadedCoursesGet.getDownloadedCourses();
        var body = document.getElementsByTagName('BODY')[0];
        for (var i = 0; i < cour.length; i++) {
            var course = document.createElement("DIV");
            course.style = "text-align: left; margin-left: 5%; margin-right: 5%";
            body.appendChild(course);

            var img = document.createElement("IMG");
            img.src = cour[i].img;
            course.appendChild(img);

            var name = document.createElement("H2");
            name.innerHTML = cour[i].name;
            course.appendChild(name);

            var author = document.createElement("H3");
            author.innerHTML = cour[i].author;
            course.appendChild(author);

            var button = document.createElement("A");
            button.href = "../courseMap/courseMap.html";
            button.innerHTML = "RUN"
            course.appendChild(button);
        }
    }
};

window.onload = function () {
    var downloadedRender = new DownloadedRender();
    downloadedRender.renderDownloaded();   
}
