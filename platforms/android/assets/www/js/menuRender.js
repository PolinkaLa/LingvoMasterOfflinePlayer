function MenuRender () {
    this.renderMenu = function (title) {
        var menuDiv = document.getElementById('menu');
        
        var menuTemplate = getTemplate('../../templates/menu.html')

        menuDiv.innerHTML = renderTemplate(menuTemplate, 
            {titlePage: title, 
              link: "../../../img/company_logo.png"
            });
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript')
        script.setAttribute('src', '../../../lib/pushy/pushy.min.js')
        document.getElementsByTagName('body')[0].appendChild(script);
    }
};

