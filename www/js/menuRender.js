function MenuRender () {
    this.renderMenu = function () {
        var menuDiv = document.getElementById('menu');
        var menuTemplate = '<input type="checkbox" id="hmt" class="hidden-menu-ticker">' +
                                '<label class="btn-menu" for="hmt">'+
                                    '<span class="first"></span>'+
                                    '<span class="second"></span>'+
                                    '<span class="third"></span>'+
                                '</label>'+
                                '<ul class="hidden-menu">'+
                                    '<li style="margin-top: 10%; text-align: left"><img src={{=linkLogo}} width="50%" height="50%"></li>'+
                                    '<li><a href={{=linkOne}}>{{=liOne}}</a></li>'+
                                    '<li><a href={{=linkTwo}}>{{=liTwo}}</a></li>'+
                                '</ul>';

        menuDiv.innerHTML = renderTemplate(menuTemplate, 
            {linkLogo: "../../../img/company_logo.png",
            linkOne: "../myCourses/myCourses.html",
            liOne: "MyCourses",
            linkTwo: "../downloadedCourses/downloadedCourses.html",
            liTwo: "Downloaded"});
    }
};

var menuRender = new MenuRender();