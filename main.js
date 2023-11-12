var result = document.getElementById("result");

function AC_click(){
    result.innerHTML = "0";
}

function equal_click(){
    result.innerHTML = digitNum(eval(result.innerHTML));
}

function digitNum(num) {
    return Math.round(num*10000000000000)/10000000000000;
}

function num_click(button){
    if(result.innerHTML == "0"){
        result.innerHTML = button;
    }else{
        result.innerHTML += button;
    }
}

function dot_click(button){
    if (result.innerHTML.slice(-1) == "+" || result.innerHTML.slice(-1) == "-" || result.innerHTML.slice(-1) == "*" || result.innerHTML.slice(-1) == "/"){
        result.innerHTML = result.innerHTML + "0" + button;
    } else if (result.innerHTML.slice(-1) == "."){
        result.innerHTML = result.innerHTML.slice(0,-1) + button;
    } else {    
        result.innerHTML += button;
    }
}

function twozeros_click(button){
    if(result.innerHTML == "0"){
        result.innerHTML = "0";
    }else{
        result.innerHTML += button;
    }
}

function ope_click(button){
    if(result.innerHTML == "0"){
        result.innerHTML = "0";
    } else if (result.innerHTML.slice(-1) == "+" || result.innerHTML.slice(-1) == "-" || result.innerHTML.slice(-1) == "*" || result.innerHTML.slice(-1) == "/"){
        result.innerHTML = result.innerHTML.slice(0,-1) + button;
    } else {
        result.innerHTML += button;
    }
}

function minus_click(button){
    if(result.innerHTML == "0"){
        result.innerHTML = button;
    } else if (result.innerHTML.slice(-1) == "+" || result.innerHTML.slice(-1) == "-"){
        result.innerHTML = result.innerHTML.slice(0,-1) + button;
    } else {
        result.innerHTML += button;
    }
}