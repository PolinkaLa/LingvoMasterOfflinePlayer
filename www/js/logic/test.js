function TestRender () {
    this.renderTest = function () {

        var test = testGet.getTest();

        var bodyDiv = document.getElementById('bodyOfPage');
        var testTemplate = '<div class="body-div" style="margin-right: 5%">'+
                                '<h3 class="author-style">{{=ex}}</h3>'+
                            '</div>';
        var exercises = '';

        for (var key in test) {
            exercises = exercises + renderTemplate(testTemplate, {ex: test[key]});
        } 

        bodyDiv.innerHTML = exercises;

    }
};

window.onload = function () {
    var testRender = new TestRender ();
    testRender.renderTest();
    var menuRender = new MenuRender();
    menuRender.renderMenu();
}

