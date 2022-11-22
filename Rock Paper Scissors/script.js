let [comp_score,user_score]=[0,0];
let result_ref=document.getElementById("result");
let choice_obj={
    'rock':{
        'rock':'draw',
        'scissor':'win',
        'paper':'lose'
    },
    'scissor':{
        'rock':'lose',
        'scissor':'draw',
        'paper':'win'
    },
    'paper':{
        'rock':'win',
        'scissor':'lose',
        'paper':'draw'
    }
}

function checker(input){

    var choices=["rock","paper","scissor"];
    var num=Math.floor(Math.random()*3);

    document.getElementById("comp_choice").innerHTML=`Computer choose <span> ${choices[num].toUpperCase()}</span>`;
    document.getElementById("user_choice").innerHTML=`You choose <span>${input.toUpperCase()}</span>`;

    let comp_choice = choices[num];

    switch(choice_obj[input][comp_choice])
    {
        case 'win':
            result_ref.style.cssText="background-color:#cefdce;color:#689f38; padding:30px; border-radius:10px"
            result_ref.innerHTML="You Win";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText="background-color:#ffdde0;color:#d32f2f; padding:30px; border-radius:10px"
            result_ref.innerHTML="You Lose";
            comp_score++;
            break;
         default:
                result_ref.style.cssText="background-color:#e5e5e5;color:#808080; padding:30px;border-radius:10px"
                result_ref.innerHTML="Draw";
                break;
    }

    document.getElementById("comp_score").innerHTML=comp_score;
    document.getElementById("user_score").innerHTML=user_score;
}
