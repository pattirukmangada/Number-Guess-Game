let random_number=Math.floor(Math.random()*20)+1;
console.log(random_number)
var Score=20;
let score=0;
let High_Score=0
document.getElementById('score_D').innerHTML=Score;
document.getElementById('score_H').innerHTML=High_Score;

document.getElementById('again').addEventListener('click',()=>{
    random=document.getElementById('again').innerHTML=Math.floor(Math.random()*20)+1;
    Generated_input=document.getElementById('G_input').value;
    document.getElementById('demo').style.display="none";
    document.getElementById('cover').style.display="block";
    document.getElementById('demo').innerHTML=random
    Score=20;
    document.getElementById('score_D').innerHTML=Score;
    random_number=random;
    document.getElementById('body').style.background='black';
    console.log(random)
    if(Score<High_Score)
    {
        document.getElementById('score_H').innerHTML=Score;
    }
})

document.getElementById('btn').addEventListener('click',()=>{
    document.getElementById('demo').innerHTML=random_number
    rukman();
})
function rukman(){
    var Generated_input=document.getElementById('G_input').value;
    if(Generated_input<random_number)
        {
            score=--Score;
            document.getElementById('score_D').innerHTML=score;
            document.getElementById('status').innerHTML='To Low..!';
        }
         else if(Generated_input>random_number)
        {
            score=--Score;
            document.getElementById('score_D').innerHTML=score;
            document.getElementById('status').innerHTML="To High..!";
            
        }
        else
        {
            document.getElementById('status').innerHTML="Guessing Correct..!";
            document.getElementById('body').style.background='green';
            document.getElementById('demo').style.display="block";
            document.getElementById('cover').style.display="none";
            document.getElementById('score_H').innerHTML=Score;
        }
        if(Score==0){
            document.getElementById('body').style.background="red";
        }
}

