<script>
import { store } from '../store.js';

export default {
    data(){
        return {
            store,
        }
    },
    props:{
        myFilm: Object,
    }
}
</script>

<template lang="">
    <h1>Risultato ricerca</h1>
    <div>
        <h3>{{ myFilm.title }}</h3>
        <h4>{{ myFilm.original_title }}</h4>
        <h4>{{ myFilm.original_language }}</h4>
        <h5>{{ myFilm.vote_average }}</h5>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/generals.scss' as*;
    
</style>