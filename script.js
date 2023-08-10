function settext(v){
    var prenumber=document.getElementById("text1").value;
    prenumber=prenumber+v;
    document.getElementById("text1").value=prenumber;
}
function clartext(){
    // var value=document.getElementById("text1").value;
    document.getElementById("text1").value=" ";
}
function deletewhole(){
        var value=document.getElementById("text1").value;
       value=value.substring(0 , value.length-1);
       document.getElementById("text1").value=value;
}
function equal(){
    var value=document.getElementById("text1").value;
    document.getElementById("text1").value=eval(value);
}