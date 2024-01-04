
let root = document.getElementById("root");
let body = document.getElementById("body");

root.addEventListener('click' , function() {
   
   let size = randomSize();

   function getRandomColor2() {
      let letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
   }

   let randomBackground = getRandomColor2();

   let ballRandom = document.createElement("div");
   ballRandom.className = "ballRandom";
   ballRandom.style.backgroundColor = randomBackground;
   document.body.prepend(ballRandom);
   



   ballRandom.addEventListener('mouseover' , function() {
      const intervalId = setInterval(function() {
         size += 1;
         ballRandom.style.width = size + "px";
         ballRandom.style.height = size + "px";
         
         ballRandom.addEventListener('mouseleave' , function() {
            clearInterval(intervalId);
         });
   
         if (size >= 1745) {
            clearInterval(intervalId);
         }
      }, 10);
      }
   );


   function randomSize () {
      let sizeScale = "1234567890000000";
      let number = '';
      let overValue = 700;
      for (let i=0 ; i <=2 ; i++) {
         let randomIndex = Math.floor(Math.random() * sizeScale.length);
         number += sizeScale[randomIndex];
         if ( number > overValue) {
            number -= 300;
         }
      }
      return number + 'px';
   }

   function randomHeight () {
      let sizeScale = "1234567890000";
      let number = '';
      let overValue = 866;
      for (let i=0 ; i <=2 ; i++) {
         let randomIndex = Math.floor(Math.random() * sizeScale.length);
         number += sizeScale[randomIndex];
         if ( number > overValue) {
            number -= 300;
         }
      }
      return number + 'px';
   }
   
   function randomForRandom() {
      let sizeScale = "23"
      let number = '';
      for (let i=0 ; i <1 ; i++) {
         let randomIndex = Math.floor(Math.random() * sizeScale.length);
         number += sizeScale[randomIndex];
      }
      return parseInt(number);
   }
   
   function randomSideWidth () {
      let sizeScale = "1234567890000";
      let number = '';
      let overValue = 1745;
      for (let i=0 ; i <= randomForRandom() ; i++) {
         let randomIndex = Math.floor(Math.random() * sizeScale.length);
         number += sizeScale[randomIndex];
         if ( number > overValue) {
            number = 1745 - randomHeight();
         }
      }
      return number + 'px';
   }

   let z = randomSize();
   
   let y = randomHeight();
   
   let j = randomSideWidth();
   
   
   ballRandom.style.left = j;
   ballRandom.style.top = y;
   ballRandom.style.width = z;
   ballRandom.style.height = z;



   ballRandom.addEventListener('click' , function() {
      function getRandomColor() {
         let letters = '0123456789ABCDEF';
         let color = '#';
         for (let i = 0; i < 6; i++) {
             color += letters[Math.floor(Math.random() * 16)];
         }
         return color;
      }
      
      let getColor = getRandomColor();
      ballRandom.style.backgroundColor = getColor;
   });

   


  }

  
);















