<script>
import AppCard from './AppCard.vue';

import { store } from '../store.js';

export default {
    components: {
        AppCard
    },
    data() {
        return{
            store
        }
    }
}
</script>

<template lang="">
    <div class="contaniner">
        <div class="row">
            <div v-for="(film, index) in store.list" :key="index">
                <AppCard :myFilm="film"/>
                <hr>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/generals.scss' as*;

</style>