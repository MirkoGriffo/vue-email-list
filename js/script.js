/*
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail 
generare 10 indirizzi email e stamparli in pagina all'interno di una lista
 con Vue JS e Axios.
*/

const app = new Vue({
    el: "#app",
    data: {
        email: [],
    },

    computed: {
        dataOk() {
            return this.email.length === 10
        }
    },


    created() {
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(result => {
                    this.email.push(result.data.response)
                })

                .catch(error => {
                    console.log(error);
                });
        }

    }
});