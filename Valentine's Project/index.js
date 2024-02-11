function gun(){
    document.getElementById('first').innerHTML="";
    document.getElementById('second').innerHTML="<img src='gun.png' class='gun'/></br><button class='btn' onclick='message()'>Say Yes</button>"
}

function message(){
    document.getElementById('first').innerHTML="";
    document.getElementById('second').innerHTML="";
    document.getElementById('third').innerHTML='<img src="letter.png" class="asking"/><h3 class="que">Great!!! </br>I have something special for you!</h3><button class="btn" onclick="show()">Show</button>'
}

function show(){
    document.getElementById('first').innerHTML="";
    document.getElementById('second').innerHTML="";
    document.getElementById('third').innerHTML="";
    document.getElementById('fourth').innerHTML='<img src="message.png" class="message"/>';
}