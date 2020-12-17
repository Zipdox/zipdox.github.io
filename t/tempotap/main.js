const tempoTap = document.getElementById('tempoTap');
const bpm = document.getElementById('bpm');
const samples = document.getElementById('samples');
const reset = document.getElementById('reset');
const accuracy = document.getElementById('accuracy');

var lastTap;
var tapDeltas = [];
tempoTap.onmousedown = function(){
    if(lastTap == undefined) return lastTap = Date.now();
    if(tapDeltas.length >= samples.value) tapDeltas.pop();
    const timeNow = Date.now();
    tapDeltas.push(timeNow-lastTap);
    lastTap = timeNow;
    var tapDeltasSum = 0;
    tapDeltas.forEach((delta)=>{
        tapDeltasSum += delta;
    });
    millisPerBeat = tapDeltasSum/tapDeltas.length;
    bpm.textContent = Math.round(600000/millisPerBeat)/10;
    accuracy.textContent = `${tapDeltas.length} samples`;
}

reset.onclick = function(){
    lastTap = undefined;
    tapDeltas = [];
    bpm.textContent = '';
    accuracy.textContent = '';
}

document.body.onkeydown = function(event){
    if(event.keyCode == 32) tempoTap.onmousedown();
}
