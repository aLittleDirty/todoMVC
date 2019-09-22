(function(exports){
    var filters={
        all:function(todos){
            return todos;
        },
        active: function (todos) {
            return todos.filter(todo=>{
                return todo.completed == false;
            });
        },
        done: function (todos) {
            return todos.filter(todo => {
                return todo.completed == true;
            });
        },
    };
exports.app = new Vue({
    el: '#todoApp',
    data: {
        todoText: '',
        todos: todoStorage.get(),
        isUpper: true,
        beforeEditCache: '',
        visibility:'all'

    },
    computed: {
        filteredTodos:function(){
            return filters[this.visibility](this.todos);
        },
        remaining:function(){
            return filters.active(this.todos).length;
        },
        allDone: {
            get: function () {
                return false;
            },
            set: function (value) {
                this.todos.forEach(todo => {
                    todo.completed = value;
                });
            }
        },
     
    },
    watch:{
        todos:{
            handler:todoStorage.set,
            deep:true
        },
    },
    methods: {
        plural: function (word,count) {
            return word + (count == 1 ? '' : 's');
        },
        addTodo: function () {
            if (this.todoText == '') {
                return;
            }
            this.todos.push({
                id: this.todos.length,
                title: this.todoText,
                completed: false
            });
            this.todoText = '';
        },
        removeTodo: function (todo) {
            let index = this.todos.indexOf(todo);
            this.todos.splice(index, 1);
        },
        removeCompleted: function () {
            this.todos = filters.active(this.todos);
        },
        hideUpper: function (event, todo) {
            this.isUpper = false;
            event.target.parentNode.nextElementSibling.focus();
            this.beginEdit(todo);
        },
        beginEdit: function (todo) {
            this.beforeEditCache = todo.title;
        },
        cancelEdit: function (todo) {
            todo.title = this.beforeEditCache;
            this.beforeEditCache = '';
            event.target.blur();
        },
        doneEdit: function (todo) {
            todo.title = todo.title.trim();
            if(todo.title==''){
                this.removeTodo(todo);
            };
            event.target.blur();
        },



    }

})
})(window);