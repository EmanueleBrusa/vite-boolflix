<template lang="">
    <div class="card">
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
</template>
<script>
export default {
    
}
</script>
<style lang="">
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
        border-radius: 15px;
    }
    .card-body{
        width: 100%;
        height: 100%;
        top: 0;
        right: 0; /*da passare a -100% per mettere il testo alla destra della carta*/
        position: absolute;
        background-color: black; /*colore hover*/
        backdrop-filter: blur(5px);
        border-radius: 15px;
        color: #fff;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: 0;
    }
    .card:hover .card-body{
        right: 0; /*rispostiamo il contenuto al centro della carta*/
    }
    .card-title{
        text-transform: uppercase;
        font-size: 50px;
        font-weight: 500;

    }
    .card-subtitle{
        text-transform: capitalize;
        font-size: 14px;
        font-weight: 300;

    }
    .card-info{
        font-size: 16px;
        line-height: 25px;
        margin: 40px 0;
        font-weight: 400;
    }
    .card-button{
        color: red;
        background: red;
        padding: 10px 20px;
        width: 120px;
        border-radius: 5px;
        text-transform: capitalize;
        border:none;
        outline: none;
        font-weight: 500;
        cursor: pointer;
    }

</style>