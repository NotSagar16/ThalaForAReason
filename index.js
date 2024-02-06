function checkThala(){
    const str=(document.getElementById("input").value).toString();
    if(str.length==0){
        document.getElementById("result").innerHTML="Invalid Input";
        return;
    }
    else if(str.length==7){
        document.getElementById("result").innerHTML="Thala for a reason";
        return;
    }
    else{
        document.getElementById("result").innerHTML="Not Thala for a reason";
        return;
    }
}