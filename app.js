
const btn=document.querySelectorAll('#btn');
//select value and buttons
const decrease=document.querySelector('.decrease');
const reset=document.querySelector('.reset');
const increase=document.querySelector('.increase');
const value=document.querySelector('#value');
//console.log(btn);


//Set initial count
let count=0;

btn.forEach(function(btn){

    btn.addEventListener('click',function(e){

      const styles=e.currentTarget.classList;
      if(styles.contains('decrease')){
        count --;
      }
      else if(styles.contains('increase')){
        count ++;
      }
      else{
        count=0;
      }
      if(count>0){
        value.style.color="green"
      }
      else if(count<0){

        value.style.color="red";

      }
    else{
        value.style.color="black";
    }
      value.textContent=count;
     

    })


});