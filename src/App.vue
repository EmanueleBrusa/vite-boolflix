<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import { store } from './store.js'



export default {
    components: {
        AppHeader,
        AppMain,
    },
    data(){
        return{
            store
        }
    },
    mounted(){
        this.getFilm()
    },
    methods: {
        getFilm() {
            if (store.searchFilm !== '') {
                store.filmUrl += `&query=${store.searchFilm}`;
                store.tvUrl += `&query=${store.searchFilm}`;
            }
            axios.get(store.tvUrl).then((response) => {
                store.tvsObj = response.data.results;
                console.log(store.tvsObj);
            })
            axios.get(store.filmUrl).then((response) => {
            store.filmsObj = response.data.results;
            console.log(store.filmsObj);
            })
        }
    }
}
</script>

<template>
<div class="header fixed-top">
    <AppHeader @filmSearch="getFilm" />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
</div>
<div class="main">
    <AppMain />
</div>
</template>

<style lang="scss">
@use './styles/generals.scss' as*;
</style>
