var tasks = []

const handlingForms = {
    data() {
        return {
            tasks: window.tasks,
            newTask: {}
        }
    },
    methods: {
        addTask: function () {
            if (!this.newTask.description) {
                alert('All fields must be filled')
                return
            }

            this.tasks.push(this.newTask)
            this.newTask = {}
        }
    },
    created() {
        this.tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : this.tasks;
    },
    updated() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
}

Vue.createApp(handlingForms).mount('#app');