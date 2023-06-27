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
            <div class="col d-flex justify-content-between">
                <div>
                    <h1>Boolflix</h1>
                </div>
                <div class="search-container d-flex align-items-center">
                    <input class="form-control form-control-sm me-2" type="text" list="datalistOptions" id="exampleDataList" placeholder="Cerca il tuo film" v-model="store.searchFilm" @keyup.enter="$emit('filmSearch')" />
                    <button type="button" class="btn btn-danger text-white btn-sm" @click="$emit('filmSearch')">Cerca</button>
                </div>
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