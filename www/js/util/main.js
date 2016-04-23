function Main() {

    var ignoredScripts = []

    this.loadScript = function(src, callback) {
        for (var i = 0; i < ignoredScripts.length; i++) {
            var ignoredScript = ignoredScripts[i];
            if (src === ignoredScript) {
                callback();
                return;
            }
        }
        ignoredScripts.push(src);
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', src);
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(script);
        script.onreadystatechange = callback;
        script.onload = callback;
    }

    this.loadLink = function(src, callback) {
        for (var i = 0; i < ignoredScripts.length; i++) {
            var ignoredScript = ignoredScripts[i];
            if (src === ignoredScript) {
                callback();
                return;
            }
        }
        ignoredScripts.push(src);
        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css')
        link.setAttribute('href', src);
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(link);
        link.onreadystatechange = callback;
        link.onload = callback;
    }
}

var main = new Main();

main.loadLink("../../../css/style.css");
main.loadLink("../../../lib/bootstrap/bootstrap.min.css");
main.loadLink("../../../lib/pushy/pushy.css");

main.loadScript("../../../cordova.js");
main.loadScript("../../../lib/jquery-1.12.0.min.js");
main.loadScript("../../../lib/bootstrap/bootstrap.min.js");
main.loadScript("../../../js/util/getTemplate.js");
main.loadScript("../../../js/util/renderTemplate.js");
main.loadScript("../../../js/util/menuRender.js");