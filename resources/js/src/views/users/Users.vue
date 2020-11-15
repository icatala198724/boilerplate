<template>
<vx-card title="Lista de usuarios">
    <template slot="actions">
        <router-link :to="'/users/create'">
            <vs-button color="primary" type="filled">Crear nuevo</vs-button>

        </router-link>

    </template>
    <vs-table max-items="5" pagination search :data="users">

        <template slot="thead">
            <vs-th sort-key="email">
                Email
            </vs-th>
            <vs-th>
                Username
            </vs-th>
            <vs-th>
                Nombre completo
            </vs-th>
            <vs-th sort-key="active">
                Activo
            </vs-th>
            <vs-th>
                Acciones
            </vs-th>

        </template>

        <template slot-scope="{ data }">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].email">
                    {{ data[indextr].email }}
                </vs-td>
                <vs-td :data="data[indextr].username">
                    {{ data[indextr].username }}
                </vs-td>

                <vs-td :data="data[indextr].firstName">
                    {{ data[indextr].firstName }} {{ data[indextr].lastName }}
                </vs-td>

                <vs-td :data="data[indextr].active">
                    <vs-switch v-model="data[indextr].active" @click="cambiarEstado(data[indextr].id)" color="success">
                        <span slot="on">On</span>
                        <span slot="off">Off</span>
                    </vs-switch>
                </vs-td>
                <vs-td>
                    <div class="btn-group">
                        <router-link :to="{name :'users-edit', params: {id: data[indextr].id}}">
                            <vs-button color="warning" type="filled">Editar</vs-button>
                        </router-link>
                        <vs-button color="danger" type="filled" @click="borrarUsuario(data[indextr].id)">Borrar</vs-button>
                    </div>
                </vs-td>

            </vs-tr>
        </template>
    </vs-table>
</vx-card>
</template>

<script>
import axios from "axios";
import Axios from 'axios';
export default {
    components: {},
    data() {
        return {
            users: [],
            activeConfirm: false,
            usuarioBorrar: 0
        };
    },
    methods: {
        borrarUsuario(id) {
            this.usuarioBorrar = id
            this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: `Confirm`,
                text: 'Desea borrar el usuario con id:' + id,
                accept: this.confirmarBorrado
            })

        },

        confirmarBorrado() {
            console.log("borramos el usuario:" + this.usuarioBorrar)
            var url = '/api/v1/admin/users/delete';
            axios.post(url, {

                id: this.usuarioBorrar

            }).then(response => {
                console.log(response.data)
                //this.users = []
                this.getListarUsuarios()
            })
        },
        getListarUsuarios() {
            var url = '/api/v1/admin/users/index';

            Axios.get(url).then(response => {
                //console.log(response.data)
                this.users = response.data.users
            })
        },
        cambiarEstado(id) {
            console.log("Cambiar id:" + id)
            var url = '/api/v1/admin/users/changeStatus';
            Axios.get(url, {
                params: {
                    id: id
                }
            }).then(response => {
                console.log(response.data)
                //this.users = []
                this.getListarUsuarios()
            })
        }
    },
    mounted() {
        this.getListarUsuarios()
    },
};
</script>
