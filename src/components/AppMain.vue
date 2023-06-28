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

<template>
<div class="container">
  <div class="row">
    <div class="col-4" v-for="(film, index) in store.filmsObj" :key="index">
      <!--copertina-->
      <!--problemi con hover e testo sovrapposto, test da qui:-->
      <div class="card my-4">
        <!--poster-->
        <img class="poster" :src="`https://image.tmdb.org/t/p/w342/${film.poster_path}`" alt=""> <!--qui mettere la copertina-->
        <div class="card-body">
          <!--flag-->
          <img class="cntr-flag"
          :src="`../../node_modules/country-flag-icons/1x1/${film.original_language.toUpperCase()}.svg`"
          :alt="film.original_language.toUpperCase()">
          <!--titolo-->
          <div class="me-3 card-title"><h4>Titolo:</h4> {{ film.title }}</div>
          <!--titolo originale-->
          <div class="me-3 card-subtitle"><h4>Titolo originale:</h4> {{ film.original_title }}</div>
          <!--voto-->
          <span>
            <h4>Voto:
            <i v-for="star in Math.round(film.vote_average / 2)" :key="star" class="fa-solid fa-star" style="color: #e9e316"></i>
            <i v-for="star in Math.round(5 - film.vote_average / 2)" :key="star" class="fa-regular fa-star" style="color: #e9e316"></i>
            </h4>
          </span>
          <!--overview---->
          <div class="me-3 card-info"><h4>Overview:</h4> {{ film.overview }}</div>
          <!--bottone-->
        <button class="card-button">watch now</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- visualizzazione serie tv -->
<div class="container">
  <div class="tv-wrapper row">
    <!--RIPRENDERE A LAVORARE DA QUESTO PEZZO-->
    <div class="col-4" v-for="(tv, index) in store.tvsObj" :key="index">
      <!--coperina-->
      <div class="card my-4">
        <img class="poster" :src="`https://image.tmdb.org/t/p/w342/${tv.poster_path}`" alt=""> <!--qui mettere la copertina-->
        <div class="card-body">
            <!--flag-->
            <img class="cntr-flag"
            :src="`../../node_modules/country-flag-icons/1x1/${tv.original_language.toUpperCase()}.svg`"
            :alt="tv.original_language.toUpperCase()">
            <!--titolo-->
            <div class="me-3 card-title"><h4>Titolo:</h4> {{ tv.name }}</div>
            <!--sottotitolo-->
            <div class="me-3 card-subtitle"><h4>Titolo originale:</h4> {{ tv.original_name }}</div>
            <!--voto-->
            <span>
                <h4>Voto:
                <i v-for="star in Math.round(tv.vote_average / 2)" :key="star" class="fa-solid fa-star" style="color: #e9e316"></i>
                <i v-for="star in Math.round(5 - tv.vote_average / 2)" :key="star" class="fa-regular fa-star" style="color: #e9e316"></i>
                </h4>
            </span>
            <!--overview-->
            <div class="me-3 card-info">{{ tv.overview }}</div>
            <!--bottone---->
            <button class="card-button">watch now</button>
        </div>
    </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
.poster {
  width: 100%;
  height: 550px;
  border: 2px solid white;
}
.cntr-flag{
  width: 20px;
  height: 15px;
}
li{
  list-style-type: none;
}
.card{
  width: 320px;
  height: 500px;
  border-radius: 20px;
  overflow: hidden; /*da commentare?*/ /*ok da riattivare alla fine*/
  border: 8px solid #fff;
  position: relative;
}
.card-img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
}
.card-body{
  width: 100%;
  height: 100%;
  top: 0;
  right: -100%; /*da passare a -100% per mettere il testo alla destra della carta*/
  position: absolute;
  background-color: black; /*colore hover*/
  backdrop-filter: blur(5px);
  border-radius: 15px;
  color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 1s;
}
.card:hover .card-body{
  right: 0; /*rispostiamo il contenuto al centro della carta*/
}
.card-title{
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  h4{
    font-size: 15px;
  }
}
.card-subtitle{
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 300;
  h4{
    font-size: 15px;
  }
}
.card-info{
  font-size: 15px;
  line-height: 15px;
  margin: 5px 0;
  font-weight: 400;
  overflow-y: scroll;
}
.card-button{
  color: white;
  background: red;
  width: 110px;
  height: 50px;
  border-radius: 5px;
  text-transform: capitalize;
  border:none;
  outline: none;
  font-weight: 500;
  cursor: pointer;
}
</style>