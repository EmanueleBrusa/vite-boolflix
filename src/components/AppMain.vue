<script>

import { store } from '../store.js';

export default {
    data() {
        return{
            store
        }
    },
    methods: {
        getCountryFlag(language) {
        return `../../node_modules/country-flag-icons/1x1/${language.toUpperCase()}.svg`;
        },
    }
}
</script>

<template >
    <div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="film">
                        <ul>
                            <li class="" v-for="(film, index) in store.filmsObj" :key="index">
                                <img :src="`https://image.tmdb.org/t/p/w342/${film.poster_path}`" alt="">
                                <div class="film d-flex">
                                    <div class="me-3">{{ film.original_title }}</div>
                                    <img class="cntr-flag"
                                        :src="`../../node_modules/country-flag-icons/1x1/${film.original_language.toUpperCase()}.svg`"
                                        :alt="film.original_language.toUpperCase()">
                                    <!--<div class="me-3">{{ film.vote_average }}</div>-->
                                    <div>
                                        <span>
                                            Voto:&nbsp;
                                            <i v-for="star in Math.round(film.vote_average / 2)" :key="star" class="fa-solid fa-star" style="color: #e9e316"></i>
                                            <i v-for="star in Math.round(5 - film.vote_average / 2)" :key="star" class="fa-regular fa-star" style="color: #e9e316"></i>
                                        </span>
                                    </div>
                                    
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="tv">
                        <ul>
                            <li v-for="(tv, index) in store.tvsObj" :key="index">
                                <div class="tv d-flex">
                                    <img :src="`https://image.tmdb.org/t/p/w342/${tv.poster_path}`" alt="">
                                    <div class="me-3">{{ tv.name }}</div>
                                    <div class="me-3">{{ tv.original_name }}</div>
                                    <img class="cntr-flag"
                                    :src="`../../node_modules/country-flag-icons/1x1/${tv.original_language.toUpperCase()}.svg`"
                                    :alt="tv.original_language.toUpperCase()">
                                    <div class="me-3">{{ tv.vote_average }}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
img {
    width: 200px;
    height: 150px;
}
.cntr-flag{
    width: 20px;
    height: 15px;
}
.card {
    width: 18rem;
    margin-bottom: 1rem;
}
</style>