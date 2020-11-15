<template>
<vx-card no-shadow>

    <!-- Info -->
    <vs-input class="w-full mb-base" label-placeholder="Nombre del Rol" v-model="name"></vs-input>

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
            name: '',

        }
    },
    computed: {

    },
    methods: {
        resetCampos() {

            this.name = ''

        },
        crearUsuario() {

            if (this.name == '') {
                this.$vs.notify({
                    title: 'Error',
                    text: 'Todos los campos son necesarios',
                    color: 'danger',
                    position: 'top-right'
                })
            } else {
                if (this.password != this.cPassword) {
                    alert('Los password no coinciden')
                } else {
                    var url = '/api/v1/admin/roles/store'
                    axios.post(url, {
                            name: this.name,

                        })
                        .then(response => {
                            console.log(response.data)
                            this.$vs.notify({
                                title: 'Rol creado',
                                text: 'Se ha creado corréctamente el rol:' + this.name,
                                color: 'success',
                                position: 'top-right'
                            })
                            this.$router.push('/roles')

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
