function MenuRender () {
    this.renderMenu = function (title, margin) {
        var menuDiv = document.getElementById('menu');
        var menuTemplate ='<nav class="pushy pushy-left">'+
                              '<ul>'+
                                  '<li><img src={{=link}} height="50" width="119"></li>'+
                                  '<li class="-link"><a href="../myCourses/myCourses.html" class="h2">Мои курсы</a></li>'+
                                  '<li class="pushy-link"><a href="../downloadedCourses/downloadedCourses.html" class="h2">Загруженные</a></li>'+
                                  '<li class="pushy-link"><a href="../index/index.html" class="h2">Выйти</a></li>'+
                              '</ul>'+
                          '</nav>';
        menuDiv.innerHTML = renderTemplate(menuTemplate, 
            {
              link: "../../../img/company_logo.png"
            });
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript')
        script.setAttribute('src', '../../../lib/pushy/pushy.min.js')
        document.getElementsByTagName('body')[0].appendChild(script);
    }
};

