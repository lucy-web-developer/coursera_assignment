(function (window) {
  var speak="Hello"
  var speakHello = {};
  speakHello.speak= speak;
  speakHello.sayHello=function (name) {
  console.log(speak +" "+ name);  
  };  
  window.speakHello = speakHello; 
  
    
})(window);

(function (window) {
   var speak="Goodbye"
   var speakGoodbye = {};
   speakGoodbye.speak=speak;
   speakGoodbye.sayGoodbye=function (name) {
   console.log(speak+" "+name);
 };
  window.speakGoodbye = speakGoodbye;                  
}) (window);

(function () {
  var names=["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim","Lucy"];
for (var i=0;i<names.length;i++) {
  if (names[i][0].toLowerCase()==='j') { 
    speakHello.sayHello(names[i]);  
  }
  else{
   speakGoodbye.sayGoodbye(names[i]); 
  }
}
})();
