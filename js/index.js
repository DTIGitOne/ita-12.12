let ball1 = document.getElementById("ball1");
let ball2 = document.getElementById("ball2");
let ball3 = document.getElementById("ball3");
let size = 100;
let size2 = 70;
let size3 = 120;


ball1.addEventListener('mouseover' , function() {
   const intervalId = setInterval(function() {
      size += 1;
      ball1.style.width = [size] + "px";
      ball1.style.height = [size] + "px";
      
      ball1.addEventListener('mouseleave' , function() {
         clearInterval(intervalId);
      });

      if (size >= 500) {
         clearInterval(intervalId);
      }
   }, 10);
   }
);

ball2.addEventListener('mouseover' , function() {
   const intervalId2 = setInterval(function() {
      size2 += 1;
      ball2.style.width = [size2] + "px";
      ball2.style.height = [size2] + "px";
      
      ball2.addEventListener('mouseleave' , function() {
         clearInterval(intervalId2);
      });

      if (size >= 500) {
         clearInterval(intervalId2);
      }
   }, 10);
   }
);

ball3.addEventListener('mouseover' , function() {
   const intervalId3 = setInterval(function() {
      size3 += 1;
      ball3.style.width = [size3] + "px";
      ball3.style.height = [size3] + "px";
      
      ball3.addEventListener('mouseleave' , function() {
         clearInterval(intervalId3);
      });

      if (size >= 500) {
         clearInterval(intervalId3);
      }
   }, 10);
   }
);




ball1.addEventListener('click' , function() {
   function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
   }
   
   let getColor = getRandomColor();
   ball1.style.backgroundColor = getColor;
});

ball2.addEventListener('click' , function() {
   function getRandomColor2() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
   }
   
   let getColor2 = getRandomColor2();
   ball2.style.backgroundColor = getColor2;
});

ball3.addEventListener('click' , function() {
   function getRandomColor3() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
   }
   
   let getColor3 = getRandomColor3();
   ball3.style.backgroundColor = getColor3;
});


