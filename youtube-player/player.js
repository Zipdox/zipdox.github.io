var myvideo = document.getElementById("myvideo");
var myaudio = document.getElementById("myaudio");

var change_time_state = true;

var hd_src = "https://r1---sn-mn4vg5aa-5hn6.googlevideo.com/videoplayback?id=o-AKpRgmp0b8C4bRVFFAuhgYG13wx29SmKahBqTWZF9sEU&dur=1303.510&mn=sn-mn4vg5aa-5hn6%2Csn-5hne6nsy&hightc=yes&mm=31%2C29&lmt=1548107900783957&ip=2001%3A984%3A2ed5%3A0%3A2f1%3Af3ff%3Afea9%3A33ed&key=yt6&fvip=1&ms=au%2Crdu&mv=m&source=youtube&expire=1552085416&ipbits=0&sparams=aitags%2Cclen%2Cctier%2Cdur%2Cei%2Cgcr%2Cgir%2Chightc%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Ckeepalive%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpfa%2Cpl%2Crequiressl%2Csource%2Cexpire&keepalive=yes&requiressl=yes&mt=1552063708&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313&pfa=5&mime=video%2Fmp4&initcwndbps=1557500&gcr=nl&c=WEB&pl=29&ei=SJ2CXJSgA8eD8gOdgqHADg&itag=137&ctier=A&clen=405077146&gir=yes&signature=59A34A0E62593D038D7233B866E9802FF92580F7.36B27DC62F5AD58455DF94D1F07B998DDE86B707&ratebypass=yes"
var ultrahd_src = "https://r1---sn-mn4vg5aa-5hn6.googlevideo.com/videoplayback?clen=1887673010&requiressl=yes&lmt=1548109394413820&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313&sparams=aitags%2Cclen%2Cctier%2Cdur%2Cei%2Cgcr%2Cgir%2Chightc%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Ckeepalive%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpcm2cms%2Cpfa%2Cpl%2Crequiressl%2Csource%2Cexpire&mt=1552063610&c=WEB&expire=1552085328&key=yt6&initcwndbps=1576250&ctier=A&keepalive=yes&itag=313&pfa=5&dur=1303.510&pcm2cms=yes&ipbits=0&mime=video%2Fwebm&gcr=nl&fvip=1&ei=8JyCXKSzFsuWgQelrIOgDg&id=o-ANb4742oAKZIgVJbxJkggIEXaaZZ--RYfv-LLM6g_x2z&ms=au%2Crdu&hightc=yes&pl=29&mv=m&mm=31%2C29&source=youtube&mn=sn-mn4vg5aa-5hn6%2Csn-5hnekn7d&ip=2001%3A984%3A2ed5%3A0%3A2f1%3Af3ff%3Afea9%3A33ed&gir=yes&signature=61BABBDE0CD9B6A4EEA2ACDE0540B177CC5368A4.2796163D0FE89E49D2D3FA6795CDA67E9E35325D&ratebypass=yes"

function changetohd(){
	position = myvideo.currentTime;
	myvideo.src = hd_src;
	myvideo.play();
	console.log(position);
	myvideo.currentTime = position;
	myaudio.currentTime = position;
	
}

function changeto4k(){
	position = myvideo.currentTime;
	myvideo.src = ultrahd_src;
	myvideo.play();
	console.log(position);
	myvideo.currentTime = position;
	myaudio.currentTime = position;
	
}


myvideo.onplay = function(){
    myaudio.play();
    if(change_time_state){
        myaudio.currentTime = myvideo.currentTime;
        change_time_state = false;
    }
}

myvideo.onwaiting = function(){
    myaudio.pause();
}

myvideo.ondurationchange = function(){
	myaudio.currentTime = myvideo.currentTime;
}

myvideo.onplaying = function(){
	myaudio.currentTime = myvideo.currentTime;
	myaudio.play();
}

myvideo.onseekend = function(){
	myaudio.currentTime = myvideo.currentTime;
}

myvideo.onpause = function(){
    myaudio.pause();
    change_time_state = true;
}
