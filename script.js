var num = new String;
var sol = 0,numer=0,denom=1,oper=0,operato = new Array,inc=0;
function number(i){
    if(oper == 1)
        num = new String;
    num = num + i;
    oper = 0;
    document.getElementById("display").innerHTML=num;
}
function operator(i){
    if(i=='C'){
        reset();
        return 0;
    }
    oper = 1;
    if (inc == 0){
        sol = parseInt(num);
    }
    if(inc>=1){
        if(operato[inc-1]=='+'){
            sol = sol + parseInt(num);
        }else if(operato[inc-1]=='-'){
            sol = sol - parseInt(num);
        }else if(operato[inc-1]=='*'){
            if(num!='0'){
                if(sol==0){
                    sol = parseInt(num);
                }else{
                    sol = sol * parseInt(num);
                }
            }
        }else if(operato[inc-1] == '/'){
            if(num!='0'){
                if(numer==0){
                    numer = parseInt(num);
                }else{
                    denom = parseInt(num);
                }
                sol = numer/denom;
            }
        }
        num = '0';
    }
    operato[inc] = i;
    inc++;
    document.getElementById("display").innerHTML=sol;
}
function reset(){
    num = new String,sol = 0,numer=0,denom=1,oper=0,operato = new Array,inc=0;
    document.getElementById("display").innerHTML="0000";
}