document.getElementById("download").onclick = function(){

    var link = document.getElementById("urlbox").value;

    if (link.includes("tiktok.com")) {
        var parser = new DOMParser();


        $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent(link) + '&callback=?', function(data){
            var page = parser.parseFromString(data.contents, 'text/html');
            var scripts = page.getElementsByTagName("script");

            for(var i = 0; i < scripts.length; i++) {

                if (scripts[i].innerHTML.includes('{"urls":')){
                    eval(scripts[i].innerHTML.replace("window.__INIT_PROPS__", "var data"));
                    var videoLink;

                    var script = scripts[i].innerHTML;
                    if (script.includes('{"/v/:id":')){
                        videoLink = data["/v/:id"]["videoData"]["itemInfos"]["video"]["urls"][2].replace("watermark=1", "watermark=0");

                    } else if (script.includes('{"/share/video/:id"')){
                        videoLink = data["/share/video/:id"]["videoData"]["itemInfos"]["video"]["urls"][2].replace("watermark=1", "watermark=0");

                    }
                    window.open(videoLink);

                    break;
                    
                } else if (scripts[i].innerHTML.includes('{"url_list":')){
                    var execData = scripts[i].innerHTML.replace("$(function(){", "").split("var status = 0;")[0];
                    eval(execData);
                    var videoLink = data["video"]["play_addr"]["url_list"][2].replace("\\/", "/").replace("//", "http://").replace("\\u0026", "&");
                    window.open(videoLink);
                    break;
                }

            }

        });

    } else {
        alert("Please enter a valid URL.");
    }
        
}
