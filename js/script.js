window.onload(bgColor());

function bgColor(){
    var div = document.getElementById('content-wrap');
    var h = document.getElementById('title');
    var p = document.getElementById('content');
    var circle = document.getElementById('circle-logo');
    var line = document.getElementById('line');
    p.style.display="none";
    h.style.display='none';
    div.classList.remove('title-container');
    circle.classList.remove('circle-logo');
        circle.classList.add('onload-circle');    
    setTimeout((function (){
        line.style.display = 'none';
        div.classList.add('animated-display');
        p.style.display="inline";
        h.style.display='inline';
    }),500)
}
