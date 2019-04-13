var urlbox = document.getElementById("urlbox");

document.getElementById("download").onclick = function(){

    link = document.getElementById("urlbox").value;
    var pageRequest = new XMLHttpRequest()
    pageRequest.responseType = "document";

    pageRequest.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var scripts = this.response.getElementsByTagName("script");

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

        }  
    }

    
    
    if (link.includes("vm.tiktok.com")) {
        alert("Shortened URL's don't work yet.");
    } else if (link.includes("tiktok.com")) {
        pageRequest.open("GET", link, true);
        pageRequest.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.47 Safari/537.36");
        pageRequest.send();
        console.log("request sent");
    } else {
        alert("Please enter a valid URL.");
    }
        
}
