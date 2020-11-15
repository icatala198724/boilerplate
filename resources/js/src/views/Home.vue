<template>
<!-- ROW 2 -->
<div class="vx-row">

    <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
        <statistics-card-line hideChart class="mb-base" icon="UsersIcon" icon-right :statistic="usuariosRegistrados" statisticTitle="Usuarios Registrados" />
    </div>

    <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
        <statistics-card-line hideChart class="mb-base" icon="UserCheckIcon" icon-right :statistic="usuariosActivos" statisticTitle="Usuarios Activos" color="success" />
    </div>

    <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
        <statistics-card-line hideChart class="mb-base" icon="SmileIcon" icon-right :statistic="rolesRegistrados" statisticTitle="Roles" color="danger" />
    </div>

</div>
</template>

<script>
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import axios from 'axios'
export default {

    components: {
        StatisticsCardLine
    },
    data() {
        return {
            usuariosRegistrados: 0,
            usuariosActivos: 0,
            rolesRegistrados: 0,
            permisosRegistrados: 0,
        }
    },
    methods: {
        cargarEstadisticas() {
            var url = '/api/v1/admin/dashboard/getEstadisticas'
            axios.get(url).then(response => {
                console.log(response.data)
                //this.users = []
                this.usuariosActivos = response.data.usuariosActivos
                this.usuariosRegistrados = response.data.usuariosRegistrados
                this.rolesRegistrados = response.data.rolesRegistrados

            })
        }
    },
    mounted() {
        this.cargarEstadisticas()
    },
}
</script>
