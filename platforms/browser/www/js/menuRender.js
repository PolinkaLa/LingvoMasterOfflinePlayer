function MenuRender () {
    this.renderMenu = function (title, margin) {
        var menuDiv = document.getElementById('menu');
        var menuTemplate = '<nav class="navbar navbar-fixed-top navbar-inverse" style="background-color: #E7F5F8;'+
                            'border-color: #E7F5F8;">'+
                              '<div class="container">'+
                                '<div class="navbar-header">'+
                                  '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse"'+ 
                                  'data-target="#navbar" aria-expanded="false" aria-controls="navbar" style="background-color: #E7F5F8;border-color: #E7F5F8;">'+
                                    '<img src="../../../img/menu.png" width = "30" style = "margin-right: 0px">'+
                                  '</button>'+
                                  '<h2 class="text-color"style="margin-top: {{=marg}}px">{{=ttl}}</h2>'+
                                '</div>'+
                                '<div id="navbar" class="collapse navbar-collapse" style="border: none;">'+
                                  '<ul class="nav navbar-nav">'+
                                    '<li><a href={{=linkOne}} class="h2 text-color">{{=liOne}}</a></li>'+
                                    '<li><a href={{=linkTwo}} class="h2 text-color">{{=liTwo}}</a></li>'+
                                    '<li><a href={{=linkThree}} class="h2 text-color">{{=liThree}}</a></li>'+
                                  '</ul>'+
                                '</div>'+
                              '</div>'+
                            '</nav>';

        menuDiv.innerHTML = renderTemplate(menuTemplate, 
            {marg: margin,
            ttl: title,
            linkOne: "../myCourses/myCourses.html",
            liOne: "Мои курсы",
            linkTwo: "../downloadedCourses/downloadedCourses.html",
            liTwo: "Загруженные",
            linkThree: "../index/index.html",
            liThree: "Выйти",});
    }
};

var menuRender = new MenuRender();