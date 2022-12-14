const { createApp } = Vue
createApp({
    data(){
        return{
            userToDo : '',
            toDoList :[
                {
                    name : 'buying grocieries',
                    done : true,
            },
            {
                    name : 'make lunch',
                    done : true,
            },
            {
                    name : 'do homework',
                    done : false,
            },
            {
                    name : 'make dinner',
                    done : false,
            },
            {
                    name : 'get ready for work',
                    done : true,
            },
        ],

        }
    },

    methods:{

        addNewTask(){
            if(this.userToDo.length >= 2){
                this.userToDo = {name : this.userToDo}
                this.toDoList.push(this.userToDo);
            }else{
                alert('Non puoi aggiungere elementi con meno di 2 caratteri nella lista');
            }
            this.userToDo = '';
        },

        removeItem(index){
            this.toDoList.splice(index, 1);
        }
    }

}).mount('#app');
