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
    data() {
        return {
            store
        }
    },
    mounted(){
        this.getFilm();
    },
    methods: {
      getFilm(){
        
            let myUrl = store.apiUrl;
            
            if (store.searchValue !== '') {
                myUrl += `&query=${store.searchValue}`;
            }
            
            axios.get(myUrl).then((response) => {
                store.list = response.data.results;
            });
        } 
    }
}
</script>

<template>
    <div class="header">
        <AppHeader @search="getFilm"/>  
    </div>
    <div class="main">
        <AppMain />
    </div>
</template>

<style lang="scss">
@use '../src/styles/generals.scss' as*;
</style>
