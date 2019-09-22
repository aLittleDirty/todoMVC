(function(expose){
    
     expose.todoStorage={
         set:function(todos){
             localStorage.setItem('todos',JSON.stringify(todos));
         },
         get:function(){
             return JSON.parse(localStorage.getItem('todos')||'[]');
         }
     }
})(window);