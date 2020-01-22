var num = new String;
var sol = 0,numer=0,denom=1,oper=0,operato = new Array,inc=0;
function number(i){
    //checking if operator is pressed
    if(oper != 0)
        num = new String;   //resetting num
    num = num + i;  //making number
    //since number is pressed telling that operator has not been pressed
    oper = 0;
    document.getElementById("display").innerHTML=num;   //display
}
function operator(i){
    //clearing or reserting
    if(i=='C'){
        reset();
        return 0;
    }
    oper++;   //operator is pressed
    if (inc == 0){
        //inital condition for frist operator being pressed
        sol = parseInt(num);
    }
    if(oper==1){
        if(inc>=1){
            if(operato[inc-1]=='+'){
                sol = sol + parseInt(num);
            }else if(operato[inc-1]=='-'){
                sol = sol - parseInt(num);
            }else if(operato[inc-1]=='*'){
                sol = sol * parseInt(num);
            }else if(operato[inc-1] == '/'){
                sol = sol/parseInt(num);
            }
            num = '0';
        }
    }
    operato[inc] = i;
    inc++;
    document.getElementById("display").innerHTML=sol;
    
}
function reset(){
    num = new String,sol = 0,numer=0,denom=1,oper=0,operato = new Array,inc=0;
    document.getElementById("display").innerHTML="0000";
}