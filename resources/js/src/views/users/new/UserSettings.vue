<template>
<!-- GENERAL -->
<user-settings-general />
</template>

<script>
import UserSettingsGeneral from './UserSettingsGeneral.vue'

export default {
    components: {
        UserSettingsGeneral
    },
    data() {
        return {

        }
    },
    computed: {
        isSmallerScreen() {
            return this.$store.state.windowWidth < 768
        }
    }
}
</script>

<style lang="scss">
#profile-tabs {
    .vs-tabs--content {
        padding: 0;
    }
}
</style>
