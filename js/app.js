let app = new Vue({
    el: '#todoApp',
    data: {
        todoText: '',
        todos: []
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
        }
    }

})