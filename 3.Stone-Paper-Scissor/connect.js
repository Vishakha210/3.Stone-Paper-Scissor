const choices=document.querySelectorAll(".choice");
const userscorepara=document.querySelector("#user_score");
const compscorepara=document.querySelector("#comp_score");
const msg=document.querySelector("#msg");

let userscore=0;
let compscore=0;


choices.forEach((c)=>{
    // console.log(c);//ever individual choice wala div
    c.addEventListener("click",()=>{
        let userchoiceid=c.getAttribute("id");
        // console.log("choice was selected",userchoiceid);
        playgame(userchoiceid);
    });
});

//Generating computer choice
const gencompchoice=()=>{
    const option=["rock","paper","scissors"];
    const randomid=Math.floor(Math.random()*3);
    return option[randomid];
}

const drawgame=()=>{
    // console.log("game was draw");
    msg.innerText="It's Draw! Play again";
    msg.style.backgroundColor="#356109";
    msg.style.color="black";

}
const showWinner=(userwin,userchoiceid,computerchoice)=>{
    if(userwin){
        // console.log("you win!");
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`you win! your ${userchoiceid} beats ${computerchoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color="black";

    }
    else{
        // console.log("you lose!"); 
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`you lose! ${computerchoice} beats ${userchoiceid}`;
        msg.style.backgroundColor = "red";
        msg.style.color="black";
    }
}
const playgame=(userchoiceid)=>{
    //user selected choice
    console.log("user choice=",userchoiceid);

    //computer generated choice
    const computerchoice=gencompchoice();
    console.log("comp choice:",computerchoice);

    //to find winner
    if(userchoiceid===computerchoice){
        //1]draw game
        drawgame();
    }
    else{
        //Keeping a valuable which will keep a track of whether user wins or not
        let userwin=true;
        if(userchoiceid==="rock"){
            //Of course computer choice can't be rock... as if rock then the above if condition only we will give  the message that it is draw
            //Food checking for paper and stone
            userwin=computerchoice==="paper"?false:true;
            //False means user loses as User:rock  comp:paper
            //true means user:rock comp:scissor
        }
        else if(userchoiceid==="paper"){
            userwin=computerchoice==="scissor"?false:true;
        }
        else{
            userwin=computerchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoiceid,computerchoice);
    };
};

