var ignoredScripts = []

function loadScript(src, callback) {
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

loadScript("../../../cordova.js");
loadScript("../../../lib/jquery-1.12.0.min.js");
loadScript("../../../lib/bootstrap/bootstrap.min.js");
loadScript("../../../lib/getTemplate.js");
loadScript("../../../lib/renderTemplate.js");
loadScript("../../../js/menuRender.js");