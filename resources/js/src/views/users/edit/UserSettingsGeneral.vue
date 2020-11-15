<template>
<vx-card no-shadow>

    <!-- Info -->
    <vs-input class="w-full mb-base" label-placeholder="Username" v-model="username"></vs-input>
    <vs-input class="w-full mb-base" label-placeholder="Nombre" v-model="firstName"></vs-input>
    <vs-input class="w-full mb-base" label-placeholder="Apellidos" v-model="lastName"></vs-input>
    <vs-input class="w-full mb-base" label-placeholder="Email" v-model="email"></vs-input>

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
        <vs-button class="ml-auto mt-2" @click="actualizarCampos()">Guardar cambios</vs-button>
    </div>
</vx-card>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            id: this.$route.params.id

        }
    },
    computed: {

    },
    mounted() {
        this.buscarUsuario()
    },
    methods: {
        buscarUsuario() {
            console.log('veamos el usuario:' + this.id)
            var url = '/api/v1/admin/users/search'
            axios.post(url, {

                id: this.id

            }).then(response => {
                console.log(response.data)
                //this.users = []
                var usuario = response.data.user
                this.username = usuario.username
                this.firstName = usuario.firstName
                this.lastName = usuario.lastName
                this.email = usuario.email

            })
        },
        actualizarCampos() {
            var url = '/api/v1/admin/users/update'
            axios.post(url, {

                id: this.id,
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                username: this.username

            }).then(response => {
                console.log(response.data)
                //this.users = []
                this.$vs.notify({
                    title: 'Usuario Actualizado',
                    text: 'Se ha actualizado corréctamente el usuario',
                    color: 'success',
                    position: 'top-right'
                })
                this.$router.push('/users')

            })
        }
    },
}
</script>
