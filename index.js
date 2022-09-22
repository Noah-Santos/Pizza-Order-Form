function custom(){
    document.getElementById("custom").disabled = false;
    document.getElementById("custom2").disabled = false;
    document.getElementById("pre-made").disabled = true;
}

function pre(){
    document.getElementById("pre-made").disabled = false;
    document.getElementById("custom").disabled = true;
    document.getElementById("custom2").disabled = true;
}