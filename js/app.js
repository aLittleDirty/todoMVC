let app = new Vue({
    el: '#todoApp',
    data: {
        todoText: '',
        todos: [],
        readOnlyState:true
        
    },
    computed: {
            active:function(){
                return this.todos.filter(todo=>{
                    return todo.completed==false;
                })
            },
            done:function(){
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
        setReadOnly:function(){
            this.readOnlyState=true;
        },
        removeReadOnly:function(event){
            this.readOnlyState=false;
            console.log(event.target);

            event.target.onselectstart=function(){
                return false;
            }
        },
        removeTodo:function(todo){
            let index=this.todos.indexOf(todo);
            this.todos.splice(index,1);
        },
        removeCompleted:function(){
            this.todos=this.active;
        }
    }

})