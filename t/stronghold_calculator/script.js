function calculate(){
    var x1 = document.getElementById('x1').value;
    var z1 = document.getElementById('z1').value;
    var yaw1 = document.getElementById('yaw1').value;
    var x2 = document.getElementById('x2').value;
    var z2 = document.getElementById('z2').value;
    var yaw2 = document.getElementById('yaw2').value;
    
    var slope1 = -1/(Math.tan(yaw1 * Math.PI / 180));
    var b1 = z1-(x1*slope1);
    var slope2 = -1/(Math.tan(yaw2 * Math.PI / 180));
    var b2 = z2-(x2*slope2);

    var xpos = (b2 - b1) / (slope1 - slope2);
    var zpos = xpos * slope1 + b1;
    alert(`X,Z: ${Math.round(xpos)},${Math.round(zpos)}`);
}