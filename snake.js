
let hhh=document.getElementById("high");
let ghs=localStorage.getItem("myscore1");
 console.log("as it is you aspected : ",ghs);
 if(ghs==null){
    console.log("we are trying to set...");
    hhh.innerHTML=0;
}
else{
 hhh.innerHTML=ghs;
}

let direction={x: 0,y: 0};
 let end=0;
 let score=0;
 let snakearr=[{x: 13,y: 15}];
 let food={x:9, y: 9};
 function main(duration){
  window.requestAnimationFrame(main);

  if((duration-end)/1000< 1/19){
      return;
  }

  end=duration;
  Working();
 }

 function isCollide(snake){
  if(snake[0].x>18 || snake[0].x<=0 ||snake[0].y>18 || snake[0].y<=0)
  {
      return true;
  }

  for(let i=1; i<snakearr.length;i++)
  {
   if(snake[0].x=== snake[i].x && snake[0].y===snake[i].y){
       return true; 
   }    
  }

  return false;
 }

 
  function Working(){

    if(isCollide(snakearr))
    {
     alert('GomeOver! press ok to play again');
    //  window.location.reload();
     direction={x: 0,y: 0};
     snakearr=[{x: 13,y: 15}];
     food={x: 9, y: 9};
     let ak=document.getElementById("scorer");
     let akk=document.getElementById("high");

     console.log("score is : ",score);
     console.log("highscore is : ",akk.innerHTML);


     if(score>akk.innerHTML){
     localStorage.setItem("myscore1",score);
      akk.innerHTML=score;
     }

     score=0;
     
     ak.innerHTML=score; 
    }

   //Display the snake head and body
   board.innerHTML='';
   snakearr.forEach((e,index)=> {
       snakeElement=document.createElement('div');
       snakeElement.style.gridRowStart = e.y;
       snakeElement.style.gridColumnStart = e.x; 

       if(index === 0)
       {
           snakeElement.classList.add('head');
       }
       else{
           snakeElement.classList.add('snake');
       }
       board.appendChild(snakeElement);
   });

   //Display the food

    foodElement=document.createElement('div');
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);

   //moving the snake
   for(let i=snakearr.length-2;i>=0;i--)
   {
    snakearr[i+1]={...snakearr[i]};   
   }

   snakearr[0].x += direction.x;
   snakearr[0].y +=direction.y;

   //feeding the snake 
   if(snakearr[0].x===food.x && snakearr[0].y===food.y)
   {
    snakearr.unshift({x: snakearr[0].x + direction.x,y: snakearr[0].y + direction.y});   

    let a=2;
    let b=16;
    food={ x: Math.round( a+(b-a)*Math.random()) ,y: Math.round( a+(b-a)*Math.random())};
    score++;
    let ak=document.getElementById("scorer");
    let highs=document.getElementById("high");
    if(ak.innerHTML>=highs.innerHTML){
        highs.innerHTML=score;
    }
    ak.innerHTML=score; 
   }

  //if food is generated inside snakebody

//   snakearr.forEach(e=>{

   for(let i=0;i<snakearr.length;i++)
   {
      if(snakearr[i].x===food.x && snakearr[i].y===food.y)
      {
          console.log('change performed');
          let a=2;
          let b=16;
          food={ x: Math.round( a+(b-a)*Math.random()) ,y: Math.round( a+(b-a)*Math.random())};
      }
   }
//   })

  }
  


  window.requestAnimationFrame(main);

  window.addEventListener('keydown',e=>{
   
    switch (e.key) {
        case 'ArrowUp':
            //  console.log('ArrowUp');
             direction.x=0;
             direction.y=-1;
            break;

            case 'ArrowDown':
            //  console.log('ArrowDown');
             direction.x=0;
             direction.y=1;
            break;

            case 'ArrowLeft':
            //  console.log('ArrowLeft');
             direction.x=-1;
             direction.y=0;
            break;

            case 'ArrowRight':
            //  console.log('ArrowRight');
             direction.x=1;
             direction.y=0;
            break;
    
        default:
            break;
    }
  });

  
