const { createApp } = Vue

createApp({
    data() {
        return {
            array: ["Andare in palestra", "fare sport", "Giocare con la figlia", "Cucinare", "Comprare ventilatore"
            ],
            cosaNuova:"",
            elementoSelezionato: null,
        }
    },
    methods: {
        nuovaCosa(){
            if(this.cosaNuova != "") {
                this.array.push(this.cosaNuova)
            }
            this.cosaNuova = ""
        },

        selezionaCosa(i){
            this.elementoSelezionato = i
        },

        rimuoviCosa(i){
            if(this.elementoSelezionato != null){
            this.array.splice(i, 1)
            }
            this.elementoSelezionato = null
        },

    }
}).mount('#app')
