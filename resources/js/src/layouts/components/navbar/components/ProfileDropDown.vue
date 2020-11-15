<template>
<div class="the-navbar__user-meta flex items-center" v-if="activeUserInfo.displayName">

    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
        <div class="text-right leading-tight hidden sm:block">
            <p class="font-semibold">{{ nombre }} {{apellidos}}</p>
            <small>Online</small>
        </div>

        <vs-dropdown-menu class="vx-navbar-dropdown">
            <ul style="min-width: 9rem">

                <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
                    <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
                    <span class="ml-2">Profile</span>
                </li>

                <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
                    <feather-icon icon="MailIcon" svgClasses="w-4 h-4" />
                    <span class="ml-2">Inbox</span>
                </li>

                <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
                    <feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4" />
                    <span class="ml-2">Tasks</span>
                </li>

                <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
                    <feather-icon icon="MessageSquareIcon" svgClasses="w-4 h-4" />
                    <span class="ml-2">Chat</span>
                </li>

                <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
                    <feather-icon icon="HeartIcon" svgClasses="w-4 h-4" />
                    <span class="ml-2">Wish List</span>
                </li>

                <vs-divider class="m-1" />

                <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white" @click="logout">
                    <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
                    <span class="ml-2">Logout</span>
                </li>
            </ul>
        </vs-dropdown-menu>
    </vs-dropdown>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            nombre: '',
            apellidos: ''
        }
    },
    mounted() {
        /*f (localStorage.access_token) {
            console.log("mi token es:" + localStorage.access_token)
        }*/
        this.cargarUsuario()

    },
    computed: {
        activeUserInfo() {
            return this.$store.state.AppActiveUser
        }
    },
    methods: {
        logout() {
            this.$store.dispatch("destroyToken").then(response => {
                console.log("NAVEGANDO")
                this.$router.push({
                    name: "login"
                });
            });

        },
        cargarUsuario() {
            var url = "/api/auth/user"
            axios.get(url, {
                    headers: {
                        Authorization: "Bearer " + localStorage.access_token
                    }
                })
                .then(response => {
                    console.log(response.data.username)
                    this.nombre = response.data.firstName
                    this.apellidos = response.data.lastName

                })
                .catch(error => {
                    console.log(error)

                })
        }
    }
}
</script>
