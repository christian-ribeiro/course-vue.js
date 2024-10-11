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
    }
}

Vue.createApp(handlingForms).mount('#app');