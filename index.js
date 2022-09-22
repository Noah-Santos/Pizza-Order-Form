function custom(){
    document.getElementByID("custom").disabled=false;
    document.getElementByID("pre-made").disabled=true;
}

function preMade(){
    document.getElementByID("pre-made").diabled=false;
    document.getElementByID("custom").disabled=true;
}