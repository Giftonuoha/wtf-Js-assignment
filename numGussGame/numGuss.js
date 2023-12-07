let gamebtn = document.getElementById('gamebtn');
 
let show = document.getElementById('show');
 
let randomNum = Math.floor(Math.random() * 100);
 
 
gamebtn.addEventListener('click' , function() {
   let userchoice = document.getElementById ('userchoice').value;
   if (userchoice > randomNum) {
    show.innerHTML = `Too high`
   }else if (userchoice < randomNum) {
    show.innerHTML = `Too low`
   }else if(userchoice == randomNum) {
    show.innerHTML = `Correct`
   } else {
    display.innerHTML = `error`
   }
});