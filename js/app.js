let app = new Vue({
    el: '#todoApp',
    data: {
        todoText: '',
        todos: [],
        
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
            this.todos.push({
                id: this.todos.length,
                title: this.todoText,
                completed: false
            });
            this.todoText = '';
        },
        //没有让值同步
        // allDone:function(){
        //     if(!this.active.length){
        //         this.todos.forEach(todo => {
        //                 return;
        //             todo.completed=false;
        //         });
        //     }else{
        //         this.active.forEach(todo=>{
        //             todo.completed=true;
        //         });
        //     }
            
        // }
    }

})