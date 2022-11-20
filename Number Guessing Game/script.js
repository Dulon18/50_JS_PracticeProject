let msg =document.getElementById('message1');
let msg1=document.getElementById('message2');
let msg2=document.getElementById('message3');


let answer = Math.floor(Math.random()*100)+1;
let guesses=0;
let gussed_num=[];

function play(){
    let user_guess=document.getElementById("guess").value;
    if(user_guess<1 || user_guess>100)
    {
        alert("Please Enter a number between 1 to 100");
    }
    else{
        gussed_num.push(user_guess);
        guesses+=1;
        if(user_guess< answer)
        {
            msg.textContent="You guess is Too low .. Try Again";
            msg1.textContent="No of Guesses: "+ guesses;
            msg2.textContent="Guessed number are : "+ gussed_num;
        }
        else if(user_guess >answer)
        {
            msg.textContent="You guess is Too High .. Try Again";
            msg1.textContent="No of Guesses: "+ guesses;
            msg2.textContent="Guessed number are : "+ gussed_num;
        }
        else if(user_guess == answer)
        {
            msg.textContent="Congratulations...You Win!!";
            msg1.textContent="The number was : "+ answer;
            msg2.textContent="You Guessed it in  "+ gussed_num +" Guessed";
            document.getElementById('btn').disabled=true;
        }
    }
}
