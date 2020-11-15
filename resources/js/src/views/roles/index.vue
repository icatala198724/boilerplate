<template>
<vx-card title="Lista de roles">
    <template slot="actions">
        <router-link :to="'/roles/create'">
            <vs-button color="primary" type="filled">Crear nuevo</vs-button>

        </router-link>

    </template>
    <vs-table max-items="5" pagination search :data="listRoles">

        <template slot="thead">
            <vs-th sort-key="email">
                Nombre
            </vs-th>
            <vs-th>
                Guard
            </vs-th>

            <vs-th>
                Acciones
            </vs-th>

        </template>

        <template slot-scope="{ data }">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].name">
                    {{ data[indextr].name }}
                </vs-td>
                <vs-td :data="data[indextr].guard_name">
                    {{ data[indextr].guard_name }}
                </vs-td>

                <vs-td>
                    <div class="btn-group">
                        <router-link :to="{name :'roles.edit', params: {id: data[indextr].id}}">
                            <vs-button color="warning" type="filled">Editar</vs-button>
                        </router-link>
                        <vs-button color="danger" type="filled" @click="borrarRol(data[indextr].id)">Borrar</vs-button>
                    </div>
                </vs-td>

            </vs-tr>
        </template>
    </vs-table>
</vx-card>
</template>

<script>
import axios from "axios";
export default {
    components: {},
    data() {
        return {
            listRoles: [],
            activeConfirm: false,
            rolBorrar: 0
        };
    },
    methods: {
        borrarRol(id) {
            this.rolBorrar = id
            this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: `Confirm`,
                text: 'Desea borrar el Rol con id:' + id,
                accept: this.confirmarBorrado
            })

        },

        confirmarBorrado() {
            console.log("borramos el rol:" + this.rolBorrar)
            var url = '/api/v1/admin/roles/delete';
            axios.post(url, {

                id: this.rolBorrar

            }).then(response => {
                console.log(response.data)
                //this.users = []
                this.getListarRoles()
            })
        },
        getListarRoles() {
            var url = '/api/v1/admin/roles/getRoles';

            axios.get(url).then(response => {
                //console.log(response.data)
                this.listRoles = response.data.roles
            })
        },

    },
    mounted() {
        this.getListarRoles()
    },
};
</script>
