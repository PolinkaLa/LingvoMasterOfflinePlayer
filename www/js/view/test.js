function TestRender () {
    this.renderTest = function () {
        var test = testGet.getTest();;
        var body = document.getElementsByTagName('BODY')[0];
        for (var key in test) {
            var course = document.createElement("DIV");
            course.style = "text-align: left; margin-left: 5%; margin-right: 5%"
            var ex = document.createElement("H2");
            ex.innerHTML = test[key];
            course.appendChild(ex);
            body.appendChild(course);
        }
        var menu = document.createElement("DIV");
        var linkBack = document.createElement("A");
        linkBack.href = "../courseMap/courseMap.html";
        var imgBack = document.createElement("IMG");
        imgBack.src = "../../../img/back.jpg";
        imgBack.width = "100";
        imgBack.style = "margin-right: 100px;";
        linkBack.appendChild(imgBack);
        menu.appendChild(linkBack);

        var button = document.createElement("A");
        button.href = "../courseMap/courseMap.html";
        button.innerHTML = "Stop";
        menu.appendChild(button);

        var linkForth = document.createElement("A");
        linkForth.href = "../courseMap/courseMap.html";
        var imgForth = document.createElement("IMG");
        imgForth.src = "../../../img/forth.jpg";
        imgForth.width = "100";
        imgForth.style = "margin-left: 100px;";
        linkForth.appendChild(imgForth);
        menu.appendChild(linkForth);

        body.appendChild(menu);
    }
};

window.onload = function () {
    var testRender = new TestRender ();
    testRender.renderTest();
}

