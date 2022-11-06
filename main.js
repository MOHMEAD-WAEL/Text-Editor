function run(){
    let  htmlCode = document.querySelector(".editor #html-code").value;
    let  cssCode  = "<style>" + document.querySelector(".editor #CSS-code").value + "<style>";
    let  jsCode   = document.querySelector(".editor #JS-code").value;
    let  output   = document.querySelector(".editor1 #output");
    output.contentDocument.body.innerHTML = htmlCode+cssCode;
    output.contentWindow.eval(jsCode);  
}
document.querySelector(".editor #html-code").addEventListener("keyup", run);
document.querySelector(".editor #CSS-code").addEventListener("keyup", run);
document.querySelector(".editor #JS-code").addEventListener("keyup", run);