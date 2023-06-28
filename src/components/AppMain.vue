<script>

import { store } from '../store.js';

export default {
  data() {
      return{
          store
      }
  },
  computed: {
    hasFilms(){
      return this.store.filmsObj.length > 0;
    },
    hasTVs() {
      return this.store.tvsObj.length > 0;
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
    <!--sezione film-->
    <h1 v-if="hasFilms">Film:</h1>
    <div class="col-4" v-for="(film, index) in store.filmsObj" :key="index">
      <!--copertina-->
      <!--problemi con hover e testo sovrapposto, test da qui:-->
      <div class="card my-4">
        <!--POSTER con controllo per immagini mancanti-->
        <div v-if="film.poster_path !== null">
          <img class="poster" :src="`https://image.tmdb.org/t/p/w342/${film.poster_path}`" alt="">
        </div>
        <div v-else>
          <img src="../../public/picture-not-available-clipart-12.jpg" alt="Immagine non disponibile" class="img_not_found">
        </div>
        <!--cardbody per tutte le info aggiuntive-->
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
            <i v-for="n in 5" :key="n" style="color: #e9e316" class="fa-star" :class="(n <= Math.ceil(film.vote_average / 2)) ? 'fas' : 'far'"></i>
            <!--<i v-for="star in Math.round(film.vote_average / 2)" :key="star" class="fa-solid fa-star" style="color: #e9e316"></i>
            <i v-for="star in Math.round(5 - film.vote_average / 2)" :key="star" class="fa-regular fa-star" style="color: #e9e316"></i>-->
            </h4>
          </span>
          <!--overview---->
          <h4>Overview:</h4>
          <div class="me-3 card-info"> {{ film.overview }}</div>
          <!--bottone-->
        <button class="card-button">watch now</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- visualizzazione serie tv -->
<div class="container">
  <div class="row">
    <!--sezione serie tv-->
    <h1 v-if="hasTVs">Serie Tv:</h1>
    <!--RIPRENDERE A LAVORARE DA QUESTO PEZZO-->
    <div class="col-4" v-for="(tv, index) in store.tvsObj" :key="index">
      <div class="card my-4">
        <!--controllo per poster come sopra-->
        <div v-if="tv.poster_path !== null">
          <img class="poster" :src="`https://image.tmdb.org/t/p/w342/${tv.poster_path}`" alt=""> <!--qui mettere la copertina-->
        </div>
        <div v-else>
          <img src="../../public/picture-not-available-clipart-12.jpg" alt="Immagine non disponibile" class="img_not_found">
        </div>
        <!--body-->
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
            <span class="card-vote">
              <h4>Voto:
              <i v-for="n in 5" :key="n" style="color: #e9e316" class="fa-star" :class="(n <= Math.ceil(tv.vote_average / 2)) ? 'fas' : 'far'" ></i>
              <!--<i v-for="star in Math.round(tv.vote_average / 2)" :key="star" class="fa-solid fa-star" style="color: #e9e316"></i>
              <i v-for="star in Math.round(5 - tv.vote_average / 2)" :key="star" class="fa-regular fa-star" style="color: #e9e316"></i>-->
              </h4>
            </span>
            <!--overview-->
            <h4>Overview:</h4>
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
h1{
  color: white;
  text-shadow: 4px 4px 8px rgba(245, 0, 0, 0.616);
}
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
  font-size: 15px;
  font-weight: 500;
  h4{
    font-size: 15px;
  }
}
.card-subtitle{
  text-transform: capitalize;
  font-size: 10px;
  font-weight: 300;
  h4{
    font-size: 15px;
  }
}
.card-vote{
  font-size: 5px;
}
.card-info{
  height: 200px;
  font-size: 15px;
  line-height: 15px;
  margin: 5px 0;
  font-weight: 400;
  overflow-y: hidden;
}
.card-info:hover{
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
.img_not_found{
  padding-top: 50px;
  width: 100%;
  height: 100%;
}
</style>