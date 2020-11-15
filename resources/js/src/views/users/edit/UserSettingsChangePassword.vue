<template>
<vx-card no-shadow>

    <vs-input type="password" class="w-full mb-base" label-placeholder="Nuevo Password" v-model="new_password" />
    <vs-input type="password" class="w-full mb-base" label-placeholder="Confirma Password" v-model="confirm_new_password" />

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
        <vs-button class="ml-auto mt-2" @click="guardarPassword()">Guardar cambios</vs-button>
        <vs-button class="ml-4 mt-2" type="border" color="warning">Reset</vs-button>
    </div>
</vx-card>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            new_password: '',
            confirm_new_password: '',
            id: this.$route.params.id
        }
    },
    computed: {

    },
    methods: {
        guardarPassword() {
            console.log('el id:' + this.id)
            if (this.new_password == '' || this.confirm_new_password == '') {
                this.$vs.notify({
                    title: 'Error',
                    text: 'Todos los campos son obligatorios',
                    color: 'danger',
                    position: 'top-right'
                })
            } else if (this.new_password != this.confirm_new_password) {
                this.$vs.notify({
                    title: 'Error',
                    text: 'Los passwords no coinciden',
                    color: 'danger',
                    position: 'top-right'
                })
            } else {
                var url = '/api/v1/admin/users/changePassword';
                console.log(this.new_password)

                axios.post(url, {

                    id: this.id,
                    password: this.new_password,

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

        }
    },
}
</script>
