function TestRender () {
    this.renderTest = function () {

        var test = testGet.getTest();

        var bodyDiv = document.getElementById('bodyOfPage');
        var testTemplate = '<div style="text-align: left; margin-left: 5%; margin-right: 5%"> <h2>{{=ex}}</h2> </div>';
        var exercises = '';

        for (var key in test) {
            exercises = exercises + renderTemplate(testTemplate, {ex: test[key]});
        } 

        bodyDiv.innerHTML = exercises;

    }
};

window.onload = function () {
    menuRender.renderMenu();
    var testRender = new TestRender ();
    testRender.renderTest();
}

