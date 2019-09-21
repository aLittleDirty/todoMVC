let app = new Vue({
    el: '#todoApp',
    data: {
        todoText: '',
        todos: [],
        isUpper:true,
        beforeEditCache:''
        
    },
    computed: {
            activeTodos:function(){
                return this.todos.filter(todo=>{
                    return todo.completed==false;
                })
            },
            completedTodos:function(){
                return this.todos.filter(todo=>{
                    return todo.completed==true;
                })
        },
        allDone:{
            get:function(){
                return false;
            },
            set:function(value){
                this.todos.forEach(todo => {
                    todo.completed=value;
                });
            }
        },
        plural:function(){
            return 'item'+(this.activeTodos.length==1?'':'s');
        }
    },
    methods: {
        addTodo: function () {
            if(this.todoText==''){
                return;
            }
            this.todos.push({id: this.todos.length,title: this.todoText,completed: false});
            this.todoText = '';
        },
        removeTodo:function(todo){
            let index=this.todos.indexOf(todo);
            this.todos.splice(index,1);
        },
        removeCompleted:function(){
            this.todos=this.activeTodos;
        },
        hideUpper:function(event,todo){
            this.isUpper=false;
            event.target.parentNode.nextElementSibling.focus();
            this.beginEdit(todo);
        },
        beginEdit:function(todo){
            this.beforeEditCache=todo.title;
        },
        cancelEdit:function(todo){
            todo.title=this.beforeEditCache;
            this.beforeEditCache='';
            event.target.blur();
        },
        doneEdit:function(todo){
            todo.title=todo.title.trim();
            event.target.blur();
        },
        

      
    }

})