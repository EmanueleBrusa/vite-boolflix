<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <h1>BOOLFLIX</h1>
            <div class="input-group rounded">
                <input type="search" class="form-control rounded" placeholder="Ricerca qui il tuo film o serie preferita" aria-label="Search" aria-describedby="search-addon" v-model="store.searchValue"/>
                <button class="m-1" @click="$emit('search')">Ricerca</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as*;


h1{
    color: red;
}

</style>