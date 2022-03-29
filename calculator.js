var hist1;
var hist2;
function clearscreen(){
    var clr1 =document.getElementById("display-box");
    var clr2 =document.getElementById("result");
    clr1.value="";
    clr2.value="";
}
function display(value){
    var num=document.getElementById("display-box");
    num.value+=value;
}
function del(){
    var val=document.getElementById("display-box");
    if(val.value.length>0){
        val=val.value.slice(0, val.value.length - 1);
        document.getElementById("display-box").value= val;
    }
}
function ans(){
    var num=document.getElementById("result");
    document.getElementById("display-box").value=num.value;
}
function history(){
    document.getElementById("display-box").value=hist1;
    document.getElementById("result").value=hist2;

}
function calculate(){
    var x=document.getElementById("display-box")
    var z=eval(x.value);
     hist1=x.value
     hist2=z
    document.getElementById("result").value=z;
}