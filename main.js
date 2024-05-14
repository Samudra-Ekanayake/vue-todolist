const { createApp } = Vue

createApp({
    data() {
        return {
            array: ["Andare in palestra", "fare sport", "Giocare con la figlia", "Cucinare", "Comprare ventilatore"
            ],
            cosaNuova:"",
        }
    },
    methods: {
        nuovaCosa(){
            if(this.cosaNuova != "") {
                this.array.push(this.cosaNuova)
            }
            this.cosaNuova = ""
        }

    }
}).mount('#app')
