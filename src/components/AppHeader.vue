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
            <div class="col d-flex justify-content-between align-items-center mt-1">
                <div class="d-flex align-items-center">
                    <img src="../assets/logo-boolflix@4x.png" alt="logo">
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
img{
    width: 100px;
    height: 40px;
}
</style>