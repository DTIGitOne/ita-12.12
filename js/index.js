
let root = document.getElementById("root");
let body = document.getElementById("body");


root.addEventListener('click' , function() {
   

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

   function randomFor4() {
      let sizeScale = "123456"
      let number = '';
      for (let i=0 ; i <1 ; i++) {
         let randomIndex = Math.floor(Math.random() * sizeScale.length);
         number += sizeScale[randomIndex];
      }
      return parseInt(number);
   }

   function randomForRandom4() {
      let sizeScale = "123456789"
      let number = '';
      for (let i=0 ; i < randomFor4()  ; i++) {
         let randomIndex = Math.floor(Math.random() * sizeScale.length);
         number += sizeScale[randomIndex];
      }
      return parseInt(number);
   }
  
  let rnNumber = randomForRandom4();
  
  ballRandom.style.zIndex = rnNumber;



   function randomSize () {
      let sizeScale = "1234567890000000";
      let number = '';
      let overValue = 500;
      for (let i=0 ; i <=2 ; i++) {
         let randomIndex = Math.floor(Math.random() * sizeScale.length);
         number += sizeScale[randomIndex];
         if ( number > overValue) {
            number -= 300;
         }
      }
      return number + 'px';
   }

   function randomSize2 () {
      let sizeScale = "1234567890000000";
      let number = '';
      let overValue = 500;
      for (let i=0 ; i <=2 ; i++) {
         let randomIndex = Math.floor(Math.random() * sizeScale.length);
         number += sizeScale[randomIndex];
         if ( number > overValue) {
            number -= 300;
         }
      }
      return number + 'px';
   }


   
   function removeZero(v) {
      if (typeof v === 'string' && v.charAt(0) === '0') {
        return v.slice(1);
      }
      return v;
    }

    function randomHeight() {
      let sizeScale = "1234567890";
      let number = '';
      let overValue = 953;
      for (let i = 0; i <= 2; i++) {
        let randomIndex = Math.floor(Math.random() * sizeScale.length);
        number += sizeScale[randomIndex];
        if (number > overValue) {
          number -= 1;
        }
      }
      number = removeZero(number);
      return number + 'px';
    }
   
   function randomForRandom() {
      let sizeScale = "23";
      let number = '';
      for (let i = 0; i < 1; i++) {
        let randomIndex = Math.floor(Math.random() * sizeScale.length);
        number += sizeScale[randomIndex];
      }
      return parseInt(number);
    }
    
    
    
    function randomSideWidth() {
      let sizeScale = "12345678900";
      let number = '';
      let overValue = 1920;
      for (let i = 0; i <= randomForRandom(); i++) {
        let randomIndex = Math.floor(Math.random() * sizeScale.length);
        number += sizeScale[randomIndex];
        if (number > overValue) {
         let heightValue = parseFloat(randomHeight()) || 0;
         number = 1920 - heightValue;
        }
        number = removeZero(number);
      }
      return number + 'px';
    }

   let z = randomSize();
   
   let y = randomHeight();
  
   let j = randomSideWidth();

   
   function randomForRandom2() {
      let sizeScale = "01"
      let number = '';
      for (let i=0 ; i <1 ; i++) {
         let randomIndex = Math.floor(Math.random() * sizeScale.length);
         number += sizeScale[randomIndex];
      }
      return parseInt(number);
   }

   let f = randomForRandom2();
   
   let sideChoose = ["left" , "right"];
   let choose1 = sideChoose[f];

   let bgRandom = choose1;
   
   let upDownChoose = ["top" , "bottom"];
   let choose2 = upDownChoose[f];

   let upDownRandom = choose2;
  
   if (bgRandom === "left") {
      ballRandom.style.left = j;
   } else if ( bgRandom === "right") {
      ballRandom.style.right = j;
   }
   if (upDownRandom === "top") {
      ballRandom.style.top = y;
   } else if (upDownRandom === "bottom") {
      ballRandom.style.bottom = y;
   }

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
   
   let size = z;
   let size2 = randomSize2();

   ballRandom.addEventListener('mouseover' , function() {
      let convert = parseFloat(size);
      let convert2 = parseFloat(size2);
      if ( convert < convert2 ) {
         const intervalId = setInterval(function() {

            let increase = convert += 2;
            ballRandom.style.width = increase + 'px';
            ballRandom.style.height = increase  + 'px';
    
            size = increase + 'px';
            
            if (convert >= convert2) {
             clearInterval(intervalId);
           }
          }, 10);
          
          ballRandom.addEventListener('mouseleave', function() {
             clearInterval(intervalId);
           });
      } else if ( convert > convert2 ) {
         const intervalId = setInterval(function() {

            let decrease = convert -= 2;
            ballRandom.style.width = decrease + 'px';
            ballRandom.style.height = decrease  + 'px';
    
            size = decrease + 'px';
            
            if (convert <= convert2) {
             clearInterval(intervalId);
           }
          }, 10);

          
          ballRandom.addEventListener('mouseleave', function() {
             clearInterval(intervalId);
           });
      }
   let widthRemove = ballRandom.style.width;
   let widthRemove2 = parseFloat(widthRemove);
   
   if ( widthRemove2 < 10 ) {
      ballRandom.remove();
   }
   }
   );
     
     
  }

  
);