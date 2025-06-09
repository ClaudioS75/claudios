let numerodeclicks = 0;
const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');

function botonclick() {
    numerodeclicks = numerodeclicks + 1;
    document.getElementById("mainDiv").textContent =
        "Che se presiono estas veces... " + numerodeclicks;
}


function gethora()  {
        var now = new Date();        
        var time = ("0" + (now.getDate())).slice(-2)+"/"+("0" + (now.getMonth() + 1)).slice(-2)+"/"+now.getFullYear()+" hora "+now.getHours() + ":" + now.getMinutes() +"."+ now.getSeconds()+" HS";
        // + now.getSeconds();
        document.getElementById('muestra-hora').innerHTML = time;
    }
    
myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


setInterval(gethora, 1000);
