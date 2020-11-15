<template>
<vx-card no-shadow>

    <!-- Info -->
    <vs-input class="w-full mb-base" label-placeholder="Usuario" v-model="username"></vs-input>
    <vs-input class="w-full mb-base" label-placeholder="Nombre" v-model="firstName"></vs-input>
    <vs-input class="w-full mb-base" label-placeholder="Apellidos" v-model="lastName"></vs-input>
    <vs-input class="w-full mb-base" label-placeholder="Email" v-model="email"></vs-input>
    <vs-input type="password" class="w-full mb-base" label-placeholder="Password" v-model="password"></vs-input>
    <vs-input type="password" class="w-full mb-base" label-placeholder="Confirmar password" v-model="cPassword"></vs-input>

    <vs-alert icon-pack="feather" icon="icon-info" class="h-full my-4" color="warning">
        <span>La cuenta se creará sin activar.</span>
    </vs-alert>

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
        <vs-button class="ml-auto mt-2" @click="crearUsuario()">Guardar cambios</vs-button>
        <vs-button class="ml-4 mt-2" type="border" color="warning" @click="resetCampos()">Reset</vs-button>
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
            password: '',
            cPassword: '',
            email: '',
            created: false
        }
    },
    computed: {

    },
    methods: {
        resetCampos() {

            this.username = '',
                this.firstName = '',
                this.lastName = '',
                this.password = '',
                this.cPassword = '',
                this.email = ''

        },
        crearUsuario() {

            if (this.password == '' || this.cPassword == '' || this.username == '' || this.firstName == '' || this.lastName == '' ||
                this.email == '') {
                alert('Todos los campos son requeridos')
            } else {
                if (this.password != this.cPassword) {
                    alert('Los password no coinciden')
                } else {
                    var url = '/api/v1/admin/users/store'
                    axios.post(url, {
                            firstName: this.firstName,
                            lastName: this.lastName,
                            email: this.email,
                            username: this.username,
                            password: this.password
                        })
                        .then(response => {
                            console.log(response.data)
                            this.$vs.notify({
                                title: 'Usuario creado',
                                text: 'Se ha creado corréctamente el usuario',
                                color: 'success',
                                position: 'top-right'
                            })
                            this.$router.push('/users')

                        })
                        .catch((error => {
                            console.log(error.response);
                            this.$vs.notify({
                                title: 'Hubo un error',
                                text: error.response,
                                color: 'danger',
                                position: 'top-right'
                            })
                        }))

                }
            }
        }
    },
}
</script>
